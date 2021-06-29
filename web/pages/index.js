import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation } from '../components/shared'

import Cache from '../util/cache'

import { indexQuery, sanityClient } from '../lib/sanity'

const LIMIT = 3

export default function Home({ artwork }) {
  const [loading, setLoading] = useState(true)
  const [art, setArt] = useState([])
  const [postEnd, setPostEnd] = useState(false)

  useEffect(() => {
    if (art.length < 1) {
      setArt(artwork)
      setLoading(false)
    }
  }, [])

  const getMorePosts = async () => {
    setLoading(true)
    //Get the post after the last
    const last = art.length
    //Run query to get new posts
    try {
      const newArt = await sanityClient.fetch(
        `${indexQuery}[${last}..${LIMIT - 1 + last}]`
      )
      setArt(art.concat(newArt))
      setLoading(false)
      if (newArt.length < LIMIT) {
        setPostEnd(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // if (loading) return <h1 className='text-center text-5xl'>Loading......</h1>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      <Gallery artwork={art} />
      {art.length > 0 && !loading && !postEnd && (
        <button
          onClick={getMorePosts}
          className='w-40 h-40 bg-gray-700 text-white'
        >
          GET MORE
        </button>
      )}
      <Footer />
    </motion.div>
  )
}

export const getStaticProps = async () => {
  let artwork
  if (!Cache.has('artwork') || Cache.isExpired('artwork', 300)) {
    artwork = await sanityClient.fetch(`${indexQuery}[0..${LIMIT - 1}]`)
    Cache.set('artwork', artwork)
  } else {
    artwork = Cache.get('artwork')
  }

  return {
    props: { artwork }
  }
}
