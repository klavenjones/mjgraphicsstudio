import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      className='about-content'
    >
      <div className='about-content__container'>
        <div className='about-content__left'>
          <img src='/selfie_abstract.jpeg' alt='Placeholder' />
        </div>
        <div className='about-content__right'>
          <h2>Hello, I'm Jermaine.</h2>

          <p>
            I am a digital artist and graphic designer based in Florida, focused
            on creating beautiful and functional digital solutions.
          </p>

          <p>
            Write a paragraph or two about your background and what you offer.
            For example, I offer Logo Design, Illustrations and more. I create
            designs that are clean and professional that help give your brand a
            powerful first impression. Whatever your Graphic Design needs are, I
            am able to work closely with you to ensure that you get the exact
            results your brand needs to leave a lasting impression with your
            clients.
          </p>

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
            <li>
              <a href=''>Behance</a>
            </li>
            <li>
              <a href=''>Dribbble </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.main>
  )
}
