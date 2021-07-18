import { motion } from 'framer-motion'
import { Cart, CartSummary} from '../../components'
import { Footer, Navigation, Meta } from '../../components/shared'

export default function ShopPage({ products }) {
  return (
    <>
      <Meta title='MJ Graphics Design Studio Shop' />
      <Cart>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navigation shop />
          <CartSummary />
          <Footer />
        </motion.div>
      </Cart>
    </>
  )
}
