import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { ensurePosterForVideo, posterFilenameFor } from '@/lib/videoPoster'

// Poster generation (fetch video + ffmpeg) can take longer than the default
// function timeout, so this needs its own, longer budget.
export const maxDuration = 60

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get('src')
  if (!src) return NextResponse.json({ error: 'Missing src' }, { status: 400 })

  const toAbsolute = (url: string) => new URL(url, request.url).toString()

  const [srcPath] = src.split('?')
  const filename = decodeURIComponent(path.posix.basename(srcPath))
  const posterName = posterFilenameFor(filename)

  const payload = await getPayloadClient()

  const existingPoster = await payload.find({
    collection: 'media',
    where: { filename: { equals: posterName } },
    limit: 1,
    overrideAccess: true,
  })
  if (existingPoster.totalDocs > 0 && existingPoster.docs[0]?.url) {
    return NextResponse.redirect(toAbsolute(existingPoster.docs[0].url))
  }

  const video = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  })
  const videoDoc = video.docs[0]
  if (!videoDoc) return NextResponse.json({ error: 'Video not found' }, { status: 404 })

  try {
    const posterUrl = await ensurePosterForVideo(payload, videoDoc)
    if (!posterUrl) {
      return NextResponse.json({ error: 'Could not generate poster' }, { status: 500 })
    }
    return NextResponse.redirect(toAbsolute(posterUrl))
  } catch (err) {
    payload.logger.error({ err, msg: `Failed to generate poster for video ${videoDoc.id}` })
    return NextResponse.json({ error: 'Could not generate poster' }, { status: 500 })
  }
}
