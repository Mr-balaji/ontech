import React, { useEffect,useState} from "react";
import Head from "next/head";
import noInternet from 'no-internet'
import NoConnection from "@/pages/noconnection";
import { Catamaran } from '@next/font/google';
import Left from "./left";
import Top from "./top";
import Bottom from "./bottom";
const myCatamaran = Catamaran({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

}) 

export default function Layout({ children, ...pageProps }) {
  
  const [IsOnline, setOnline] = useState(true);
  useEffect(() => {
    noInternet().then(offline => {
      if (offline) {
        setOnline(false); 
      }
    })
  }, []);
  
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Ontech</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {IsOnline ? <><Top/><div className="xl:pl-[19.097vw] lg:pl-[16.097vw] 2xl:pl-[19.097vw] pl-[10px] xl:pt-[5.278vw] pt-[76px] pr-[10px]"><main className={myCatamaran.className}>{children}</main> <Bottom/></div></> : <NoConnection/>}

    </>
  );
}
 