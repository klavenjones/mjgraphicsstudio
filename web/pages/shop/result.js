// web/pages/result.js
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Footer, Navigation, Meta, Result, Cart } from '../../components'
import { useRouter } from 'next/router'
import Link from 'next/link'

import useSWR from 'swr'
import { fetchGet } from '../../util/services'

const PrintObject = ({ content }) => {
  const formattedContent = JSON.stringify(content, null, 2)
  return <pre>{formattedContent}</pre>
}

const ResultPage = () => {
  const router = useRouter()


  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGet
  )

  if (error) {
    return <div>failed to load</div>
  }


  return (
    <>
      <Meta title='MJ Graphics Design Studio' />
      <Cart>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navigation />
          <Result result={data} />
          <Footer />
        </motion.div>
      </Cart>
    </>
  )
}

export default ResultPage
