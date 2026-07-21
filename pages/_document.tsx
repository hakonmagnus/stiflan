import { Html, Head, Main, NextScript } from 'next/document'
import { PUBLIC_HOSTNAME } from '../content/site-content'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Per-page <title>, description, and OG/Twitter tags are set in components/Layout.tsx via content/site-content.ts */}
        <link rel="apple-touch-icon" sizes="57x57" href={`${PUBLIC_HOSTNAME}/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${PUBLIC_HOSTNAME}/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${PUBLIC_HOSTNAME}/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${PUBLIC_HOSTNAME}/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${PUBLIC_HOSTNAME}/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${PUBLIC_HOSTNAME}/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${PUBLIC_HOSTNAME}/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${PUBLIC_HOSTNAME}/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${PUBLIC_HOSTNAME}/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`${PUBLIC_HOSTNAME}/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${PUBLIC_HOSTNAME}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${PUBLIC_HOSTNAME}/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${PUBLIC_HOSTNAME}/favicon-16x16.png`} />
        <link rel="manifest" href={`${PUBLIC_HOSTNAME}/manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={`${PUBLIC_HOSTNAME}/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
