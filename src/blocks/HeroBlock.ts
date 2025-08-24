import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'subtext', type: 'text', localized: true },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media'},
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}