import { CartProvider } from 'use-shopping-cart'
import { getStripe } from '../lib/stripe'

function Cart({ children }) {
  return (
    <CartProvider mode='checkout-session' stripe={getStripe()} currency={'usd'}>
      {children}
    </CartProvider>
  )
}

export default Cart
