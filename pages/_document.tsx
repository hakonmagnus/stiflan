import { Html, Head, Main, NextScript } from 'next/document'
import { PUBLIC_HOSTNAME, business } from '../content/site-content'

export default function Document() {
  return (
    <Html lang="is">
      <Head>
        {/* Per-page <title>, description, and OG/Twitter tags are set in components/Layout.tsx via content/site-content.ts */}
        {/* Geo-location meta tags — coordinates match localBusinessSchema in content/schema.ts */}
        <meta name="geo.region" content="IS" />
        <meta name="geo.placename" content="Höfuðborgarsvæðið" />
        <meta name="geo.position" content={`${business.geo.latitude};${business.geo.longitude}`} />
        <meta name="ICBM" content={`${business.geo.latitude}, ${business.geo.longitude}`} />
        {/* Google Search Console verification — paste your token in place of the placeholder below (Search Console → Settings → Ownership verification → HTML tag) */}
        {/* <meta name="google-site-verification" content="PASTE_TOKEN_HERE" /> */}
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
