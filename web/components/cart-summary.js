import { useState, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { fetchGet, fetchPost } from '../util/services'

function CartSummary() {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)

  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout
  } = useShoppingCart()

  useEffect(() => setCartEmpty(!cartCount), [cartCount])

  const handleCheckout = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetchPost('/api/checkout_sessions/cart', cartDetails)
    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }
    console.log('HANDLE CHECKOUT', response)
    redirectToCheckout({ sessionId: response.id })
  }

  return (
    <div className='pt-20 border'>
      <form onSubmit={handleCheckout}>
        <h2>Cart Summary</h2>

        <p suppressHydrationWarning>
          <strong>Number od Items:</strong>
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {formattedTotalPrice}
        </p>
        <p>Use 4242 4242 4242 4242 as the card number.</p>
        <button
          className='cart-style-background'
          type='submit'
          disabled={cartEmpty || loading}
        >
          Checkout <div className='card-number'></div>
        </button>
        <button
          className='cart-style-background'
          type='button'
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </form>
    </div>
  )
}

export default CartSummary
