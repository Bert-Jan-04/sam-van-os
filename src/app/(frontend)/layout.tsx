import React from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getStyling } from '@/lib/getStyling'
import { buildGoogleFontsHref, buildStylingVars } from '@/lib/buildStylingCss'
import './globals.css'

export const metadata = {
  title: 'Sam van Os Coaching',
  description: 'Website van Sam van Os Coaching.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const styling = await getStyling()

  const fontsHref = buildGoogleFontsHref(styling.typography)
  const styleVars = buildStylingVars(styling)

  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsHref} />
        <style>{`:root {\n  ${styleVars};\n}`}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
