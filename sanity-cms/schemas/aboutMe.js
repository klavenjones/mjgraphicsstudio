export default {
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'selfie',
      title: 'Selfie Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Write a little about yourself'
    }
  ]
}
