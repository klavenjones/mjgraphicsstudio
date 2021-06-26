import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const navLinks = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const socialLinks = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.3
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      staggerChildren: 0.05,
      staggerDirection: -2
    }
  }
}

function MenuItem({ item }) {
  return (
    <>
      <motion.li
        variants={navLinks}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        <Link href={item.href}>
          <a>{item.label}</a>
        </Link>
      </motion.li>
    </>
  )
}

function SocialMedia({ social }) {
  return (
    <>
      <motion.li variants={navLinks}>
        <h3>Get In Touch</h3>
        <p>
          <Link href='mailto:klayboogie@gmail.com'>
            <a>hey@mjgraphics.design</a>
          </Link>
        </p>
        <motion.div variants={socialLinks} className='social'>
          {social.map((link, i) => (
            <Link href={link.href} key={i}>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                variants={socialLinks}
              >
                {link.icon}
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </motion.li>
    </>
  )
}

export default function MobileNavigation({ menuItems, social }) {
  return (
    <motion.ul variants={variants} className='mobile-nav__navigation '>
      {menuItems.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
      <SocialMedia social={social} />
    </motion.ul>
  )
}
