import React from 'react'
import { motion } from 'framer-motion'
import { imageUrlFor } from '../lib/sanity'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

const imageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const image = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
}

function Image({ image: { artwork } }) {
  return (
    <motion.div
      variants={image}
      whileHover={{ background: 'yellow' }}
      className='home-content__gallery-item'
    >
      <motion.img
        src={imageUrlFor(artwork).width(1000).height(1000).fit('fill').url()}
        whileHover={{ opacity: 0.85, zIndex: 0 }}
        alt={artwork.title}
      />
    </motion.div>
  )
}

export default function Gallery({ artwork }) {
  return (
    <motion.main className='home-content'>
      <SRLWrapper>
        <motion.div
          initial='hidden'
          animate='show'
          variants={imageContainer}
          className='home-content__gallery'
        >
          {artwork.map((img) => (
            <Image image={img} key={img._id} />
          ))}
        </motion.div>
      </SRLWrapper>
    </motion.main>
  )
}
