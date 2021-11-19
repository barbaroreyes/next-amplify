import '../styles/globals.css';
 import Amplify  from 'aws-amplify';;
 import configure from '../aws-exports.js'
 Amplify.configure(configure)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
