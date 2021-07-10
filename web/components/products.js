import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { imageUrlFor } from '../lib/sanity'

function Product({ product }) {
  const { addItem, removeItem } = useShoppingCart()
  const [price, setPrice] = useState(product.defaultSize.price)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='product'>
      <img
        src={imageUrlFor(product.image)
          .width(500)
          .height(500)
          .fit('fill')
          .url()}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>
        {formatCurrencyString({
          value: price,
          currency: 'usd'
        })}
      </p>
      <div className='product__buttons'>
        <div className='product__select'>
          <div className='frame-size'>
            <label htmlFor='frame-size'> Frame Size:</label>
            <select
              onChange={(e) => setPrice(e.target.value)}
              name='frame-size'
              id='frame-size'
            >
              {/* <option>Choose Frame Size</option> */}
              {product.frameSizes.map((size) => (
                <option key={size._key} value={size.price}>{`${
                  size.size
                } sized poster - (${formatCurrencyString({
                  value: size.price,
                  currency: 'usd'
                })})`}</option>
              ))}
            </select>
          </div>
          <div className='quantity'>
            <label htmlFor='frame-size'>Quantity:</label>
            <select
              onChange={(e) => setQuantity(e.target.value)}
              name='frame-size'
              id='frame-size'
            >
              {/* <option>Choose Frame Size</option> */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                <option key={i} value={item}>{`${item}`}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={() => addItem({ price: price, ...product })}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default function Products({ products }) {
  console.log(products)
  return (
    <div className='products'>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )
}
