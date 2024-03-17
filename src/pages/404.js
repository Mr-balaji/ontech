import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function pagenotfound() {
    return (
        <>
        <Head>
              <title>Page Not Found</title>
              <meta name="description" content="" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
        </Head>

          
                <div className="pt-16 bg-[#fff] h-screen" >
                    <div className="dashboard-main-wrapper pl-20 pr-4 mt-3">
                        <div className="flex flex-wrap flex-row align-center justify-center content-center auto-rows-max ">
                            <Image src="/assets/images/logo.png" alt="" width={"100"} height={"40"} />
                        </div>
                        <div className="flex mt-5 flex-wrap flex-row align-center justify-center content-center auto-rows-max">
                        <Link href="/"><Image  src="/assets/images/404img.gif" height="500" width="500"  className="mx-auto" alt="" /></Link>
                    
                            
                        </div>
                    </div>
                </div>
        
        </>
    )
}