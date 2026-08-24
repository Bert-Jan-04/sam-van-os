import type { Field, GlobalConfig } from 'payload'

const colorField = (name: string, label: string, defaultValue: string): Field => ({
  name,
  type: 'text',
  label,
  required: true,
  defaultValue,
  validate: (value: unknown) => {
    if (typeof value !== 'string' || !/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value)) {
      return 'Vul een geldige hexcode in, bijv. #c8a464'
    }
    return true
  },
  admin: {
    description: 'Hexcode, bijv. #c8a464',
    width: '33%',
  },
})

export const Styling: GlobalConfig = {
  slug: 'styling',
  label: 'Styling',
  admin: {
    group: 'Styling',
    description: 'Kleuren en lettertypes voor de hele site. Wijzigingen zijn direct site-breed zichtbaar.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'colors',
      label: 'Kleuren',
      fields: [
        {
          type: 'collapsible',
          label: 'Achtergronden & kaarten',
          admin: { initCollapsed: false },
          fields: [
            colorField('pageBackground', 'Pagina-achtergrond', '#182642'),
            colorField('cardBackground', 'Kaart-achtergrond', '#1a2740'),
            colorField('lightCard', 'Lichte kaart (testimonials)', '#f4efe7'),
            colorField('cardGradientFrom', 'Kaart-gradient start (accentpanelen)', '#1c2c4a'),
            colorField('cardGradientTo', 'Kaart-gradient eind (accentpanelen)', '#10182c'),
          ],
        },
        {
          type: 'collapsible',
          label: 'Randen & lijnen',
          admin: { initCollapsed: false },
          fields: [
            colorField('standardBorder', 'Standaard rand', '#2d3c56'),
            colorField('thinDivider', 'Dunne scheidingslijnen', '#223350'),
            colorField('bronzeBorder', 'Brons-rand (accentpanelen)', '#4a3d24'),
          ],
        },
        {
          type: 'collapsible',
          label: 'Tekst',
          admin: { initCollapsed: false },
          fields: [
            colorField('primaryText', 'Primaire tekst', '#ffffff'),
            colorField('mutedBodyText', 'Gedempte body-tekst', '#b0a996'),
            colorField('smallText', 'Kleine tekst/captions', '#9a9280'),
            colorField('vagueLabels', 'Vage labels (namen, copyright)', '#6b6b6b'),
            colorField('darkTextOnIvory', 'Donkere tekst op ivoor-kaarten', '#172332'),
            colorField('navyTextOnGold', 'Navy tekst op goud', '#172335'),
          ],
        },
        {
          type: 'collapsible',
          label: 'Goud & accenten',
          admin: { initCollapsed: false },
          fields: [
            colorField('primaryGold', 'Primair goud', '#c8a464'),
            colorField('goldHover', 'Goud hover (donkerder)', '#a9834a'),
            colorField('lightGold', 'Licht goud (labels/links op navy)', '#e3c78f'),
            colorField('lightGoldHover', 'Licht goud hover', '#f0dbb0'),
            colorField('starRating', 'Sterren-rating', '#fbbf24'),
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'typography',
      label: 'Typografie',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'headingFontFamily',
              type: 'text',
              label: 'Lettertype koppen',
              required: true,
              defaultValue: 'Montserrat',
              admin: {
                description: 'Naam van een Google Font, bijv. Montserrat',
                width: '50%',
              },
            },
            {
              name: 'headingWeights',
              type: 'text',
              label: 'Beschikbare gewichten koppen',
              required: true,
              defaultValue: '700;800',
              admin: {
                description: "Puntkomma-gescheiden, bijv. 700;800",
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'headingWeight',
              type: 'select',
              label: 'Gebruikt gewicht koppen',
              required: true,
              defaultValue: '800',
              options: [
                { label: '700 (bold)', value: '700' },
                { label: '800 (extrabold)', value: '800' },
              ],
              admin: { width: '50%' },
            },
            {
              name: 'headingLetterSpacing',
              type: 'text',
              label: 'Letterspatiëring koppen',
              required: true,
              defaultValue: '0.015em',
              admin: { width: '50%' },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'wordmarkLetterSpacing',
              type: 'text',
              label: 'Letterspatiëring wordmark (REBUILD)',
              required: true,
              defaultValue: '0.14em',
              admin: { width: '50%' },
            },
            {
              name: 'bodyFontFamily',
              type: 'text',
              label: 'Lettertype body-tekst',
              required: true,
              defaultValue: 'Inter',
              admin: {
                description: 'Naam van een Google Font, bijv. Inter',
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'bodyWeights',
          type: 'text',
          label: 'Beschikbare gewichten body-tekst',
          required: true,
          defaultValue: '400;500;600;700',
          admin: {
            description: 'Puntkomma-gescheiden, bijv. 400;500;600;700',
          },
        },
      ],
    },
  ],
}
