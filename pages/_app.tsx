import type { AppProps } from 'next/app'
import Analytics from '../components/Analytics'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
