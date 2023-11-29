import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import Head from 'next/head'
const progress = new ProgressBar({
  size: 5,
  color: '#FE595E',
  className: 'z-50',
  delay: 1000,
})
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      {/* SEO Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ISAirBnb</title>
      <meta name="author" content="Author's Website" itemprop="https://inderjitshahi.vercel.app/"></meta>
      <meta name="description" content="Explore a stunning Airbnb clone built with Next.js and Tailwind CSS. Full-stack developer adept in JavaScript, ReactJS, and NodeJS." />
      <meta name="keywords" content="airbnb clone, next.js, tailwind css, full stack developer, JavaScript, ReactJS, NodeJS" />
      <meta name="author" content="Inderjit Shahi" />
      <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Inderjit Shahi" />
      <meta property="og:description" content="Explore a stunning Airbnb clone built with Next.js and Tailwind CSS. Full-stack developer adept in JavaScript, ReactJS, and NodeJS." />
      <meta property="og:image" content="/poster.png" />
      <meta property="og:url" content="https://is-air-bn-b.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ISAirBnb" />
      <meta name="twitter:description" content="Explore a stunning Airbnb clone built with Next.js and Tailwind CSS. Full-stack developer adept in JavaScript, ReactJS, and NodeJS." />
      <meta name="twitter:image" content="/poster.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
