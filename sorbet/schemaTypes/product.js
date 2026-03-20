import {defineType, defineField} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
    name: 'title',
    title: 'Title / Name',
    type: 'string',
    validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options:{
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true},
          fields: [
            ({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField ({
              name: 'category',
             type: 'string',
              title: 'Category',
            })
          ],
        },
      ],
    }),
    
  ],
})