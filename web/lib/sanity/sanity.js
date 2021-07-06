import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: 'v2021-06-07',
  useCdn: true
})
