// web/pages/result.js

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
    <div className='page-container'>
      Congrats
      <h1>Checkout Payment Result</h1>
      <p>
        With the data below, you can display a custom confirmation message to
        your customer.
      </p>
      <p>For example:</p>
      <hr />
      <h3>
        Thank you, {data?.payment_intent.charges.data[0].billing_details.name}.
      </h3>
      <p>
        Confirmation email sent to{' '}
        {data?.payment_intent.charges.data[0].billing_details.email}.
      </p>
      <hr />
      <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
      <h3>CheckoutSession response:</h3>
      <PrintObject content={data ?? 'loading...'} />
      <Link href='/'>
        <a>Back home</a>
      </Link>
    </div>
  )
}

export default ResultPage
