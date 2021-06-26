import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import Link from 'next/link'

import { useDimensions } from '../../../hooks/use-dimensions'

import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaBehanceSquare,
  FaBars
} from 'react-icons/fa'
import MenuToggle from './menu-toggle'
import MobileNavigation from './mobile-navigation'

const navigation = [
  {
    href: '/',
    label: 'Work'
  },
  {
    href: '/about',
    label: 'About'
  },
  // {
  //   href: '/shop',
  //   label: 'Shop'
  // }
]

const socialNavigation = [
  {
    icon: <FaInstagram className='icon' />,
    href: 'https://instagram.com'
  },
  {
    icon: <FaTwitter className='icon' />,
    href: 'https://instagram.com'
  },
  // {
  //   icon: <FaDribbble className='icon' />,
  //   href: 'https://instagram.com'
  // },
  // {
  //   icon: <FaBehanceSquare className='icon' />,
  //   href: 'https://instagram.com'
  // }
]

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 5 + 200}px at 94% 45px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 93% 45px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

function SideNavigation() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='mobile-nav'
    >
      <motion.div className='mobile-nav__background' variants={sidebar} />
      <MobileNavigation menuItems={navigation} social={socialNavigation} />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}

function Navigation() {
  return (
    <>
      <div className='navbar fixed-top'>
        <div className='nav-left'>
          {navigation.map((link, i) => (
            <Link href={link.href} key={i}>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>
        <div className='logo'>
          <Link href='/'>
            <a>Mj Graphics Design</a>
          </Link>
        </div>
        <div className='nav-right'>
          {socialNavigation.map((link, i) => (
            <Link href={link.href} key={i}>
              <a>{link.icon}</a>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='navbar-mobile fixed-top'>
        <div className='logo'>
          <Link href='/'>
            <a>MJ Graphics Design</a>
          </Link>
        </div>
      </div>
      <SideNavigation />
    </>
  )
}

export default Navigation
