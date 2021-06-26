import Head from 'next/head'
import Image from 'next/image'
import { Footer, Navigation } from '../components/shared'

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className='py-24 lg:py-36 max-w-screen-2xl mx-auto'>Home</main>
      <Footer />
    </div>
  )
}
