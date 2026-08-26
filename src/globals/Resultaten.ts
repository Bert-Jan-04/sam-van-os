import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { imageField } from '@/fields/image'
import { privateField } from '@/fields/private'

const repeat = <T>(count: number, factory: () => T): T[] => Array.from({ length: count }, factory)

export const Resultaten: GlobalConfig = {
  slug: 'resultaten',
  label: 'Resultaten',
  access: {
    read: privateRead,
  },
  fields: [
    privateField(),
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'Resultaten' },
        { name: 'heading', type: 'text', defaultValue: "Het bewijs zit in meer dan kilo's." },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'De weegschaal laat één cijfer zien. Wat je hieronder ziet is wat er daarnaast veranderde: gedrag, zelfvertrouwen, energie en de rust om niet meer elke maandag opnieuw te beginnen.',
        },
        {
          name: 'slides',
          type: 'array',
          label: "Foto's (roterend)",
          labels: { singular: 'Foto', plural: "Foto's" },
          admin: {
            description: "Meerdere foto's wisselen automatisch af in de hero.",
          },
          fields: [imageField('image', 'Foto')],
          defaultValue: repeat(5, () => ({})),
        },
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
        { value: '26', suffix: '', label: 'weken per traject' },
        { value: '–', suffix: '%', label: 'houdt resultaat na afloop vast' },
        { value: '–', suffix: '', label: 'gemiddelde beoordeling' },
      ],
    },
    {
      name: 'beforeAfter',
      type: 'group',
      label: 'Voor en na',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Voor en na, 26 weken ertussen' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Alle foto\'s zijn met toestemming geplaatst. Geen filters, geen andere belichting, geen "dag 1 na een weekend".',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Vergelijking', plural: 'Vergelijkingen' },
          fields: [
            imageField('beforeImage', 'Foto voor'),
            imageField('afterImage', 'Foto na'),
            { name: 'name', type: 'text', required: true, admin: { description: 'Bijv. "Lois, 32 jaar"' } },
            { name: 'quote', type: 'textarea', required: true },
            {
              name: 'tags',
              type: 'array',
              labels: { singular: 'Tag', plural: 'Tags' },
              fields: [{ name: 'label', type: 'text', required: true }],
            },
          ],
          defaultValue: repeat(3, () => ({
            name: '[naam], [leeftijd] jaar',
            quote: '[korte quote van de klant over wat er het meest veranderde]',
            tags: [{ label: '[-x kg]' }, { label: '26 weken' }, { label: '[specialisme]' }],
          })),
        },
      ],
    },
    {
      name: 'beyondPhotos',
      type: 'group',
      label: 'Wat er niet op de foto staat',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Wat er niet op de foto staat' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Drie dingen die klanten na 26 weken het vaakst benoemen, en waar geen weegschaal voor bestaat.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Item', plural: 'Items' },
          fields: [
            { name: 'label', type: 'text', required: true, admin: { description: 'Bijv. "Gedrag"' } },
            { name: 'title', type: 'text', required: true },
            { name: 'before', type: 'textarea', label: 'Voor', required: true },
            { name: 'after', type: 'textarea', label: 'Na', required: true },
          ],
          defaultValue: [
            {
              label: 'Gedrag',
              title: 'Eén slechte dag is geen verpeste week meer',
              before: 'Alles of niets: streng zijn, daarna de controle kwijt.',
              after: 'Een afwijking is een keuze, geen terugval. Je pakt de dag erna gewoon op.',
            },
            {
              label: 'Zelfvertrouwen',
              title: 'Vertrouwen dat niet afhangt van de weegschaal',
              before: 'Het cijfer van maandagochtend bepaalde de hele week.',
              after: "Je weet wat je doet en waarom. Kleding, spiegel en foto's voelen anders.",
            },
            {
              label: 'Energie',
              title: 'Genoeg over aan het eind van de dag',
              before: 'Om acht uur op de bank, slecht slapen, moe wakker worden.',
              after: 'Sterker in het dagelijks leven, beter slapen, ruimte voor je gezin.',
            },
          ],
        },
      ],
    },
    {
      name: 'stories',
      type: 'group',
      label: 'Klantverhalen',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Klantverhalen' },
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
            { name: 'name', type: 'text', required: true, label: 'Naam klant' },
            { name: 'whereStarted', type: 'textarea', label: 'Waar ze begon', required: true },
            { name: 'whatChanged', type: 'textarea', label: 'Wat er veranderde', required: true },
            { name: 'whereNow', type: 'textarea', label: 'Waar ze nu staat', required: true },
            { name: 'resultText', type: 'text', label: 'Resultaat' },
            { name: 'duration', type: 'text', label: 'Duur', defaultValue: '26 weken' },
            { name: 'coachName', type: 'text', label: 'Coach' },
            imageField('mainImage', 'Hoofdfoto'),
            imageField('secondaryImage', 'Foto (training)'),
            imageField('tertiaryImage', 'Foto (dagelijks leven)'),
            {
              name: 'reversed',
              type: 'checkbox',
              label: "Foto's rechts (in plaats van links)",
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              eyebrowLabel: 'Verhaal 01',
              name: '[naam klant]',
              whereStarted:
                '[Wat er speelde bij de start: hoeveel diëten al geprobeerd, waar het steeds vastliep, hoe ze zich voelde.]',
              whatChanged:
                '[Het omslagpunt in het traject: welk patroon we hebben aangepakt en wat dat concreet betekende in haar week.]',
              whereNow: '[Hoe het er na 26 weken uitziet, en wat ze zelfstandig volhoudt.]',
              resultText: '[-x kg / x cm / krachtcijfers]',
              duration: '26 weken',
              coachName: '[naam coach]',
              reversed: false,
            },
            {
              eyebrowLabel: 'Verhaal 02',
              name: '[naam klant]',
              whereStarted: '[Wat er speelde bij de start.]',
              whatChanged: '[Het omslagpunt in het traject.]',
              whereNow: '[Hoe het er na 26 weken uitziet.]',
              resultText: '[-x kg / x cm / krachtcijfers]',
              duration: '26 weken',
              coachName: '[naam coach]',
              reversed: true,
            },
            {
              eyebrowLabel: 'Verhaal 03',
              name: '[naam klant]',
              whereStarted: '[Wat er speelde bij de start.]',
              whatChanged: '[Het omslagpunt in het traject.]',
              whereNow: '[Hoe het er na 26 weken uitziet.]',
              resultText: '[-x kg / x cm / krachtcijfers]',
              duration: '26 weken',
              coachName: '[naam coach]',
              reversed: false,
            },
            {
              eyebrowLabel: 'Verhaal 04',
              name: '[naam klant]',
              whereStarted: '[Wat er speelde bij de start.]',
              whatChanged: '[Het omslagpunt in het traject.]',
              whereNow: '[Hoe het er na 26 weken uitziet.]',
              resultText: '[-x kg / x cm / krachtcijfers]',
              duration: '26 weken',
              coachName: '[naam coach]',
              reversed: true,
            },
            {
              eyebrowLabel: 'Verhaal 05',
              name: '[naam klant]',
              whereStarted: '[Wat er speelde bij de start.]',
              whatChanged: '[Het omslagpunt in het traject.]',
              whereNow: '[Hoe het er na 26 weken uitziet.]',
              resultText: '[-x kg / x cm / krachtcijfers]',
              duration: '26 weken',
              coachName: '[naam coach]',
              reversed: false,
            },
          ],
        },
      ],
    },
    {
      name: 'videoStories',
      type: 'group',
      label: 'In hun eigen woorden',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'In hun eigen woorden' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue: "Korte video's, opgenomen aan het einde van hun traject.",
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Video', plural: "Video's" },
          fields: [
            imageField('video', 'Video'),
            { name: 'name', type: 'text', required: true, label: 'Naam klant' },
            { name: 'description', type: 'text', label: 'Omschrijving' },
          ],
          defaultValue: repeat(3, () => ({
            name: '[naam klant]',
            description: '[waar de video over gaat, één regel]',
          })),
        },
      ],
    },
    {
      name: 'quotes',
      type: 'array',
      label: 'Quotes',
      labels: { singular: 'Quote', plural: 'Quotes' },
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'attribution', type: 'text', required: true, admin: { description: 'Bijv. "Lois, 32 — 26 weken Rebuild"' } },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'outline',
          options: [
            { label: 'Rand', value: 'outline' },
            { label: 'Blauw (uitgelicht)', value: 'highlight' },
            { label: 'Grijs vlak', value: 'muted' },
          ],
        },
      ],
      defaultValue: [
        {
          quote: '[quote over het moment dat het kwartje viel — twee tot drie regels]',
          attribution: '[naam], [leeftijd] — [x] weken Rebuild',
          variant: 'outline',
        },
        {
          quote: '[quote over zelfvertrouwen of energie — twee tot drie regels]',
          attribution: '[naam], [leeftijd] — [x] weken Rebuild',
          variant: 'highlight',
        },
        {
          quote: '[quote over de begeleiding en accountability]',
          attribution: '[naam], [leeftijd] — [x] weken Rebuild',
          variant: 'muted',
        },
        {
          quote: '[quote over hoe het nu gaat, na het traject]',
          attribution: '[naam], [leeftijd] — [x] weken Rebuild',
          variant: 'outline',
        },
      ],
    },
    {
      name: 'metrics',
      type: 'group',
      label: 'Wat we meten',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Wat we meten' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Gewicht is één van de zes dingen die we bijhouden. De rest vertelt of de verandering blijft staan.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Meetpunt', plural: 'Meetpunten' },
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'text', type: 'textarea', required: true },
          ],
          defaultValue: [
            {
              label: 'Gewicht & omtrek',
              text: 'Wekelijks, als trend over meerdere weken — niet als dagcijfer.',
            },
            {
              label: 'Kracht in de training',
              text: 'Zwaarder tillen bij hetzelfde of lager gewicht is spier, niet toeval.',
            },
            {
              label: 'Consistentie',
              text: 'Hoeveel weken op rij de basis staat, ook in drukke weken.',
            },
            {
              label: 'Herstel na terugval',
              text: 'Hoe snel je weer op ritme bent. Dit voorspelt of het resultaat blijft.',
            },
            {
              label: 'Energie & slaap',
              text: 'Wekelijks gescoord, omdat dit bepaalt of de rest haalbaar blijft.',
            },
            {
              label: 'Vertrouwen in jezelf',
              text: 'Elke fase opnieuw uitgevraagd: hoeveel regie voel je zelf?',
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
        { name: 'heading', type: 'text', defaultValue: 'Wil je weten wat er voor jou mogelijk is?' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'In een kennismaking kijken we naar je situatie en vertellen we eerlijk wat je in 26 weken kunt verwachten.',
        },
      ],
    },
  ],
}
