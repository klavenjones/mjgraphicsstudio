import { motion } from 'framer-motion'
import { merchQuery, productQuery, sanityClient } from '../../lib/sanity'
import { Cart, CartSummary, ProductDetail } from '../../components'
import { Footer, Navigation, Meta } from '../../components/shared'

export default function ProductDetailPage({ product }) {
  return (
    <>
      <Meta title='MJ Graphics Design Studio Shop' />
      <Cart>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navigation shop />
          <ProductDetail product={product} />
          <Footer />
        </motion.div>
      </Cart>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const products = await sanityClient.fetch(merchQuery)

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   // Call an external API endpoint to get posts
//   const products = await sanityClient.fetch(merchQuery)

//   // Pass post data to the page via props
//   return { props: { post } }
// }

export async function getStaticProps({ params }) {
  const product = await sanityClient.fetch(productQuery(params.id))

  return {
    props: {
      product
    }
  }
}
