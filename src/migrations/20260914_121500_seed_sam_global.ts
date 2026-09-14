import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

const data = {
  hero: {
    eyebrow: 'Oprichter',
    heading: 'Niet perfect. Wel consistent.',
    intro:
      'Van een ongeluk op mijn zeventiende tot de oprichter van The Rebuild Program. Dit is het verhaal achter Van Os Coaching, en de reden waarom we het zo aanpakken als we doen.',
  },
  chapters: [
    {
      heading: 'Het ongeluk',
      text: 'Mijn verhaal begint eigenlijk al op jonge leeftijd. Als kind was ik altijd sportief. Ik vond sporten geweldig en was er veel mee bezig. Totdat ik op mijn zeventiende een heftig ongeluk kreeg waarbij ik mijn nek, schedel en kaak brak.',
    },
    {
      heading: 'De neerwaartse spiraal',
      text: 'Dat ongeluk veranderde alles. Ik kwam volledig stil te liggen en hield lange tijd last van hoofdpijn, vooral tijdens inspanning. Daardoor stopte ik met sporten. Wat begon als noodgedwongen rust, veranderde langzaam in een compleet ongezonde leefstijl. Ik ging steeds meer gamen, steeds meer eten en steeds minder bewegen. Langzaam maar zeker kwam ik steeds verder aan. Op een gegeven moment bereikte ik een punt waarop ik mezelf letterlijk niet meer in de spiegel kon aankijken. Ik wist dat er iets moest veranderen. Alleen pakte ik het volledig verkeerd aan. Zoals zoveel mensen deed ik precies wat ik dacht dat nodig was. Ik ging extreem sporten, volgde extreem strenge diëten en legde mezelf gigantisch veel regels op. Dat werkte misschien heel even, maar uiteindelijk viel ik altijd terug. Ik viel af, kwam weer aan, begon opnieuw, gaf op en begon weer opnieuw. Daar ontstond eigenlijk mijn alles-of-niets mentaliteit. Of ik deed alles perfect, of ik deed helemaal niks.',
    },
    {
      heading: 'Het keerpunt',
      text: 'Die manier van leven zorgde ervoor dat ik steeds verder vastliep. Ik kreeg steeds slechtere gewoontes, blowde iedere dag en at vanuit emotie. Ik gebruikte eten eigenlijk als manier om met mijn gevoelens om te gaan. Ik zat steeds dieper in die negatieve spiraal zonder dat ik zelf doorhad hoe ver ik eigenlijk wegzakte. Totdat alles instortte. Mijn relatie ging uit. Achteraf gezien niet omdat die relatie het probleem was, maar omdat ik zelf niet de persoon was die ik wilde zijn. Toen ik weer thuis kwam te zitten, was dat misschien wel het meest confronterende moment uit mijn leven. Ik had twee keuzes: of ik bleef doorgaan zoals ik bezig was, of ik ging eindelijk verantwoordelijkheid nemen voor mijn eigen leven.',
    },
    {
      heading: 'Niet meer alles of niets',
      text: 'Vanaf dat moment ben ik alles gaan leren wat ik maar kon over voeding, training, gedrag, gewoontes en psychologie. Niet om zo snel mogelijk af te vallen, maar om te begrijpen waarom ik steeds terugviel. Langzaam veranderde mijn focus. Niet meer alles of niets, niet meer perfect, maar consistent. Ik begon kleine afspraken met mezelf na te komen en bouwde stap voor stap nieuwe gewoontes op. Ik ontdekte dat een gezonde leefstijl niet draait om perfect eten, uren sporten of jezelf alles verbieden. Het draait om vertrouwen krijgen in jezelf.',
    },
    {
      heading: 'Waarom Rebuild bestaat',
      text: 'Vanuit die ervaring ben ik uiteindelijk het coachvak ingerold. En toen viel me iets op: vrijwel iedere klant die ik hielp, liep tegen precies dezelfde patronen aan als waar ik zelf jarenlang tegenaan was gelopen. Alles of niets, steeds opnieuw beginnen, jezelf straffen als iets niet lukt. Dat is uiteindelijk de basis geworden van het Rebuild Program. We helpen mensen niet alleen met afvallen. Waar we echt aan werken, is het opbouwen van een leefstijl waarin je weer op jezelf leert vertrouwen. En dat is precies de reden waarom Van Os Coaching en het Rebuild Program bestaan.',
    },
  ],
  quote: {
    text: 'Voor mij is dát de definitie van zelfvertrouwen: letterlijk vertrouwen hebben in jezelf.',
    attribution: 'Sam van Os',
  },
  closing: {
    heading: 'Klaar om je eigen fundament te bouwen?',
    text: 'In een kennismakingsgesprek kijken we samen naar jouw situatie en of Rebuild bij je past.',
  },
  private: false,
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'sam',
    data,
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'sam',
    data: { hero: {}, chapters: [], quote: {}, closing: {} },
    req,
  })
}
