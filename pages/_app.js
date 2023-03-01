import BackToTop from '@/components/BackToTop'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'


export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState('');

  const toggleTheme = () => { 
    theme === '' ? setTheme('dark-theme') : setTheme("")
  }
  
  useEffect(() => { 
    document.body.className = theme 
  }, [theme])

  return <div>
    
    <BackToTop />
    <Navbar theme={theme} toggleTheme={ toggleTheme} />
    <Component {...pageProps} theme={theme} />
  </div>
}
