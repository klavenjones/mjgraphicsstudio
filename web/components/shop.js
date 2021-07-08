import { motion } from 'framer-motion'
import React from 'react'

import { Products } from './'
import CartSummary from './cart-summary'

export default function Shop({ products }) {
  return (
    <main className='border w-full px-6 py-10'>
      <Products products={products} />
      <CartSummary />
    </main>
  )
}
