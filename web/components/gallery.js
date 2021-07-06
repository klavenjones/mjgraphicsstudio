import React from 'react'
import { motion } from 'framer-motion'
import { imageUrlFor } from '../lib/sanity'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

const imageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8
    }
  }
}

const image = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      ease: 'backOut',
      duration: 0.75
    }
  }
}

const options = {
  settings: {
    autoplay: 0,
    overlayColor: 'rgba(255,255,255,.95)',
    lightboxTransitionTimingFunction: 'easeInOut'
  },
  buttons: {
    backgroundColor: 'rgba(255, 255, 255, .95)',
    iconColor: 'rgba(0, 0, 0, 1)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: '50px'
  },
  thumbnails: {
    showThumbnails: false
  }
}

function Image({ image: { artwork } }) {
  return (
    <motion.div variants={image} className='home-content__gallery-item'>
      <motion.img
        src={imageUrlFor(artwork).width(1000).height(1000).fit('fill').url()}
        whileHover={{ opacity: 0.85, zIndex: 0 }}
        alt={`${artwork.title} `}
      />
    </motion.div>
  )
}

export default function Gallery({ artwork }) {
  return (
    <motion.main className='home-content'>
      <SRLWrapper options={options}>
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
