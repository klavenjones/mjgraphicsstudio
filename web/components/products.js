import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { imageUrlFor } from '../lib/sanity'
import toast, { Toaster } from 'react-hot-toast'

// function Product({ product }) {
//   const { addItem } = useShoppingCart()
//   const [size, setSize] = useState(product.defaultSize.size)
//   const [price, setPrice] = useState(product.defaultSize.price)
//   const [quantity, setQuantity] = useState(1)

//   return (
//     <div className='product'>
//       <img
//         src={imageUrlFor(product.image)
//           .width(500)
//           .height(500)
//           .fit('fill')
//           .url()}
//         alt={product.name}
//       />
//       <h2>{product.name}</h2>
//       <p>
//         {formatCurrencyString({
//           value: price,
//           currency: 'usd'
//         })}
//       </p>
//       <div className='product__buttons'>
//         <div className='product__select'>
//           <div className='frame-size'>
//             <label htmlFor='frame-size'> Frame Size:</label>
//             <div className='select'>
//               <select
//                 onChange={(e) => {
//                   setSize(
//                     e.target[e.target.selectedIndex].getAttribute('data-size')
//                   )
//                   if (e.target.value !== 'Choose Frame Size') {
//                     setPrice(Number(e.target.value))
//                   }
//                 }}
//                 name='frame-size'
//                 id='frame-size'
//               >
//                 <option>Choose Frame Size</option>
//                 {product.frameSizes.map((size) => (
//                   <option
//                     key={size._key}
//                     value={size.price}
//                     data-size={size.size}
//                   >
//                     {`${size.size} - ${formatCurrencyString({
//                       value: size.price,
//                       currency: 'usd'
//                     })}`}{' '}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className='quantity'>
//             <label htmlFor='frame-size'>Quantity:</label>
//             <div className='select'>
//               <select
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 name='frame-size'
//                 id='frame-size'
//               >
//                 {/* <option>Choose Frame Size</option> */}
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
//                   <option key={i} value={item}>{`${item}`}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={async () => {
//             // addItem({ ...product, price: price }, quantity)
//             try {
//               addItem(
//                 { ...product, id: `${product.id}-${size}`, price: price },
//                 quantity
//               )
//               toast.success('Item has been added to your cart', {
//                 duration: 2500,
//                 position: 'top-center',
//                 style: {
//                   backgroundColor: 'rgba(110, 231, 183, 1)',
//                   color: 'rgba(5, 95, 70, 1)'
//                 }
//               })
//             } catch (error) {
//               toast.error('Something went wrong adding item.', {
//                 style: {
//                   backgroundColor: 'rgba(110, 231, 183, 1)',
//                   color: 'rgba(5, 95, 70, 1)'
//                 }
//               })
//             }
//           }}
//         >
//           Add To Cart
//         </button>
//       </div>
//     </div>
//   )
// }

function Product({ product }) {

  return (
    <Link href={`/shop/${product.id}`}>
      <a key={product.id} className='group text-sm'>
        <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75'>
          <img
            src={imageUrlFor(product.image)
              .width(500)
              .height(500)
              .fit('fill')
              .url()}
            alt={product.name}
            className='w-full h-full object-center object-cover'
          />
        </div>
        <h3 className='mt-4 font-medium text-gray-900'>{product.name}</h3>
        <p className='text-gray-500 italic'>{product.availability}</p>
        <p className='mt-2 font-medium text-gray-900'>
          Starting at{' '}
          {formatCurrencyString({ value: product.price, currency: 'usd' })}
        </p>
      </a>
    </Link>
  )
}

export default function Products({ products }) {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-semibold tracking-relaxed'>
          Digital Prints For Sale
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
