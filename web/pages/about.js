import Head from 'next/head'
import { motion } from 'framer-motion'
import { About } from '../components'
import { Footer, Navigation } from '../components/shared'

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navigation />
      <About />
      <Footer />
    </motion.div>
  )
}
