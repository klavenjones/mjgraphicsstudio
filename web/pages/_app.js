import { Toaster } from "react-hot-toast";
import SimpleReactLightbox from "simple-react-lightbox";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
      <Toaster />
    </SimpleReactLightbox>
  );
}

export default MyApp;
