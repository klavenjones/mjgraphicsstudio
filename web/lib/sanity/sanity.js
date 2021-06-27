import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'zyw30j8r',
  dataset: 'production',
  useCdn: true
})
