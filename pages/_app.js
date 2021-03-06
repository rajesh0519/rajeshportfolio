import '../styles/globals.css'
import '../styles/homepage.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/project.css'
import '../styles/navbar.css'
import '../styles/background.css'

import 'react-circular-progressbar/dist/styles.css';
import "animate.css/animate.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
