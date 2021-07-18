import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shop, Cart } from '../../components'
import { Footer, Navigation, Meta } from '../../components/shared'
import { merchQuery, sanityClient } from '../../lib/sanity'

export default function ShopPage({ products }) {
  return (
    <>
      <Meta title='MJ Graphics Design Studio Shop' />
      <Cart>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navigation shop />
          <Shop products={products} />
          <Footer />
        </motion.div>
      </Cart>
    </>
  )
}

export async function getStaticProps({ params }) {
  const products = await sanityClient.fetch(merchQuery)

  return {
    props: {
      products
    }
  }
}
