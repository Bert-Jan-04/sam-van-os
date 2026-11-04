import { execFile } from 'child_process'
import fs from 'fs/promises'
import os from 'os'
import path from 'path'
import { promisify } from 'util'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import type { Payload } from 'payload'

const execFileAsync = promisify(execFile)

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchWithRetry(url: string, attempts = 3): Promise<Buffer> {
  let lastError: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`status ${res.status}`)
      return Buffer.from(await res.arrayBuffer())
    } catch (err) {
      lastError = err
      await sleep(1000 * (i + 1))
    }
  }
  throw lastError
}

export function posterFilenameFor(filename: string): string {
  return filename.replace(/\.[^.]+$/, '') + '-poster.jpg'
}

type VideoDoc = {
  id: number | string
  filename?: string | null
  url?: string | null
  mimeType?: string | null
}

/**
 * Generates and uploads the poster image for a video Media doc if it doesn't exist yet.
 * Shared by the upload hook (write path) and the on-demand poster route (self-healing read path),
 * since the write path can time out on Vercel for larger videos.
 */
export async function ensurePosterForVideo(
  payload: Payload,
  doc: VideoDoc,
): Promise<string | undefined> {
  if (!doc.mimeType?.startsWith('video/') || !doc.url || !doc.filename) return undefined
  if (!doc.url.startsWith('http')) return undefined // local dev without Blob storage: no absolute URL to fetch

  const posterName = posterFilenameFor(doc.filename)

  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: posterName } },
    limit: 1,
    overrideAccess: true,
  })
  if (existing.totalDocs > 0) return existing.docs[0]?.url ?? undefined

  const videoBuffer = await fetchWithRetry(doc.url)

  const tmpDir = os.tmpdir()
  const videoPath = path.join(tmpDir, `poster-src-${doc.id}-${Date.now()}.mp4`)
  const posterPath = path.join(tmpDir, `poster-out-${doc.id}-${Date.now()}.jpg`)
  await fs.writeFile(videoPath, videoBuffer)

  try {
    await execFileAsync(ffmpegInstaller.path, [
      '-ss',
      '1.5',
      '-i',
      videoPath,
      '-vframes',
      '1',
      '-q:v',
      '3',
      '-y',
      posterPath,
    ])

    const posterBuffer = await fs.readFile(posterPath)

    const created = await payload.create({
      collection: 'media',
      data: { alt: `Voorbeeldbeeld voor ${doc.filename}` },
      file: {
        data: posterBuffer,
        name: posterName,
        mimetype: 'image/jpeg',
        size: posterBuffer.length,
      },
      overrideAccess: true,
    })

    return created.url ?? undefined
  } finally {
    await fs.unlink(videoPath).catch(() => {})
    await fs.unlink(posterPath).catch(() => {})
  }
}
