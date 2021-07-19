import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'
import { Loader } from './shared'

export default function Result({ result }) {
  if (!result) return <Loader />

  const { receipt_url } = result?.payment_intent.charges.data[0]

  return (
    <main className='result-content'>
      <div className='result__message'>
        <div className='result__icon'>
          <FiCheck className='h-8 w-8' />
        </div>
        <h2>Thank you.</h2>
        <h3>Order # {result?.metadata.order_number}</h3>
        <p>
          You can find a receipt for your order{' '}
          <a
            href={result?.payment_intent.charges.data[0].receipt_url}
            className='bold'
          >
            here.
          </a>{' '}
        </p>
        <p>
          An order receipt has also been sent to:{' '}
          <span>{result?.customer_details.email}</span>
        </p>
      </div>
      <div className='result__details'></div>
    </main>
  )
}
