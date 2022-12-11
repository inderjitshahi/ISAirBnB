import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
const progress=new ProgressBar({
  size:5,
  color:'#FE595E',
  className:'z-50',
  delay:1000,
})
Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
