import { execFile } from 'child_process'
import fs from 'fs/promises'
import os from 'os'
import path from 'path'
import { promisify } from 'util'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import type { CollectionAfterChangeHook } from 'payload'

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

export const generateVideoPoster: CollectionAfterChangeHook = async ({ doc, req }) => {
  if (!doc.mimeType?.startsWith('video/') || !doc.url || !doc.filename) return doc
  if (!doc.url.startsWith('http')) return doc // local dev without Blob storage: no absolute URL to fetch

  const posterName = doc.filename.replace(/\.[^.]+$/, '') + '-poster.jpg'

  try {
    const existing = await req.payload.find({
      collection: 'media',
      where: { filename: { equals: posterName } },
      limit: 1,
    })
    if (existing.totalDocs > 0) return doc

    const videoBuffer = await fetchWithRetry(doc.url)

    const tmpDir = os.tmpdir()
    const videoPath = path.join(tmpDir, `poster-src-${doc.id}-${Date.now()}.mp4`)
    const posterPath = path.join(tmpDir, `poster-out-${doc.id}-${Date.now()}.jpg`)
    await fs.writeFile(videoPath, videoBuffer)

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

    await req.payload.create({
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

    await fs.unlink(videoPath).catch(() => {})
    await fs.unlink(posterPath).catch(() => {})
  } catch (err) {
    req.payload.logger.error({ err, msg: `Failed to generate video poster for media ${doc.id}` })
  }

  return doc
}
