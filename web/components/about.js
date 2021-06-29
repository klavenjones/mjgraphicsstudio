import { motion } from 'framer-motion'
import BlockContent from '@sanity/block-content-to-react'
import { imageUrlFor } from '../lib/sanity'

export default function About({ aboutMe }) {
  console.log('ABOUT ME', aboutMe)
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      className='about-content'
    >
      <div className='about-content__container'>
        <div className='about-content__left'>
          <img
            src={imageUrlFor(aboutMe?.selfie)
              .width(1000)
              .height(1000)
              .fit('fill')
              .url()}
            alt='Placeholder'
          />
        </div>
        <div className='about-content__right'>
          <h2>{aboutMe?.title}</h2>

          <BlockContent blocks={aboutMe?.body} />

          <p>
            Please feel free to reach out if you need any custom prints or
            logos.
          </p>

          <ul>
            <li>
              <a href=''>Email</a>
            </li>
            <li>
              <a href=''>Instagram</a>
            </li>
            {/* <li>
              <a href=''>Behance</a>
            </li>
            <li>
              <a href=''>Dribbble </a>
            </li> */}
          </ul>
        </div>
      </div>
    </motion.main>
  )
}
