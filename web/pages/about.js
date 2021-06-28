import Head from 'next/head'
import { motion } from 'framer-motion'
import { About } from '../components'
import { Footer, Navigation } from '../components/shared'
import Cache from '../util/cache'
import { aboutMeQuery, sanityClient } from '../lib/sanity'

export default function AboutPage({ about }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navigation />
      <About aboutMe={about} />
      <Footer />
    </motion.div>
  )
}

export const getStaticProps = async () => {
  let about
  if (!Cache.has('about') || Cache.isExpired('about', 600)) {
    console.log('CACHE ABOUT')
    about = await sanityClient.fetch(aboutMeQuery)
    Cache.set('about', about)
  } else {
    console.log('New Request')
    about = Cache.get('about')
  }

  return {
    props: { about }
  }
}
