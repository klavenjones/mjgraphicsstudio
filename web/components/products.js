import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { imageUrlFor } from '../lib/sanity'

export default function Products({ products }) {
  const { addItem, removeItem } = useShoppingCart()
  console.log(products[1].defaultSize.price)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <div className='grid-cols-1' key={product._id}>
          <img src={imageUrlFor(product.image).width(200)} alt={product.name} />
          <h1>{product.name}</h1>
          <p>
            {formatCurrencyString({
              value: product.defaultSize.price,
              currency: 'usd'
            })}
          </p>
          <button
            onClick={() =>
              addItem({ price: product.defaultSize.price, ...product })
            }
          >
            Add To Cart
          </button>
          <button onClick={() => removeItem(product._id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
