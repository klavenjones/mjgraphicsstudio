import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shop } from '../components'
import { Footer, Navigation, Meta } from '../components/shared'

export default function ShopPage() {
  return (
    <>
      <Meta title='MJ Graphics Design Studio Shop' />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navigation />
        <Shop />
        <Footer />
      </motion.div>
    </>
  )
}
