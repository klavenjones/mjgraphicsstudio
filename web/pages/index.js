import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation } from '../components/shared'

import Cache from '../util/cache'

import { indexQuery, sanityClient } from '../lib/sanity'

export default function Home({ artwork }) {
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
  if (!Cache.has('artwork') || Cache.isExpired('artwork', 300)) {
    console.log('CACHE')
    artwork = await sanityClient.fetch(indexQuery)
    Cache.set('artwork', artwork)
  } else {
    console.log('New Request')
    artwork = Cache.get('artwork')
  }

  return {
    props: { artwork }
  }
}
