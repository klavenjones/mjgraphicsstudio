import SimpleReactLightbox from 'simple-react-lightbox'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
