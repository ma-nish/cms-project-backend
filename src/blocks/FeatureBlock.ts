import { Block } from 'payload'

export const FeatureBlock: Block = {
  slug: 'features',
  labels: { singular: 'Feature Block', plural: 'Feature Blocks' },
  fields: [
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'featureList',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'description', type: 'textarea', required: true, localized: true },
        { name: 'icon', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}