import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'scripts',
  title: 'Scripts',
  type: 'document',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'title',
      title: 'Mod Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Mod Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      
    }),
    defineField({
      name: 'link',
      title: 'Mod Link (From Discord or Mediafire ...)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }
    ),
    defineField({
      name: 'type',
      title: 'Mod Type',
      type: 'string',
      options: {
      list: [
        { title: 'Script', value: 'script' },
        { title: 'Vehicle', value: 'vehicle' },
        { title: 'Skin', value: 'skin' },
        { title: 'Weapon', value: 'weapon' },
        { title: 'Map', value: 'tool' },
      ],
      validation: (Rule) => Rule.required(),
  },
  validation: (Rule) => Rule.required(),
    }),
  ],
  
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
