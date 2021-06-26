import React from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    id: 1,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  },
  {
    id: 2,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  },
  {
    id: 3,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  },
  {
    id: 4,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  },
  {
    id: 5,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  },
  {
    id: 6,
    title: 'Placeholder',
    href: 'https://via.placeholder.com/640'
  }
]

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

function Image({ image: { href, title } }) {
  return (
    <motion.div variants={image} className='home-content__gallery-item'>
      <img src={href} alt={title} />
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <motion.main className='home-content'>
      <motion.div
        initial='hidden'
        animate='show'
        variants={imageContainer}
        className='home-content__gallery'
      >
        {images.map((img) => (
          <Image image={img} key={img.id} />
        ))}
      </motion.div>
    </motion.main>
  )
}
