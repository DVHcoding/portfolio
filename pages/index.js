import { Inter } from '@next/font/google'
import HomePage from '@/components/HomePage'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Me from '@/components/Me'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio/>
      <Experience />
      <Me />
      <Contact/>
    </div>
  )
}
