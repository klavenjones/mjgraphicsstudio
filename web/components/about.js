import { motion } from 'framer-motion'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import { imageUrlFor } from '../lib/sanity'

export default function About({ aboutMe }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'backOut', duration: 0.75, delay: 0.5 }}
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
              <a href='mailto:&#109;&#097;&#105;&#110;&#101;&#054;&#049;&#054;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;'>
                Email
              </a>
            </li>
            <li>
              <a href='https://dribbble.com'>Dribbble </a>
            </li>
            <li>
              <a href='https://behance.net'>Behance</a>
            </li>
            <li>
              <a href='https://www.instagram.com/mj_graphics/'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.main>
  )
}
