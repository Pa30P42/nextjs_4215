import '@/styles/globals.css'
import '@/styles/navbar.css'
import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import Navbar from './components/Navbar'

export default function App({Component, pageProps}: AppProps) {
  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
