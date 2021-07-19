// pages/api/checkout_sessions/cart.js

import { validateCartItems } from 'use-shopping-cart/src/serverUtil'
import Stripe from 'stripe'
import { sanityClient, merchQuery } from '../../../lib/sanity'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02'
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Validate the cart details that were sent from the client.
      const cartItems = req.body
      //Sanity client performs merchQuery
      let sanityData = await sanityClient.fetch(merchQuery)
      //Let's get the different frame sizes
      let frameSizes = sanityData[0].frameSizes.map((size) => size.size)
      //We will now create this array so we can retrieve all the different variants
      let variantData = []
      for (let size in frameSizes) {
        for (let item of sanityData) {
          variantData.push({
            ...item,
            id: `${item.id}-${frameSizes[size]}`,
            price: item.frameSizes[size].price,
            description: `Size: ${item.frameSizes[size].size}`
          })
        }
      }

      // The POST request is then validated against the data from Sanity.
      const line_items = validateCartItems(variantData, cartItems)

      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_rates: ['shr_1JEKgGD27TMEWY73SyaodeJ7'],
        shipping_address_collection: {
          allowed_countries: ['US', 'CA']
        },
        metadata: {
          order_number: Math.floor(Math.random() * 1000 * 1000000)
        },
        //The validated cart items are inserted.
        line_items,
        success_url: `${req.headers.origin}/shop/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/shop/summary`
      }

      const checkoutSession = await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
