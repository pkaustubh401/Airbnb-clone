import 'tailwindcss/tailwind.css'
import '../styles/global.css';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size:20,
  color : '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routerChnageStart',progress.start);
Router.events.on('routerChnageComplete',progress.finish);
Router.events.on('routerChnageError',progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
