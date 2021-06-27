export default {
  name: 'aboutme',
  title: 'About Me',
  type: 'document',
  description: 'Write a little about yourself',
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
      type: 'blockContent'
    }
  ]
}
