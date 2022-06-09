import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import {SessionProvider} from 'next-auth/react'
//import nextAuth from 'next-auth';

function MyApp({ 
  Component,
   pageProps:{
     session,...pageProps
   } }) {
  return(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    )
}

export default MyApp
