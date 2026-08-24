import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Testimonials } from './collections/Testimonials'
import { Settings } from './globals/Settings'
import { Header } from './globals/Header'
import { Cta } from './globals/Cta'
import { Seo } from './globals/Seo'
import { Homepage } from './globals/Homepage'
import { Team } from './globals/Team'
import { Programma } from './globals/Programma'
import { Resultaten } from './globals/Resultaten'
import { Styling } from './globals/Styling'
import { SERVER_URL } from './lib/env'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/components/payload/Logo#Logo',
      },
      beforeDashboard: ['/components/payload/AnalyticsDashboard#AnalyticsDashboard'],
    },
    livePreview: {
      collections: ['pages'],
      globals: ['homepage', 'team', 'programma', 'resultaten'],
      breakpoints: [
        { name: 'mobile', label: 'Mobiel', width: 375, height: 667 },
        { name: 'tablet', label: 'Tablet', width: 768, height: 1024 },
        { name: 'desktop', label: 'Desktop', width: 1440, height: 900 },
      ],
      url: ({ data, collectionConfig, globalConfig }) => {
        if (globalConfig?.slug === 'homepage') return SERVER_URL
        if (globalConfig?.slug === 'team') return `${SERVER_URL}/team`
        if (globalConfig?.slug === 'programma') return `${SERVER_URL}/programma`
        if (globalConfig?.slug === 'resultaten') return `${SERVER_URL}/resultaten`
        if (collectionConfig?.slug === 'pages') return `${SERVER_URL}/${data.slug ?? ''}`

        return SERVER_URL
      },
    },
  },
  collections: [Pages, Media, Testimonials, Users],
  globals: [Styling, Settings, Header, Cta, Seo, Homepage, Team, Programma, Resultaten],
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  telemetry: false,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
})
