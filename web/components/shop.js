import { motion } from 'framer-motion'
import React from 'react'

export default function Shop() {
  return (
    <motion.main className='flex items-center justify-center h-screen w-full'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{
          delay: 1.55,
          duration: 0.75,
          ease: 'easeIn'
        }}
        className='text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center relative uppercase font-semibold tracking-widest'
      >
        Shop coming soon.
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: 200 }}
          transition={{
            delay: 1.5,
            duration: 1.8,
            transition: 'easeOut'
          }}
          className='w-full h-full bg-white top-0 left-0 absolute'
        ></motion.span>
      </motion.h1>
    </motion.main>
  )
}
