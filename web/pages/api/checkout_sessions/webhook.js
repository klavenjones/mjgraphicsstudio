import { buffer } from 'micro'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02'
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export const config = {
  api: {
    bodyParser: false
  }
}

const fulfillOrder = (session) => {
  // TODO: fill me in
  console.log('Fulfilling order', session)
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
      if (event.type === 'checkout.session.completed') {
        // Handle successful charge
        const session = event.data.object

        // Fulfill the purchase...
        fulfillOrder(session)
      } else {
        console.warn(`Unhandled event type: ${event.type}`)
      }
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
