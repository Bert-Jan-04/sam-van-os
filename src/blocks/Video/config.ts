import type { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Video’s',
  },
  interfaceName: 'VideoBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      label: 'Video',
      required: true,
      admin: {
        description: 'Upload een videobestand.',
      },
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'aspectRatio',
      type: 'select',
      required: true,
      defaultValue: '16/9',
      label: 'Beeldverhouding',
      options: [
        { label: 'Breedbeeld (16:9)', value: '16/9' },
        { label: 'Verticaal (9:16)', value: '9/16' },
        { label: 'Vierkant (1:1)', value: '1/1' },
      ],
    },
  ],
}
