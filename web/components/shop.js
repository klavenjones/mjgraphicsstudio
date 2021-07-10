import { motion } from 'framer-motion'
import React from 'react'

import { Products } from './'
import CartSummary from './cart-summary'

export default function Shop({ products }) {
  return (
    <main className='product-section'>
      <Products products={products} />
    </main>
  )
}
