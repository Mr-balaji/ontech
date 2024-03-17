import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
        <Head>
        <title>Page Not Found</title>
        </Head>
        <div className="pt-16 bg-[#fff] h-screen" >
            <div className="dashboard-main-wrapper pl-20 pr-4 mt-3">
                <div className="flex flex-wrap flex-row align-center justify-center content-center auto-rows-max ">
                    <Image src="/assets/images/logo-landing.png" alt="" width={220} height={56} />
                </div>
                <div className="flex mt-5 flex-wrap flex-row align-center justify-center content-center auto-rows-max">
                <Link href="/"><Image  src="/assets/images/404img.gif" height="500" width="500"  className="mx-auto" alt="" /></Link>
               
                    
                </div>
            </div>
        </div>
        </>
    )
}