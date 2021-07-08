import Head from 'next/head'
import { motion } from 'framer-motion'
import { Shop, Cart } from '../../components'
import { Footer, Navigation, Meta } from '../../components/shared'
import { merchQuery, sanityClient } from '../../lib/sanity'

export default function ShopPage({ products }) {
  console.log(products)
  return (
    <>
      <Meta title='MJ Graphics Design Studio Shop' />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navigation shop />
        <Cart>
          <Shop products={products} />
        </Cart>
        <Footer />
      </motion.div>
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
