import { useEffect, useState } from 'react'
import { sanityClient, socialQuery } from '../../lib/sanity'
import Link from 'next/link'
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaBehanceSquare,
  FaEnvelope
} from 'react-icons/fa'

export default function Footer() {
  const [social, setSocial] = useState(null)

  useEffect(() => {
    async function fetchData() {
      let data = await sanityClient.fetch(socialQuery)
      setSocial(data)
    }
    fetchData()
  }, [])

  const socialNavigation = [
    {
      icon: <FaEnvelope className='icon' />,
      href: social?.email
    },
    {
      icon: <FaInstagram className='icon' />,
      href: social?.instagram
    },
    // {
    //   icon: <FaTwitter className='icon' />,
    //   href: 'https://instagram.com'
    // },
    {
      icon: <FaDribbble className='icon' />,
      href: social?.dribbble
    },
    {
      icon: <FaBehanceSquare className='icon' />,
      href: social?.behance
    }
  ]

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
            <Link href={`mailto:${link.href}`} key={i}>
              <a>{link.icon}</a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
