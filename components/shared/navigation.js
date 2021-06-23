import React from 'react'
import Link from 'next/link'

import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaBehanceSquare
} from 'react-icons/fa'

const navigation = [
  {
    href: '/',
    label: 'Work'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/shop',
    label: 'Shop'
  }
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
  {
    icon: <FaDribbble className='icon' />,
    href: 'https://instagram.com'
  },
  {
    icon: <FaBehanceSquare className='icon' />,
    href: 'https://instagram.com'
  }
]

function Navigation() {
  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
          {navigation.map((link, i) => (
            <Link href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>
        <div className='logo'>
          <a href=''>Logo</a>
        </div>
        <div className='nav-right'>
          {socialNavigation.map((link, i) => (
            <Link href={link.href}>
              <a>{link.icon}</a>
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className='navbar-mobile'>
        <div className='logo'>
          <a href=''>Logo</a>
        </div>
        <div className='nav-right'>
          <a href=''>Hamburger Menu</a>
        </div>
      </div>
    </>
  )
}

export default Navigation
