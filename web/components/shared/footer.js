import Link from 'next/link'
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaBehanceSquare,
  FaEnvelope
} from 'react-icons/fa'

const socialNavigation = [
  {
    icon: <FaEnvelope className='icon' />,
    href: 'mailto:hey@'
  },
  {
    icon: <FaInstagram className='icon' />,
    href: 'https://instagram.com'
  }
  // {
  //   icon: <FaTwitter className='icon' />,
  //   href: 'https://instagram.com'
  // },
  // {
  //   icon: <FaDribbble className='icon' />,
  //   href: 'https://instagram.com'
  // },
  // {
  //   icon: <FaBehanceSquare className='icon' />,
  //   href: 'https://instagram.com'
  // }
]

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <p>
            © 2020 MJ Graphics. | All Rights Reserved. | Website by
            {'             '}
            <Link href='https://klavenjones.com'>
              <a>Klaven</a>
            </Link>
            .
          </p>
        </div>
        <div className='footer__right'>
          {socialNavigation.map((link, i) => (
            <Link href={link.href} key={i}>
              <a>{link.icon}</a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
