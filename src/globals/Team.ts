import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { imageField } from '@/fields/image'
import { privateField } from '@/fields/private'

export const Team: GlobalConfig = {
  slug: 'team',
  label: 'Team',
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
        { name: 'eyebrow', type: 'text', defaultValue: 'Het team' },
        { name: 'heading', type: 'text', defaultValue: 'De coaches achter Rebuild.' },
        {
          name: 'intro',
          type: 'textarea',
          defaultValue:
            'Je krijgt geen wisselend aanspreekpunt en geen app die je data bekijkt. Je krijgt één vaste coach die zes maanden naast je loopt, gesteund door een team dat dezelfde aanpak deelt.',
        },
        imageField('image', 'Groepsfoto'),
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
        { value: '4', suffix: '', label: 'coaches in het team' },
        { value: '1:1', suffix: '', label: 'één vaste coach per traject' },
        { value: '120', suffix: '+', label: 'vrouwen samen begeleid' },
      ],
    },
    {
      name: 'founder',
      type: 'group',
      label: 'Oprichter',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'Oprichter' },
        { name: 'name', type: 'text', defaultValue: 'Sam van Os' },
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
            'Door mijn ervaring met coaching weet ik dat ieder lichaam en iedere situatie anders is. Daarom kijk ik niet alleen naar training en voeding, maar vooral naar jou als persoon.',
        },
        { name: 'specialisme', type: 'text', defaultValue: 'Gedrag, patronen en leefstijl' },
        { name: 'ervaring', type: 'text' },
        { name: 'instagramHandle', type: 'text', defaultValue: '@samvanos' },
        imageField('mainImage', 'Hoofdfoto'),
        imageField('secondaryImage', 'Foto (aan het werk)'),
        imageField('video', 'Video'),
      ],
    },
    {
      name: 'coaches',
      type: 'group',
      label: 'Coaches',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'De coaches' },
        {
          name: 'subtext',
          type: 'text',
          defaultValue: 'Ieder met een eigen achtergrond, allemaal met dezelfde manier van werken.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Coach', plural: 'Coaches' },
          fields: [
            { name: 'eyebrow', type: 'text', defaultValue: 'Coach' },
            { name: 'name', type: 'text', required: true },
            {
              name: 'paragraph1',
              type: 'textarea',
              required: true,
              admin: {
                description:
                  'Korte introductie: waar deze coach vandaan komt, wat haar eigen weg was en waarom ze coacht.',
              },
            },
            {
              name: 'paragraph2',
              type: 'textarea',
              admin: {
                description:
                  'Hoe ze werkt, waar klanten haar het meest voor waarderen en bij welk type vraag ze het beste past.',
              },
            },
            { name: 'specialisme', type: 'text' },
            { name: 'ervaring', type: 'text' },
            { name: 'instagramHandle', type: 'text' },
            imageField('mainImage', 'Hoofdfoto'),
            imageField('secondaryImage', 'Foto (aan het werk)'),
            imageField('video', 'Video'),
            {
              name: 'reversed',
              type: 'checkbox',
              label: "Foto's rechts (in plaats van links)",
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              name: 'Naam coach',
              paragraph1:
                'Korte introductie: waar deze coach vandaan komt, wat haar eigen weg was en waarom ze coacht.',
              paragraph2:
                'Tweede alinea: hoe ze werkt, waar klanten haar het meest voor waarderen en bij welk type vraag ze het beste past.',
              specialisme: 'Voeding en krachttraining',
              reversed: true,
            },
            {
              name: 'Naam coach',
              paragraph1:
                'Korte introductie: waar deze coach vandaan komt, wat haar eigen weg was en waarom ze coacht.',
              paragraph2:
                'Tweede alinea: hoe ze werkt, waar klanten haar het meest voor waarderen en bij welk type vraag ze het beste past.',
              specialisme: 'Mindset en emotie-eten',
              reversed: false,
            },
            {
              name: 'Naam coach',
              paragraph1:
                'Korte introductie: waar deze coach vandaan komt, wat haar eigen weg was en waarom ze coacht.',
              paragraph2:
                'Tweede alinea: hoe ze werkt, waar klanten haar het meest voor waarderen en bij welk type vraag ze het beste past.',
              specialisme: 'Training en structuur',
              reversed: true,
            },
          ],
        },
      ],
    },
    {
      name: 'values',
      type: 'group',
      label: 'Waarden',
      fields: [
        { name: 'heading', type: 'text', defaultValue: "Waar we het met z'n allen over eens zijn." },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Verschillende coaches, één manier van werken. Dit is wat je bij ieder van ons terugziet.',
        },
        {
          name: 'items',
          type: 'array',
          labels: { singular: 'Waarde', plural: 'Waarden' },
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
              title: 'Eerlijk boven aardig',
              text: 'We benoemen wat we zien, ook als dat ongemakkelijk is. Daar zit de verandering.',
              highlight: false,
            },
            {
              title: 'Het patroon eerst',
              text: 'Voeding en training zijn het gereedschap. Het gedrag eronder is het werk.',
              highlight: false,
            },
            {
              title: 'Passend bij jouw leven',
              text: 'Als het alleen werkt onder perfecte omstandigheden, werkt het niet.',
              highlight: false,
            },
            {
              title: 'We blijven staan',
              text: 'Juist op het moment dat jij wilt stoppen, is je coach er. Dat is het hele punt.',
              highlight: true,
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
        { name: 'heading', type: 'text', defaultValue: 'Benieuwd welke coach bij jou past?' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'In het kennismakingsgesprek kijken we naar je situatie en koppelen we je aan de coach die daar het beste bij aansluit.',
        },
      ],
    },
  ],
}
