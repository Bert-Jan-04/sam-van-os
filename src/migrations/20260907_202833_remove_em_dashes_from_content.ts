import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// Exact (old -> new) text replacements, applied wherever they occur below.
// These mirror the fixes already made to the field defaults in the source
// (see homepageFields.ts, Programma.ts, Resultaten.ts).
const replacements: Array<[string, string]> = [
  [
    'Je bent niet bang om te starten — je bent bang dat het weer niet werkt.',
    'Je bent niet bang om te starten. Je bent bang dat het weer niet werkt.',
  ],
  [
    'Je krijgt geen PDF en een wekelijks berichtje — je krijgt een coach die naast je staat',
    'Je krijgt geen PDF en een wekelijks berichtje. Je krijgt een coach die naast je staat',
  ],
  [
    'Het probleem is niet weten — het is toepassen als het moeilijk wordt.',
    'Het probleem is niet weten. Het is toepassen als het moeilijk wordt.',
  ],
  [
    'nog nooit een voet in een sportschool hebt gezet — het startpunt is jouw situatie.',
    'nog nooit een voet in een sportschool hebt gezet. Het startpunt is jouw situatie.',
  ],
  [
    'een aanpak die werkt in een normaal leven — met verjaardagen',
    'een aanpak die werkt in een normaal leven, met verjaardagen',
  ],
  [
    'De meeste mensen stoppen niet omdat iets niet werkt — ze stoppen omdat het moeilijk wordt',
    'De meeste mensen stoppen niet omdat iets niet werkt. Ze stoppen omdat het moeilijk wordt',
  ],
  [
    'Dat is het verschil met iets in je eentje doen — je hebt iemand die niet opgeeft',
    'Dat is het verschil met iets in je eentje doen. Je hebt iemand die niet opgeeft',
  ],
  [
    'Elke week ontvang je persoonlijke feedback — via video, Loom of een call',
    'Elke week ontvang je persoonlijke feedback, via video, Loom of een call',
  ],
  [
    'Het is geen eenzijdig schema dat je afwerkt — het is een doorlopend gesprek.',
    'Het is geen eenzijdig schema dat je afwerkt. Het is een doorlopend gesprek.',
  ],
  [
    'iets anders dan wat wij bieden — dan zeggen we dat liever nu dan halverwege.',
    'iets anders dan wat wij bieden, dan zeggen we dat liever nu dan halverwege.',
  ],
  ['01 — Start', '01 - Start'],
  ['02 — Fundament', '02 - Fundament'],
  ['03 — Implementatie', '03 - Implementatie'],
  ['04 — Verdieping', '04 - Verdieping'],
  ['05 — Zelfstandigheid', '05 - Zelfstandigheid'],
  ['06 — Rebuild', '06 - Rebuild'],
  ['02 — Jouw plan', '02 - Jouw plan'],
  ['03 — Begeleiding', '03 - Begeleiding'],
  ['04 — Samen groeien', '04 - Samen groeien'],
  ['05 — Gewoontes opbouwen', '05 - Gewoontes opbouwen'],
  ['06 — Een nieuwe basis', '06 - Een nieuwe basis'],
  ['Naam klant — 26 weken Rebuild', 'Naam klant - 26 weken Rebuild'],
  ['Stephanie — 2,5 maand Rebuild', 'Stephanie - 2,5 maand Rebuild'],
  ['Marielle — 6 maanden Rebuild', 'Marielle - 6 maanden Rebuild'],
  ['Amber — 8 maanden Rebuild', 'Amber - 8 maanden Rebuild'],
  ['Janine — 8 maanden Rebuild', 'Janine - 8 maanden Rebuild'],
  [
    'Wekelijks, als trend over meerdere weken — niet als dagcijfer.',
    'Wekelijks, als trend over meerdere weken, niet als dagcijfer.',
  ],
]

function fixEmDashes(value: string): string {
  let result = value
  for (const [oldText, newText] of replacements) {
    result = result.split(oldText).join(newText)
  }
  return result
}

function deepFix<T>(value: T): T {
  if (typeof value === 'string') {
    return fixEmDashes(value) as unknown as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepFix(item)) as unknown as T
  }
  if (value && typeof value === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = deepFix(val)
    }
    return result as T
  }
  return value
}

const systemKeys = new Set(['id', 'createdAt', 'updatedAt', 'globalType', '_status'])

function omitSystemFields(doc: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(doc).filter(([key]) => !systemKeys.has(key)))
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const slug of ['homepage', 'programma', 'resultaten'] as const) {
    const doc = await payload.findGlobal({ slug, depth: 0, req })
    await payload.updateGlobal({
      slug,
      data: deepFix(omitSystemFields(doc as unknown as Record<string, unknown>)) as never,
      req,
    })
  }

  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'rebuild-together' } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  const rebuildTogetherPage = pages[0]

  if (rebuildTogetherPage) {
    await payload.update({
      collection: 'pages',
      id: rebuildTogetherPage.id,
      data: { layout: deepFix(rebuildTogetherPage.layout) } as never,
      overrideAccess: true,
      req,
    })
  }
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Content-only fix; not reversible (original em dashes are not restored).
}
