import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

const newItems = [
  {
    quote:
      'Wil je echt bedanken want jij helpt me echt dat zwart wit denken te doorbreken!!!\nFitness coach en me therapeut 😂😂😂',
  },
  {
    quote:
      'Wil je sws ff bedanken tot nu toe, heb et idee dat ik in die tijd dat ik nu de coaching doe al meer progressie heb gemaakt dan in die andere jaren, ben blij dat je me toentertijd een bericht stuurde 💪',
  },
  {
    quote:
      'Heyhey, wilde je toch even laten weten, dat ik echt mega blij ben dat ik paar maanden terug de keuze heb gemaakt om met jou aan de slag te gaan! Super fijne begeleiding maak ik nu meer gebruik van dan op het begin (toch een drempel om, om hulp te vragen). Maar wat een verschil en dit ga ik voortzetten!',
  },
  {
    quote:
      'Ondanks dat ik af en toe gek wordt van je "gezeur" ben ik blij dat je achter mij staat. Ik merk dat het wel de stok achter de deur is die ik nodig heb en daardoor in 7 maanden tijd 10 kilo kwijt ben.\nOp naar de volgende 10',
  },
  {
    quote:
      'Sinds ik 3 weken geleden begonnen ben met de coaching van Sam ben ik inmiddels al 3,6 kilo afgevallen!\nDe samenwerking is echt top. Sam motiveert je, denkt echt met je mee en geeft regelmatig complimenten (wat ook weer motiveert). Het is ook superfijn dat hij altijd bereikbaar is, als je vragen over je training hebt of als je het even niet meer ziet zitten, is hij er altijd voor je. De wekelijkse calls geven mij ook altijd weer net iets meer motivatie en daarin is ook altijd te merken dat hij echt weet waar hij het over heeft.\nIk zou de coaching zeker aanraden want het helpt mij echt!',
  },
  {
    quote:
      "Ik merk dat ik het gewicht nog lastig vind om los te laten, omdat dit nog vrij erg schommelt. Als ik dan de foto's langs elkaar zie, is het toch al duidelijk verschil in de korte tijd dat ik met jou bezig ben! Ik zou het zeker aanraden. Het is lastig om jezelf helemaal over te geven aan iemand, en alles eigenlijk los te laten. Daar zijn zeker nog stappen in te maken! Verder ben ik zeer positief over de samenwerking en weet ik zeker dat het veel mensen kan helpen!",
  },
  {
    quote:
      'Heyy Sam, dubbele winst dit weekend! Gisteren 1800 kcal weer aangetikt en vandaag eindelijk weer in de sportschool geweest. Het was echt heel zwaar, maar we hebben doorgezet en des te meer bevestiging dat ik weer wil doorpakken! Kortom, morgen nog even keer trainen en dan hebben we mijn doel behaald, planning kan beter, maar a win is a win! 🚀\n\nEn natuurlijk de lijn van 1750/1800/1850 doorzetten, lets go! 🔥',
  },
  {
    quote:
      'En tot vandaag de dag nu zelf zonder je heb je de basis gelegd voor nog meer progressie! Emotie eten heb je me helemaal leren overwinnen en zelfs nu met jou kennis kan ik nog meer groeien! Je bent de beste beslissing geweest die ik ooit voor mijzelf heb kunnen maken 🫶\n\nIk wil je dan ook ontzettend bedanken voor de support en de kennis van afgelopen periode. Ik kijk uit naar het komende jaar en heb zin om er met volle vaart en kracht voor te gaan. 🤝',
  },
]

const oldItems = [
  {
    title: 'Samen een doel gesteld en behaald',
    quote: 'Zet hier een review van een klant neer.',
  },
  {
    title: 'Eindelijk een schema dat past',
    quote: 'Zet hier een review van een klant neer.',
  },
  {
    title: 'Serieuze training met een lach',
    quote: 'Zet hier een review van een klant neer.',
  },
  {
    title: 'Fitter, sterker en zelfverzekerder',
    quote: 'Zet hier een review van een klant neer.',
  },
  {
    title: 'Geweldige online coaching',
    quote: 'Zet hier een review van een klant neer.',
  },
]

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'homepage',
    data: { testimonials: { items: newItems } },
    req,
  })
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.updateGlobal({
    slug: 'homepage',
    data: { testimonials: { items: oldItems } },
    req,
  })
}
