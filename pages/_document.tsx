import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Stíflu og myndavélaþjónustan sér um stífluhreinsun, myndavélaskoðun, pípuhreinsun og lagnaviðhald á höfuðborgarsvæðinu. Hringdu núna — við svörum allan sólarhringinn." />
        <meta property="og:title" content="Stíflu og myndavélaþjónustan — Stíflur, Myndarnir og Lagnahreinsun" />
        <meta property="og:description" content="Stífluhreinsun, myndavélaskoðun og lagnaviðhald á höfuðborgarsvæðinu. Sama dags þjónusta." />
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
