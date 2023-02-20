import BackToTop from '@/components/BackToTop'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <BackToTop/>
    <Navbar />
    <Component {...pageProps} />
  </div>
}
