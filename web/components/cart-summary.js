import { useState, useEffect } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { fetchGet, fetchPost } from '../util/services'

function CartSummaryOG() {
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

    redirectToCheckout({ sessionId: response.id })
  }

  return (
    <div className='pt-20 border'>
      <form onSubmit={handleCheckout}>
        <h2>Cart Summary</h2>

        <p suppressHydrationWarning>
          <strong>Number of Items:</strong>
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

function DisabledButtons() {
  return (
    <div className='summary__buttons'>
      <button disabled className='disabled'>
        Clear Cart
      </button>
      <button className='disabled'>Checkout</button>
    </div>
  )
}

function SummaryButtons({ emptyCart, checkOut }) {
  return (
    <div className='summary__buttons'>
      <button type='button' onClick={emptyCart}>
        Clear Cart
      </button>
      <button type='submit' onClick={checkOut}>
        Checkout
      </button>
    </div>
  )
}

function ShoppingItems({ product }) {
  return (
    <div className='summary__shopping-item'>
      <div className='item-photo'>
        <div className='photo-container'>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className='item-description'>
        <div className='item-price'>
          <p>{product.name}</p>
          <p>{product.formattedValue}</p>
        </div>
        <p></p>
      </div>
    </div>
  )
}

function CartSummary() {
  const [loading, setLoading] = useState(false)
  const [shipping, setShipping] = useState(500)
  const [cartEmpty, setCartEmpty] = useState(true)

  const {
    formattedTotalPrice,
    totalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout
  } = useShoppingCart()

  // console.log(cartDetails)

  useEffect(() => setCartEmpty(!cartCount), [cartCount])

  const products = Object.values(cartDetails)

  const handleCheckout = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetchPost('/api/checkout_sessions/cart', cartDetails)
    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    redirectToCheckout({ sessionId: response.id })
  }

  return (
    <main className='summary-content'>
      <div className='summary-container'>
        <div className='summary__shopping-bag'>
          <h2>Bag</h2>
          {products.map((item, i) => (
            <ShoppingItems key={item.id} product={item} />
          ))}
        </div>
        <div className='summary__summary-detail'>
          <h2>Summary</h2>
          <div className='summary__item'>
            <p>Subtotal</p>
            <p>{formattedTotalPrice}</p>
          </div>
          <div className='summary__item'>
            <p>Estimated Shipping & Handling</p>
            <p>
              {cartEmpty
                ? `$0.00`
                : formatCurrencyString({ value: shipping, currency: 'usd' })}
            </p>
          </div>
          <div className='summary__item total'>
            <p>Total</p>
            <p>
              {cartEmpty
                ? `$0.00`
                : formatCurrencyString({
                    value: `${totalPrice + shipping}`,
                    currency: 'usd'
                  })}
            </p>
          </div>
          <form>
            {cartEmpty || loading ? (
              <DisabledButtons />
            ) : (
              <SummaryButtons emptyCart={clearCart} checkOut={handleCheckout} />
            )}
          </form>
        </div>
      </div>
    </main>
  )
}

export default CartSummary
