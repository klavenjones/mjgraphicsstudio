import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Gallery } from '../components'
import { Footer, Navigation, Meta } from '../components/shared'

import Cache from '../util/cache'

import { indexQuery, sanityClient } from '../lib/sanity'
import Loader from '../components/shared/loader'

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
      throw new Error(error.message)
    }
  }

  return (
    <>
      <Meta title="MJ Graphics Design Studio"/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navigation />
        <Gallery artwork={art} />
        {art.length > 0 && !loading && !postEnd && (
          <div className='w-full flex items-center justify-center'>
            <button onClick={getMorePosts} className='home-content__show-more'>
              Show more work
            </button>
          </div>
        )}
        <Loader show={loading} />
        <Footer />
      </motion.div>
    </>
  )
}

export const getStaticProps = async () => {
  let artwork
  if (!Cache.has('artwork') || Cache.isExpired('artwork', 300)) {
    artwork = await sanityClient.fetch(`${indexQuery}[0..5]`)
    Cache.set('artwork', artwork)
  } else {
    artwork = Cache.get('artwork')
  }

  return {
    props: { artwork }
  }
}
