import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import Bottom from "@/components/layout/bottom";
import RechargePopup from "@/components/popups/recharge";
import CompleteProfile from "@/components/popups/completeprofile";
import { useRouter } from "next/router";
import withAuth from "../withAuth";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

 function Dashboard() {
   const [rechargePopup, setRechargePopup] = useState(false);
   const [selectedProperty, setSelectedProperty] = useState(null);
   const [profilePopup,setProfilePopup] = useState(false)
   const [propertyList,setPropertyList] = useState("");
   const [isAuth,setIsAuth] = useState(false);
   const Property = [
      { name: 'Sandtone Home', code: 'SH1' },
      { name: 'Sandtone Home 1', code: 'SH2' },
      { name: 'Sandtone Home 2', code: 'SH3' },
   ];
const router = useRouter();

const fetchListData = async() =>{
   try {
      const accessToken = localStorage.getItem("token");
      const loggeduserId = localStorage.getItem("loggeduserId");
      const requestedData = {
         accessToken:JSON.parse(accessToken),
         "userId": parseInt(loggeduserId),
          "companyId": 1
      }
      const response = await axios.post("/api/property/getpropertylist",{requestedData})
      if(response){
         setPropertyList(response.data.ownerPropertyList)
      }

      
   } catch (error) {
      toast.error("something went wrong")
   }
}

useEffect(() => {
   fetchListData()
}, [])

 

   return (
      <>
      
         <Layout pageTitle="Homepage" >
            <ToastContainer />
            <div className="xl:px-[1.042vw] px-2">
               <div className="flex flex-wrap justify-between">
                  <h2 onClick={() => setRechargePopup(true)} className="text-[#171A1F] text-[20px] xl:text-[1.806vw] font-semibold ">Dashboard: 123456767</h2>

                  <div className="flex gap-3 items-center">
                     <label className="text-[#171A1F] text-[16px] xl:text-[1.528vw] font-semibold block">Change Property: </label>
                     <div className="place_dropdown relative">
                        <Dropdown value={selectedProperty} onChange={(e) => setSelectedProperty(e.value)} options={propertyList} optionLabel="name"
                           placeholder="Select a Property" className="w-full md:w-14rem xl:w-[17.361vw]" />
                        <div className="absolute top-2 left-2">
                           <Image src={"/assets/images/home_icon.svg"} width={24} height={24}
                              className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="xl:mt-[1.042vw] mt-2">
                  <div className="bg-[#323743] xl:p-[1.667vw] p-[10px] rounded-lg border-bottom-red  xl:h-[24.306vw] h-[300px]">
                     <div className="text-[#fff] text-[20px] xl:text-[1.667vw] font-semibold " onClick={()=>setProfilePopup(true)}>Consumption Overview: Sandtone Home</div>

                  </div>
               </div>

               <div className="xl:my-[2.083vw] my-[20px] ">
                  <div className="grid grid-cols-2 xl:grid-cols-12 md:grid-cols-12  gap-12 xl:gap-[2.500vw]">
                     <div className="xl:col-span-7 col-span-2">
                        <div className="xl:p-[2.083vw] p-[20px] bg-[#323743] shadow1 rounded-lg border-bottom-red">
                           <div className="flex justify-between items-center">
                              <h3 className="text-[#fff] text-[20px] xl:text-[1.667vw] font-normal">Account Balance</h3>

                              <Link href='' className="text-[#fff] text-[18px] xl:text-[1.389vw] font-normal">Check Details <i className="pi pi-angle-right"></i></Link>
                           </div>
                           <div className="flex ">
                              <h2 className="text-[#fff] text-[40px] xl:text-[4.167vw] font-semibold text_red leading-none">R 300.00</h2>
                           </div>
                           <div className="flex flex-wrap justify-between items-center">
                              <h3 className="text-[#fff] text-[20px] xl:text-[1.389vw] font-normal">Last top up: R100 on 5th Oct</h3>

                              <Link href='/topup' className="px-[30px] xl:px-[2.778vw] py-[12px] xl:py-[0.833vw] red text-[16px] xl:text-[1.25vw] font-normal uppercase rounded-full leading-6"><i className="pi pi-credit-card mr-1 "></i>TOPUP NOW </Link>
                           </div>
                        </div>
                     </div>
                     <div className="xl:col-span-5 col-span-2">
                        <div className="xl:p-[2.083vw] p-[20px] bg-[#323743] shadow1 rounded-lg border-bottom-red">
                           <div className="flex flex-wrap justify-center xl:gap-[2.431vw] gap-[35px] w-full">
                              <div className="mt-3">
                                 <div className="bg-[#F1F9FE] xl:px-[2.431vw] px-[30px] text-[#171A1F] text-[40px] xl:text-[4.167vw] font-semibold rounded-md leading-relaxed text-center">
                                    3
                                 </div>
                                 <h6 className="xl:mt-[1.389vw] mt-[15px] text-[#fff] text-[14px] xl:text-[0.972vw] font-light leading-none text-center">
                                    Total Properties
                                 </h6>
                              </div>
                              <div className="mt-3">
                                 <div className="bg-[#F1F9FE] xl:px-[2.431vw] px-[30px] text-[#171A1F] text-[40px] xl:text-[4.167vw] font-semibold rounded-md leading-relaxed text-center">
                                    4
                                 </div>
                                 <h6 className="xl:mt-[1.389vw] mt-[15px] text-[#fff] text-[14px] xl:text-[0.972vw] font-light leading-none text-center">
                                    Meters Installed
                                 </h6>
                              </div>
                              <div className="mt-3">
                                 <div className="bg-[#FEF9ED] xl:px-[2.431vw] px-[30px] text-[#171A1F] text-[40px] xl:text-[4.167vw] font-semibold rounded-md leading-relaxed text-center">
                                    3
                                 </div>
                                 <h6 className="xl:mt-[1.389vw] mt-[15px] text-[#fff] text-[14px] xl:text-[0.972vw] font-light leading-none text-center">
                                    Users / Tenants
                                 </h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="xl:my-[2.083vw] my-[20px] ">

               </div>
            </div>
            <RechargePopup
               visible={rechargePopup}
               onHides={() => setRechargePopup(false)}
            />

            <CompleteProfile
               visible={profilePopup}
               onHides={() => setProfilePopup(false)}
            />
         </Layout>
      </>
   );
}

export default withAuth(Dashboard);