'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Page } from '@/payload-types'
import { BlockRenderer } from '@/components/BlockRenderer'

export const PageView: React.FC<{ page: Page }> = ({ page: initialPage }) => {
  const { data: page } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: SERVER_URL,
  })

  if (!page.layout || page.layout.length === 0) {
    return (
      <div className="bg-navy mx-auto max-w-3xl px-4 py-16 text-center text-caption">
        <p>
          Deze pagina (&quot;{page.title}&quot;) heeft nog geen inhoud. Voeg blocks toe in het
          Payload admin panel.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-navy min-h-screen">
      <BlockRenderer blocks={page.layout} />
    </div>
  )
}
