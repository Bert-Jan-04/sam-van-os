import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

const results = {
  heading: 'Resultaten die voor zich spreken',
  images: [
    { image: 35 },
    { image: 34 },
    { image: 33 },
    { image: 32 },
    { image: 31 },
    { image: null },
    { image: null },
  ],
}

const stories = {
  heading: 'Drie verhalen',
  subtext: 'Verschillende startpunten, hetzelfde traject.',
  items: [
    {
      eyebrowLabel: 'Verhaal 01',
      title: 'Verhaal van Lois',
      text: 'Na jaren van een ongezonde relatie met voeding en mijn lichaam, ontdekte ik dat echte progressie draait om kracht, balans en vertrouwen. Die persoonlijke reis groeide uit tot mijn passie: vandaag help ik andere vrouwen om sterker te worden, zelfverzekerder te voelen en een gezonde relatie met voeding op te bouwen. 🤍',
      name: 'Lois',
      photos: [
        { image: 42 },
        { image: 43 },
        { image: 44 },
        { image: 45 },
        { image: 46 },
        { image: 47 },
        { image: 48 },
        { image: 49 },
        { image: 50 },
        { image: 51 },
        { image: 52 },
        { image: 53 },
        { image: 54 },
        { image: 55 },
        { image: 56 },
        { image: 57 },
        { image: 58 },
        { image: 59 },
        { image: 60 },
      ],
    },
    {
      eyebrowLabel: 'Verhaal 02',
      title: 'Titel van het verhaal',
      text: 'Zet hier het verhaal van een klant neer: waar ze vandaan kwam, wat er onderweg veranderde en waar ze nu staat.',
      name: 'Naam klant',
      photos: [{ image: null }],
    },
    {
      eyebrowLabel: 'Verhaal 03',
      title: 'Titel van het verhaal',
      text: 'Zet hier het verhaal van een klant neer: waar ze vandaan kwam, wat er onderweg veranderde en waar ze nu staat.',
      name: 'Naam klant',
      photos: [{ image: null }],
    },
  ],
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'home',
    data: { results, stories },
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'home',
    data: {
      results: { heading: results.heading, images: [] },
      stories: { heading: stories.heading, subtext: stories.subtext, items: [] },
    },
    req,
  })
}
