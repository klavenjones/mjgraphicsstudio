import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation } from '../components/shared'

import { indexQuery, sanityClient } from '../lib/sanity'

export default function Home({ artwork }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      <Gallery />
      <Footer />
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const artwork = await sanityClient.fetch(indexQuery)
  return {
    props: { artwork }
  }
}
