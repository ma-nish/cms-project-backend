import { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonial Block', plural: 'Testimonial Blocks' },
  fields: [
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'quotes',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'quote', type: 'textarea', required: true, localized: true },
        { name: 'author', type: 'text', required: true },
        { name: 'company', type: 'text' },
      ],
    },
  ],
}