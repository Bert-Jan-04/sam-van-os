import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// The previous em-dash migration's replacement list used the source
// default text ("Naam klant — 26 weken Rebuild") instead of the actual
// live value ("Marielle — 26 weken Rebuild"), so this one slipped through.
export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const programma = await payload.findGlobal({ slug: 'programma', depth: 0, req })
  const items = (programma.results?.items ?? []).map((item) => ({
    ...item,
    quoteText: item.quoteText?.split('—').join('-'),
  }))

  await payload.updateGlobal({
    slug: 'programma',
    data: { results: { ...programma.results, items } },
    req,
  })
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Content-only fix; not reversible.
}
