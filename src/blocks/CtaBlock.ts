import { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  fields: [
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'subtext', type: 'text', localized: true },
    { name: 'buttonLabel', type: 'text', required: true, localized: true },
    { name: 'buttonUrl', type: 'text', required: true },
  ],
}