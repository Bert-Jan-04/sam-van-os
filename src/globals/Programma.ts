import type { GlobalConfig } from 'payload'

import { imageField } from '@/fields/image'

export const Programma: GlobalConfig = {
  slug: 'programma',
  label: 'Programma',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'The Rebuild Program' },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Je hoeft niet opnieuw te beginnen. Je moet jezelf opnieuw opbouwen.',
        },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'The Rebuild Program is een 26-weeks coachingtraject voor vrouwen die willen afvallen, maar vooral willen begrijpen waarom het steeds niet lukt om hun resultaat vast te houden.',
        },
        imageField('image', 'Foto'),
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
        { value: '26', suffix: '', label: 'weken begeleiding' },
        { value: '1', suffix: '', label: 'vaste coach' },
        { value: '26', suffix: 'x', label: 'wekelijkse feedback' },
        { value: '100', suffix: '+', label: 'leden in de community' },
      ],
    },
    {
      name: 'whatIsIt',
      type: 'group',
      label: 'Wat is The Rebuild Program?',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Wat is The Rebuild Program?' },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue: 'Rebuild draait niet om een tijdelijk voedings- of trainingsschema.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'Je lichaam verandert wanneer je gedrag verandert. Daarom kijken we niet alleen naar wat je eet of hoeveel je beweegt, maar vooral naar de patronen, overtuigingen en situaties die ervoor zorgen dat je steeds terugvalt.',
        },
        { name: 'coreLabel', type: 'text', label: 'Label kaart', defaultValue: 'De kern' },
        {
          name: 'coreTags',
          type: 'array',
          label: "Tags",
          labels: { singular: 'Tag', plural: 'Tags' },
          fields: [
            { name: 'label', type: 'text', required: true },
            {
              name: 'highlight',
              type: 'checkbox',
              label: 'Uitgelicht (blauw)',
              defaultValue: false,
            },
          ],
          defaultValue: [
            { label: 'Voeding', highlight: false },
            { label: 'Beweging', highlight: false },
            { label: 'Gedrag', highlight: false },
            { label: 'Mindset', highlight: false },
            { label: 'Persoonlijke coaching', highlight: true },
          ],
        },
      ],
    },
    {
      name: 'whyNotWorking',
      type: 'group',
      label: 'Waarom lukt het tot nu toe niet?',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Waarom lukt het tot nu toe niet?' },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Reden', plural: 'Redenen' },
          fields: [{ name: 'text', type: 'textarea', required: true }],
          defaultValue: [
            { text: 'Je begint iedere maandag opnieuw.' },
            { text: 'Eén slechte maaltijd voelt als een verpeste dag.' },
            { text: 'Je weet wat je moet doen, maar houdt het niet vol.' },
            { text: 'Stress, weekenden en sociale situaties gooien je ritme om.' },
            { text: 'Je bent streng voor jezelf en raakt daarna juist de controle kwijt.' },
            { text: "Je hebt al meerdere diëten en schema's geprobeerd." },
          ],
        },
        {
          name: 'closingStatement',
          type: 'textarea',
          defaultValue:
            'Het probleem is waarschijnlijk niet dat je te weinig weet. Het probleem is dat je nog geen leefstijl hebt gebouwd die je kunt volhouden.',
        },
      ],
    },
    {
      name: 'method',
      type: 'group',
      label: 'De Rebuild-methode',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'De Rebuild-methode' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Vier lagen die samen bepalen of verandering blijft staan. Een schema raakt alleen de eerste.',
        },
        imageField('image', 'Foto'),
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Laag', plural: 'Lagen' },
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
              title: 'Voeding',
              text: 'Leren eten op een manier die past bij jouw leven.',
              highlight: false,
            },
            {
              title: 'Beweging',
              text: 'Werken aan kracht, conditie en dagelijkse beweging.',
              highlight: false,
            },
            {
              title: 'Gedrag & mindset',
              text: 'Begrijpen waarom je doet wat je doet en nieuwe patronen ontwikkelen.',
              highlight: false,
            },
            {
              title: 'Coaching & accountability',
              text: 'Persoonlijke begeleiding, feedback en iemand die naast je staat wanneer het moeilijk wordt.',
              highlight: true,
            },
          ],
        },
        {
          name: 'closingStatement',
          type: 'textarea',
          defaultValue:
            'We veranderen niet alleen wat je doet. We werken aan de persoon die dat gedrag uiteindelijk zelfstandig kan volhouden.',
        },
      ],
    },
    {
      name: 'forYou',
      type: 'group',
      label: 'Voor wie is dit',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Rebuild is voor jou als je klaar bent met steeds opnieuw beginnen.',
        },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Je wilt afvallen en je beter voelen in je lichaam. Maar nog belangrijker: je wilt eindelijk vertrouwen krijgen in jezelf en leren hoe je consistent kunt blijven, ook wanneer het leven niet perfect loopt.',
        },
        { name: 'doHeading', type: 'text', defaultValue: 'Wel Rebuild' },
        {
          name: 'doItems',
          type: 'array',
          labels: { singular: 'Punt', plural: 'Punten' },
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: 'Bereid om eerlijk naar jezelf te kijken' },
            { text: 'Wil duurzame verandering' },
            { text: 'Wil begeleiding en accountability' },
            { text: 'Wil leren hoe je zelf verder kunt' },
          ],
        },
        { name: 'dontHeading', type: 'text', defaultValue: 'Niet Rebuild' },
        {
          name: 'dontItems',
          type: 'array',
          labels: { singular: 'Punt', plural: 'Punten' },
          fields: [{ name: 'text', type: 'text', required: true }],
          defaultValue: [
            { text: 'Alleen een snel schema' },
            { text: 'Alleen een paar kilo verliezen zonder gedragsverandering' },
            { text: 'Geen behoefte aan coaching' },
          ],
        },
      ],
    },
    {
      name: 'whatYouGet',
      type: 'group',
      label: 'Wat krijg je?',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Wat krijg je?' },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Item', plural: 'Items' },
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
          ],
          defaultValue: [
            {
              title: 'Persoonlijke coach',
              text: 'Een coach die jouw situatie en patronen leert kennen.',
            },
            {
              title: 'Wekelijkse feedback',
              text: 'Persoonlijke check-ins en feedback op je voortgang.',
            },
            {
              title: 'Strategische calls',
              text: 'Op belangrijke momenten gaan we dieper in op wat er speelt.',
            },
            {
              title: 'Coaching-app',
              text: 'Voor doelen, voeding, training, gewoontes en voortgang.',
            },
            {
              title: 'Rebuild Community',
              text: 'Een community van vrouwen die aan vergelijkbare doelen werken.',
            },
          ],
        },
        imageField('image', 'Foto (zesde tegel)'),
      ],
    },
    {
      name: 'timeline',
      type: 'group',
      label: 'Hoe ziet 26 weken eruit?',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Hoe ziet 26 weken eruit?' },
        {
          name: 'phases',
          type: 'array',
          labels: { singular: 'Fase', plural: "Fases" },
          fields: [
            { name: 'label', type: 'text', required: true, admin: { description: 'Bijv. "01 — Start"' } },
            { name: 'text', type: 'textarea', required: true },
          ],
          defaultValue: [
            { label: '01 — Start', text: 'Kennismaking, intake & persoonlijke doelen.' },
            { label: '02 — Fundament', text: 'Je eerste routines en gedragsfocus.' },
            {
              label: '03 — Implementatie',
              text: 'Leren omgaan met weerstand, drukte en terugval.',
            },
            {
              label: '04 — Verdieping',
              text: 'Patronen, identiteit, sociale situaties en nieuwe strategieën.',
            },
            {
              label: '05 — Zelfstandigheid',
              text: 'Steeds meer vertrouwen om zelf keuzes te maken.',
            },
            {
              label: '06 — Rebuild',
              text: 'Evalueren, vooruitkijken en bouwen aan je leven na coaching.',
            },
          ],
        },
        {
          name: 'closingStatement',
          type: 'textarea',
          defaultValue:
            'Het doel is niet dat je 26 weken een plan volhoudt. Het doel is dat je na 26 weken weet hoe je zelfstandig verder kunt.',
        },
      ],
    },
    {
      name: 'community',
      type: 'group',
      label: 'Community',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Je hoeft dit niet alleen te doen.' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'In de Rebuild Community ontmoet je vrouwen die tegen dezelfde dingen aanlopen. Je deelt je wins, twijfels en moeilijke momenten, leert van elkaar en krijgt extra support buiten je persoonlijke coaching.',
        },
        {
          name: 'photos',
          type: 'array',
          labels: { singular: 'Foto', plural: "Foto's" },
          fields: [imageField('image', 'Foto')],
          defaultValue: [{}, {}, {}, {}, {}],
        },
        {
          name: 'tags',
          type: 'array',
          labels: { singular: 'Tag', plural: 'Tags' },
          fields: [{ name: 'label', type: 'text', required: true }],
          defaultValue: [
            { label: 'Groepscalls' },
            { label: 'Educatie' },
            { label: 'Wins & verhalen' },
            { label: 'Events' },
            { label: 'Recepten & inspiratie' },
          ],
        },
      ],
    },
    {
      name: 'results',
      type: 'group',
      label: 'Resultaten',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Grote quote',
          defaultValue: 'Je verandert niet alleen hoe je eruitziet. Je verandert hoe je leeft.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Resultaat', plural: 'Resultaten' },
          fields: [
            imageField('image', 'Foto'),
            {
              name: 'resultText',
              type: 'text',
              required: true,
              label: 'Resultaat',
              admin: { description: 'Bijv. "-11 kg + meer vertrouwen + eindelijk consistent"' },
            },
            { name: 'quoteText', type: 'text', required: true, label: 'Onderschrift' },
          ],
          defaultValue: [
            {
              resultText: '-11 kg + meer vertrouwen + eindelijk consistent',
              quoteText: 'Naam klant — 26 weken Rebuild',
            },
            {
              resultText: 'Resultaat + persoonlijke verandering',
              quoteText: 'Quote van de klant komt hier.',
            },
            {
              resultText: 'Resultaat + rust rondom eten',
              quoteText: 'Quote van de klant komt hier.',
            },
          ],
        },
      ],
    },
    {
      name: 'faq',
      type: 'group',
      label: 'Praktische vragen',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Praktische vragen' },
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
              question: 'Hoe lang duurt het traject?',
              answer:
                '26 weken. Dat is bewust: korter is te kort om patronen echt te veranderen. Na afloop kies je zelf of je zelfstandig verdergaat of verlengt.',
            },
            {
              question: 'Wat kost het?',
              answer:
                'De exacte investering bespreken we in het kennismakingsgesprek, omdat die afhangt van je situatie en het type traject. Je investeert in 26 weken persoonlijke begeleiding: bewust duurder dan een schema of een groepsprogramma, omdat de begeleiding persoonlijker en intensiever is.',
            },
            {
              question: 'Moet ik al kunnen sporten?',
              answer:
                'Nee. We stemmen alles af op waar je nu staat, niet op waar je "zou moeten" zijn. Het enige dat we vragen is de bereidheid om stappen te zetten.',
            },
            {
              question: 'Kan ik online meedoen, of moet ik in de buurt wonen?',
              answer:
                'Het traject is volledig online: feedback, calls en de app werken vanaf elke plek. De community-events zijn fysiek, maar niet verplicht.',
            },
            {
              question: 'Wanneer kan ik starten?',
              answer:
                'We werken met een beperkt aantal plekken per coach, zodat de begeleiding persoonlijk blijft. In het kennismakingsgesprek hoor je wanneer de eerstvolgende plek vrijkomt.',
            },
          ],
        },
      ],
    },
    {
      name: 'closing',
      type: 'group',
      label: 'Afsluitende CTA',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Klaar om te stoppen met opnieuw beginnen?',
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'Tijdens een kennismaking kijken we waar je nu staat, waar je tegenaan loopt en of The Rebuild Program bij jou past.',
        },
      ],
    },
  ],
}
