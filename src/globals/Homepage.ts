import type { GlobalConfig } from 'payload'

import { imageField } from '@/fields/image'

const repeat = <T>(count: number, factory: () => T): T[] => Array.from({ length: count }, factory)

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        { name: 'ratingValue', type: 'text', defaultValue: '5,0' },
        { name: 'ratingLabel', type: 'text', defaultValue: 'uit 35 Google reviews' },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Niet weer opnieuw beginnen, jezelf opnieuw opbouwen.',
        },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'The Rebuild Program is zes maanden persoonlijke coaching voor vrouwen die willen afvallen. We werken aan voeding en training, maar vooral aan de patronen eronder, want dáár loop je elke keer op vast.',
        },
        imageField('image', 'Foto'),
        { name: 'memberBadgeText', type: 'text', defaultValue: '100+ leden' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistieken',
      labels: { singular: 'Statistiek', plural: 'Statistieken' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'suffix', type: 'text' },
        { name: 'label', type: 'text', required: true },
      ],
      defaultValue: [
        { value: '120', suffix: '+', label: 'vrouwen begeleid' },
        { value: '-8 kg', suffix: '', label: 'gemiddeld in 6 maanden' },
        { value: '4.9', suffix: '/5', label: 'gemiddelde beoordeling' },
      ],
    },
    {
      name: 'problem',
      type: 'group',
      label: '"Misschien herken je dit"',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Misschien herken je dit' },
        {
          name: 'intro1',
          type: 'textarea',
          defaultValue:
            'Je bent al tig keer opnieuw begonnen. Je weet wat je moet doen, maar het volhouden lukt niet.',
        },
        {
          name: 'intro2',
          type: 'textarea',
          defaultValue:
            'Niet omdat je te weinig discipline hebt, maar omdat je nooit hebt geleerd hoe je een leefstijl bouwt die écht bij je past.',
        },
        {
          name: 'cards',
          type: 'array',
          labels: { singular: 'Kaart', plural: 'Kaarten' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
            {
              name: 'highlight',
              type: 'checkbox',
              label: 'Uitgelicht (blauw)',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              title: 'Maandag opnieuw beginnen',
              text: 'Je eet een weekend niet volgens plan en maandag begin je weer vanaf nul. Elke week voelt als een nieuwe poging, en elke poging maakt het moeilijker om te geloven dat het ooit blijft.',
              highlight: false,
            },
            {
              title: 'Weten maar niet doen',
              text: 'Je weet wat gezond is. Je hebt genoeg gelezen, genoeg geprobeerd. Het probleem is niet dat je het niet weet, het is dat je het niet volhoudt zodra het leven druk wordt.',
              highlight: false,
            },
            {
              title: 'Emotie-eten',
              text: 'Stress, vermoeidheid, een rotdag, en voor je het weet sta je in de keuken. Niet uit honger, maar omdat eten het enige is dat even rust geeft. En daarna het schuldgevoel.',
              highlight: true,
            },
            {
              title: 'Alles of niets',
              text: 'Je bent of héél goed bezig, of je laat alles los. Er is geen tussenmodus. Eén koekje wordt een hele avond, en dan denk je: laat maar, volgende week weer.',
              highlight: false,
            },
            {
              title: 'Geen vertrouwen meer',
              text: 'Je hebt al drie keer eerder iets geprobeerd. Elke keer dacht je: nu wel. En elke keer kwam het gewicht terug. Je bent niet bang om te starten — je bent bang dat het weer niet werkt.',
              highlight: false,
            },
          ],
        },
      ],
    },
    {
      name: 'philosophy',
      type: 'group',
      label: 'Filosofie',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Waarom elk plan tot nu toe stopte.' },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            'De meeste aanpakken beginnen bij het plan: zoveel calorieën, zoveel trainingen, dit schema, die regels. En dat werkt, zolang je gemotiveerd bent, rust hebt en alles meezit.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          label: 'Paragraaf 2 (dikgedrukt)',
          defaultValue: 'Maar echte verandering begint pas als je werkt aan wie je bent.',
        },
      ],
    },
    {
      name: 'pillars',
      type: 'group',
      label: '"Hoe Rebuild anders werkt"',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Hoe Rebuild anders werkt.' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Geen schema met een motiverend berichtje erbij. Vier lagen die samen bepalen of verandering blijft staan.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Pijler', plural: 'Pijlers' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
            imageField('image', 'Foto'),
            {
              name: 'reversed',
              type: 'checkbox',
              label: 'Foto rechts (in plaats van links)',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              title: 'Persoonlijke coaching',
              text: 'Je eigen coach die naast je staat. Niet een app die je data bekijkt, maar iemand die weet wat er speelt, confronteert als het nodig is en er ook is als het even niet gaat.',
              reversed: false,
            },
            {
              title: 'Gedrag en patronen',
              text: 'Wat je doet als het moeilijk wordt. Hoe je reageert op een slechte dag, waarom je stopt na één misstap. Daar zit de verandering die elk plan mist.',
              reversed: true,
            },
            {
              title: 'Mindset en zelfbeeld',
              text: 'Hoe je tegen jezelf praat na een terugval. Wat je gelooft over jezelf en eten. Die overtuigingen veranderen is net zo belangrijk als je voeding veranderen.',
              reversed: false,
            },
            {
              title: 'Voeding, training en leefstijl',
              text: 'Natuurlijk werken we aan wat je eet, hoe je beweegt, je slaap en je structuur. Maar passend bij jouw leven, niet bij een schema dat stopt zodra het druk wordt.',
              reversed: true,
            },
          ],
        },
      ],
    },
    {
      name: 'journey',
      type: 'group',
      label: 'Traject',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'Het traject' },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Zes maanden. Eén coach. Een heel nieuw fundament.',
        },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'The Rebuild Program is geen cursus die je doorklikt. Het is een traject met een begin, een midden en een einde, en een coach die de hele weg naast je loopt.',
        },
        imageField('image', 'Foto'),
        {
          name: 'steps',
          type: 'array',
          labels: { singular: 'Stap', plural: 'Stappen' },
          fields: [
            { name: 'phase', type: 'text', required: true, label: 'Periode (bijv. "Week 1 – 6")' },
            { name: 'title', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
            { name: 'highlight', type: 'textarea', label: 'Uitgelichte zin (optioneel)' },
          ],
          defaultValue: [
            {
              phase: 'Voor de start',
              title: 'Intake en voorbereiding',
              text: 'Je brengt je situatie, geschiedenis en patronen in kaart. Je coach leest alles en bereidt een persoonlijk startplan voor. Zo begint de kick-off niet bij nul, maar bij jou.',
            },
            {
              phase: 'Week 1 – 6',
              title: 'Fundament leggen',
              text: 'Kick-off, eerste routines, en meteen de confrontatie met je patronen. Wekelijkse persoonlijke feedback en strategische calls om de basis stabiel te krijgen, ook als het schuurt.',
              highlight: 'Hier ontdek je wat je echt tegenhoudt. Dat is zelden wat je denkt.',
            },
            {
              phase: 'Week 7 – 16',
              title: 'Verdiepen en vasthouden',
              text: 'Plateaus, sociale situaties, vakantie, stress, alles wat normaal het moment is waarop je stopt. Nu heb je een coach die je er doorheen haalt en een community die hetzelfde meemaakt.',
              highlight:
                'Halverwege een uitgebreide evaluatie: wat werkt, wat niet, en waar gaan we heen.',
            },
            {
              phase: 'Week 17 – 26',
              title: 'Zelfstandig worden',
              text: 'Minder afhankelijk van je coach, meer vertrouwen in je eigen keuzes. Je leert omgaan met moeilijke weken zonder terug te vallen in oude patronen. Het doel: dit is hoe je leeft, niet hoe je een programma volgt.',
              highlight: 'Eindgesprek, evaluatie en de keuze: zelfstandig verder of verlengen.',
            },
          ],
        },
      ],
    },
    {
      name: 'results',
      type: 'group',
      label: 'Resultaten',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Resultaten die voor zich spreken' },
        {
          name: 'images',
          type: 'array',
          labels: { singular: 'Foto', plural: "Foto's" },
          fields: [imageField('image', 'Foto')],
          defaultValue: repeat(6, () => ({})),
        },
      ],
    },
    {
      name: 'stories',
      type: 'group',
      label: 'Verhalen',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Drie verhalen' },
        {
          name: 'subtext',
          type: 'text',
          defaultValue: 'Verschillende startpunten, hetzelfde traject.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Verhaal', plural: 'Verhalen' },
          fields: [
            {
              name: 'eyebrowLabel',
              type: 'text',
              required: true,
              admin: { description: 'Bijv. "Verhaal 01"' },
            },
            { name: 'title', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
            { name: 'name', type: 'text', required: true },
            {
              name: 'photos',
              type: 'array',
              labels: { singular: 'Foto', plural: "Foto's" },
              admin: {
                description:
                  "Eén foto toont een vaste afbeelding, meerdere foto's tonen een swipebare carrousel.",
              },
              fields: [imageField('image', 'Foto')],
            },
          ],
          defaultValue: [
            {
              eyebrowLabel: 'Verhaal 01',
              title: 'Verhaal van Lois',
              text: 'Na jaren van een ongezonde relatie met voeding en mijn lichaam, ontdekte ik dat echte progressie draait om kracht, balans en vertrouwen. Die persoonlijke reis groeide uit tot mijn passie: vandaag help ik andere vrouwen om sterker te worden, zelfverzekerder te voelen en een gezonde relatie met voeding op te bouwen. 🤍',
              name: 'Lois',
              photos: repeat(19, () => ({})),
            },
            {
              eyebrowLabel: 'Verhaal 02',
              title: 'Titel van het verhaal',
              text: 'Zet hier het verhaal van een klant neer: waar ze vandaan kwam, wat er onderweg veranderde en waar ze nu staat.',
              name: 'Naam klant',
              photos: [{}],
            },
            {
              eyebrowLabel: 'Verhaal 03',
              title: 'Titel van het verhaal',
              text: 'Zet hier het verhaal van een klant neer: waar ze vandaan kwam, wat er onderweg veranderde en waar ze nu staat.',
              name: 'Naam klant',
              photos: [{}],
            },
          ],
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'group',
      label: 'Testimonials',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Niet onze woorden, maar die van hen' },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Testimonial', plural: 'Testimonials' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'quote', type: 'textarea', required: true },
            { name: 'name', type: 'text', required: true },
          ],
          defaultValue: [
            {
              title: 'Samen een doel gesteld en behaald',
              quote: 'Zet hier een review van een klant neer.',
              name: 'Naam klant',
            },
            {
              title: 'Eindelijk een schema dat past',
              quote: 'Zet hier een review van een klant neer.',
              name: 'Naam klant',
            },
            {
              title: 'Serieuze training met een lach',
              quote: 'Zet hier een review van een klant neer.',
              name: 'Naam klant',
            },
            {
              title: 'Fitter, sterker en zelfverzekerder',
              quote: 'Zet hier een review van een klant neer.',
              name: 'Naam klant',
            },
            {
              title: 'Geweldige online coaching',
              quote: 'Zet hier een review van een klant neer.',
              name: 'Naam klant',
            },
          ],
        },
      ],
    },
    {
      name: 'community',
      type: 'group',
      label: 'Community',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Word onderdeel van de community' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Trainen doe je niet alleen. Events, meetups en overwinningen vieren we samen.',
        },
        { name: 'memberCountText', type: 'text', defaultValue: '100+' },
        { name: 'memberCountLabel', type: 'text', defaultValue: 'LEDEN TRAINEN SAMEN' },
        {
          name: 'photos',
          type: 'array',
          labels: { singular: 'Foto', plural: "Foto's" },
          fields: [imageField('image', 'Foto')],
          defaultValue: repeat(4, () => ({})),
        },
        { name: 'starsHeading', type: 'text', defaultValue: 'Rebuild sterren' },
        {
          name: 'starsSubtext',
          type: 'textarea',
          defaultValue:
            'Rebuild klanten die met hun verhaal ontzettend veel mensen op social media inspireren.',
        },
        {
          name: 'starsVideos',
          type: 'array',
          label: "Video's",
          labels: { singular: 'Video', plural: "Video's" },
          fields: [imageField('video', 'Video')],
          defaultValue: repeat(4, () => ({})),
        },
      ],
    },
    {
      name: 'aboutSam',
      type: 'group',
      label: 'Ontmoet Sam',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Ontmoet Sam' },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            'Ik ben Sam van Os en ik help mensen om fitter, sterker en zelfverzekerder te worden op een manier die écht bij hun leven past. Geen streng dieet of eindeloze uren in de sportschool, maar een aanpak die je kunt volhouden én waar je plezier uit haalt.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'Door mijn ervaring met coaching weet ik dat ieder lichaam en iedere situatie anders is. Daarom kijk ik niet alleen naar training en voeding, maar vooral naar jou als persoon. Samen werken we aan resultaat dat niet alleen zichtbaar is, maar waar je je ook goed bij voelt.',
        },
        { name: 'closingLine', type: 'text', defaultValue: 'Klaar om samen aan de slag te gaan?' },
        imageField('horizontalImage', 'Foto (horizontaal, boven de tekst)'),
        imageField('image1', 'Foto 1 (rechterkolom)'),
        imageField('image2', 'Foto 2 (rechterkolom)'),
        imageField('bottomImage', 'Video (rechterkolom, onder)'),
      ],
    },
    {
      name: 'team',
      type: 'group',
      label: 'Team',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Ontmoet het Rebuild team' },
        {
          name: 'subtext',
          type: 'text',
          defaultValue: 'De coaches die naast je staan tijdens je traject.',
        },
        imageField('groupImage', 'Groepsfoto'),
        {
          name: 'members',
          type: 'array',
          labels: { singular: 'Teamlid', plural: 'Teamleden' },
          fields: [
            imageField('image', 'Foto'),
            { name: 'name', type: 'text', required: true },
            { name: 'role', type: 'text', label: 'Rol binnen Rebuild', required: true },
            { name: 'bio', type: 'textarea', required: true },
          ],
          defaultValue: repeat(3, () => ({
            name: 'Naam coach',
            role: 'Rol binnen Rebuild',
            bio: 'Korte introductie: specialisme, ervaring en waar deze coach je bij helpt.',
          })),
        },
      ],
    },
    {
      name: 'content',
      type: 'group',
      label: 'Content-sectie',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Bekijk mijn content' },
        {
          name: 'videos',
          type: 'array',
          label: "Video's",
          labels: { singular: 'Video', plural: "Video's" },
          fields: [imageField('video', 'Video')],
          defaultValue: repeat(3, () => ({})),
        },
      ],
    },
    {
      name: 'faq',
      type: 'group',
      label: 'Veelgestelde vragen',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Veelgestelde vragen' },
        {
          name: 'subtext',
          type: 'text',
          defaultValue: 'Staat je vraag er niet bij? Stel hem in het kennismakingsgesprek.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Vraag', plural: 'Vragen' },
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'textarea', required: true },
          ],
          defaultValue: [
            {
              question: 'Wat maakt dit anders dan een voedings- en trainingsschema?',
              answer:
                'Een schema vertelt je wat je moet doen. Dat is niet waar je vastloopt. Je loopt vast op het moment dat het druk wordt, dat je een slechte dag hebt, dat je na één weekend denkt: laat maar, maandag opnieuw. Rebuild werkt aan voeding en training, maar net zo serieus aan de patronen die ervoor zorgen dat elk plan tot nu toe stopte. Je krijgt geen PDF en een wekelijks berichtje — je krijgt een coach die naast je staat, wekelijkse persoonlijke feedback, strategische gesprekken en een community van vrouwen die met dezelfde dingen worstelen.',
            },
            {
              question: 'Ik weet eigenlijk al best veel over afvallen. Heeft coaching dan wel zin?',
              answer:
                'Juist dan. De meeste vrouwen die bij ons starten hebben geen gebrek aan kennis. Ze weten wat gezond is, ze hebben genoeg gelezen en genoeg geprobeerd. Het probleem is niet weten — het is toepassen als het moeilijk wordt. Omgaan met een terugval, met emotie-eten, met de stem in je hoofd die zegt dat het toch geen zin heeft. Daar zit de coaching: niet in wat je moet doen, maar in wat je tegenhoudt.',
            },
            {
              question: 'Wat kost het?',
              answer:
                'De exacte investering bespreken we in het kennismakingsgesprek, omdat die afhangt van je situatie en het type traject. Wat we wél willen zeggen: dit is geen fitnessapp van tien euro per maand. Je investeert in zes maanden persoonlijke coaching, wekelijkse begeleiding, strategische gesprekken en een aanpak die gebouwd is om blijvend resultaat te geven. We zijn daarin bewust duurder dan een schema of een groepsprogramma, omdat de begeleiding persoonlijker en intensiever is dan wat je daar krijgt. In het kennismakingsgesprek kijken we samen of die investering past bij wat je zoekt.',
            },
            {
              question: 'Moet ik al kunnen sporten?',
              answer:
                'Nee. We stemmen alles af op waar je nu staat, niet op waar je "zou moeten" zijn. Of je al jaren traint of nog nooit een voet in een sportschool hebt gezet — het startpunt is jouw situatie. Het enige dat we vragen is de bereidheid om stappen te zetten.',
            },
            {
              question: 'Moet ik perfect eten? Nooit meer uit eten of een wijntje drinken?',
              answer:
                'Nee, en dat is precies het punt. We bouwen een aanpak die werkt in een normaal leven — met verjaardagen, vakanties, etentjes en weken waarin alles tegenzit. Als het alleen werkt onder perfecte omstandigheden, werkt het niet. Perfectie is vaak juist het patroon dat we doorbreken: het idee dat je het of héél goed doet, of dat je het helemaal loslaat.',
            },
            {
              question: 'Wat als ik halverwege wil stoppen?',
              answer:
                'Dan is dat precies het moment waarop coaching het meest waardevol is. De meeste mensen stoppen niet omdat iets niet werkt — ze stoppen omdat het moeilijk wordt: een plateau, een drukke periode, het gevoel dat het niet snel genoeg gaat. Dat is het patroon. Jouw coach ziet dat aankomen, benoemt het en helpt je erdoorheen. Dat is het verschil met iets in je eentje doen — je hebt iemand die niet opgeeft als jij het even niet meer ziet zitten. We verwachten wel dat jij er ook voor gaat: commitment is wederzijds.',
            },
            {
              question: 'Hoe ziet het contact met mijn coach eruit?',
              answer:
                'Je hebt één vaste coach gedurende het hele traject. Elke week ontvang je persoonlijke feedback — via video, Loom of een call, afhankelijk van de fase. Op strategische momenten zijn er diepere gesprekken over patronen, voortgang en waar je tegenaan loopt. Daarnaast vul je wekelijks een reflectie in en heb je toegang tot de coaching-app voor voeding, training en dagelijkse gewoontes. Het is geen eenzijdig schema dat je afwerkt — het is een doorlopend gesprek.',
            },
            {
              question: 'Wat als Rebuild niet bij mij past?',
              answer:
                'Dan vertellen we je dat. Het kennismakingsgesprek is er niet om je te overtuigen, maar om eerlijk te kijken of er een match is. Rebuild is niet voor iedereen. Als je alleen een schema zoekt, als je niet bereid bent om naar jezelf te kijken, of als je situatie vraagt om iets anders dan wat wij bieden — dan zeggen we dat liever nu dan halverwege. Dat gesprek is er net zo goed voor jou als voor ons.',
            },
          ],
        },
      ],
    },
  ],
}
