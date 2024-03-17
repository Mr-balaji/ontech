import Image from "next/image";
import Link from "next/link";

const NoConnection = () => {
    return (
        <div className="pt-16 bg-[#fff] h-screen" >
            <div className="dashboard-main-wrapper pl-20 pr-4 mt-3">
                <div className="flex flex-wrap flex-row align-center justify-center content-center auto-rows-max ">
                    <Image src="/assets/images/logo-landing.png" alt="" width={220} height={56} />
                </div>
                <div className="flex mt-5 flex-wrap flex-row align-center justify-center content-center auto-rows-max">
                <Image  src="/assets/images/noconnection.gif" height="400" width="400"  className="mx-auto" alt="" />
               
                    
                </div>
                <h3 className="font-bold text-[30px] text-[#525252] text-center">No Internet Connection.</h3>
            </div>
        </div>
    )
}
export default NoConnection