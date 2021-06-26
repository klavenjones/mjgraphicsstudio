import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation } from '../components/shared'

export default function Home() {
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
