
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css';
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Catamaran } from "@next/font/google";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

const stripePromise = loadStripe('pk_test_51Og39hSAVzq40erfMiWaMDFw5j6ldbI0vGz2mCwoWRkyefDqlmDwL8ODB3YjP3O4KGeT8enY2BriefNeoqFLr0k600ChV5K9iv');

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return <main className={myCatamaran.className}>
     <Elements stripe={stripePromise}>
   <Component {...pageProps} />
   </Elements>
   </main>
}





