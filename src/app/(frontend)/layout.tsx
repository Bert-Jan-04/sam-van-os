import React from 'react'
import { Analytics } from '@vercel/analytics/next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getStyling } from '@/lib/getStyling'
import { buildGoogleFontsHref, buildStylingVars } from '@/lib/buildStylingCss'
import { getOrganizationJsonLd } from '@/lib/getOrganizationJsonLd'
import { SERVER_URL } from '@/lib/env'
import './globals.css'

export const metadata = {
  title: 'Sam van Os Coaching',
  description: 'Website van Sam van Os Coaching.',
  metadataBase: new URL(SERVER_URL),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const [styling, organizationJsonLd] = await Promise.all([getStyling(), getOrganizationJsonLd()])

  const fontsHref = buildGoogleFontsHref(styling.typography)
  const styleVars = buildStylingVars(styling)

  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsHref} />
        <style>{`:root {\n  ${styleVars};\n}`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
