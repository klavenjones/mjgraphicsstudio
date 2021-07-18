import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'
import { FiShoppingCart } from 'react-icons/fi'

function CartIcon() {
  const { cartCount, cartDetails} = useShoppingCart()

   


  return (
    <div className='shopping-cart'>
      <Link href='/shop/summary'>
        <a>
          <FiShoppingCart className='icon' />
          <span className='cart-items'>{cartCount}</span>
        </a>
      </Link>
    </div>
  )
}

function MobileCartIcon() {
  const { cartCount } = useShoppingCart()

  return (
    <div className='shopping-cart-mobile'>
      <Link href='/shop/summary'>
        <a>
          <FiShoppingCart className='icon' />
          <span className='cart-items'>{cartCount}</span>
        </a>
      </Link>
    </div>
  )
}

export default function ShoppingCart({ mobile }) {
  return <>{mobile ? <MobileCartIcon /> : <CartIcon />}</>
}
