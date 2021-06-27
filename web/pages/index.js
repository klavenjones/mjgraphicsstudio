import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation } from '../components/shared'

import Cache from '../util/cache'

import { indexQuery, sanityClient } from '../lib/sanity'

export default function Home({ artwork }) {
  console.log(artwork)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      <Gallery artwork={artwork} />
      <Footer />
    </motion.div>
  )
}

export const getStaticProps = async () => {
  let artwork
  if (!Cache.has('artwork') || Cache.isExpired('artwork', 90)) {
    artwork = await sanityClient.fetch(indexQuery)
    Cache.set('artwork', artwork)
  } else {
    artwork = Cache.get('artwork')
  }

  return {
    props: { artwork }
  }
}
