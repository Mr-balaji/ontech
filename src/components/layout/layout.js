import React, { useEffect,useState} from "react";
import Top from "../layout/top";
import Bottom from "../layout/bottom";
import Head from "next/head";
import noInternet from 'no-internet'
import NoConnection from "@/pages/noconnection";
import { Catamaran } from '@next/font/google';
import Left from "./left";
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
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to EMS</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {IsOnline ? <><Top/><div className="xl:pl-[19.097vw] lg:pl-[16.097vw] 2xl:pl-[19.097vw] pl-[10px] xl:pt-[6.944vw] md:pt-[8.944vw] 2xl:pt-[7.944vw] pr-[10px] pt-[70px]"><main className={myCatamaran.className}>{children}</main> <Bottom/></div></> : <NoConnection/>}

    </>
  );
}
 