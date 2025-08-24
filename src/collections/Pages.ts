import { CtaBlock } from '@/blocks/CtaBlock'
import { FeatureBlock } from '@/blocks/FeatureBlock'
import { HeroBlock } from '@/blocks/HeroBlock'
import { TestimonialBlock } from '@/blocks/TestimonialBlock'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [HeroBlock, FeatureBlock, TestimonialBlock, CtaBlock],
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          localized: true,
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          localized: true,
        },
      ],
    },
  ],
}