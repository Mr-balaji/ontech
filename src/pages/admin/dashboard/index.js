import Image from "next/image";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "@/components/adminlayout/layout";
import { Calendar } from "primereact/calendar";
import Water from "./water";
import Electricity from "./electricity";
import Gas from "./gas";


export default function index() {
   const [activeDate, setActiveDate] = useState(1);
   const [date, setDate] = useState(null);


   const [selectedServices, setSelectedServices] = useState({ name: 'Electricity', code: 'SH2' });
   const Services = [
      { name: 'Water', code: 'SH1' },
      { name: 'Electricity', code: 'SH2' },
      { name: 'Gas', code: 'SH3' },
   ];

   return (
      <>
         <Layout pageTitle="Dashboard" >
            <div className="pl-[24px] xl:pl-[1.667vw] pr-[50px] xl:pr-[3.472vw]">
               {/* Header */}
               <div className="xl:mt-[2.778vw] mt-[40px] mb-[60px] xl:mb-[4.167vw]">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[36px] xl:gap-[2.5vw]">
                     {/* Total Consumers */}
                     <div className="p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                        <div className="flex justify-between">
                           <div className="">
                              <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Consumers</div>
                              <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">2,345 <span className="text-[#1DD75BFF] text-[16px] xl:text-[1.111vw] font-bold">16% <i className="pi pi-arrow-up" style={{ fontSize: '14px' }}></i></span></div>
                           </div>
                           <div>
                              <div className="bg-[#424856] rounded-full p-[11px]">
                                 <Image src={"/assets/images/customers_icon.svg"} width={20} height={20}
                                    className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* New Consumers */}
                     <div className="p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                        <div className="flex justify-between">
                           <div className="">
                              <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">New Consumers</div>
                              <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">45 <span className="text-[#FF3419FF] text-[16px] xl:text-[1.111vw] font-bold">6% <i className="pi pi-arrow-down" style={{ fontSize: '14px' }}></i></span></div>
                           </div>
                           <div>
                              <div className="bg-[#424856] rounded-full p-[11px]">
                                 <Image src={"/assets/images/new_customers.svg"} width={20} height={20}
                                    className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Total properties */}
                     <div className="p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                        <div className="flex justify-between">
                           <div className="">
                              <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Properties</div>
                              <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">3,045 <span className="text-[#1DD75BFF] text-[16px] xl:text-[1.111vw] font-bold">16% <i className="pi pi-arrow-up" style={{ fontSize: '14px' }}></i></span></div>
                           </div>
                           <div>
                              <div className="bg-[#424856] rounded-full p-[11px]">
                                 <Image src={"/assets/images/home_icon_white.svg"} width={20} height={20}
                                    className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Total meters */}
                     <div className="p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                        <div className="flex justify-between">
                           <div className="">
                              <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Meters</div>
                              <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">103,045 <span className="text-[#1DD75BFF] text-[16px] xl:text-[1.111vw] font-bold">16% <i className="pi pi-arrow-up" style={{ fontSize: '14px' }}></i></span></div>
                           </div>
                           <div>
                              <div className="bg-[#424856] rounded-full p-[11px]">
                                 <Image src={"/assets/images/meter_white_icon.svg"} width={20} height={20}
                                    className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>



                  </div>
               </div>
               <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex flex-wrap gap-[10px] xl:gap-[0.694vw] items-center">
                     <h2 className="text-[#171A1FFF] text-[32px] xl:text-[1.667vw] font-bold ">Utilities:</h2>
                     <div className="place_dropdown relative">
                        <Dropdown
                           value={selectedServices}
                           onChange={(e) => setSelectedServices(e.value)}
                           options={Services}
                           optionLabel="name"
                           placeholder="Select"
                           className="w-full xl:w-[11.972vw]"
                        />
                        <div className="absolute top-2 left-2">
                           {selectedServices.name === 'Water' ?
                              <Image src={"/assets/images/black_drop_icon.svg"} width={20} height={20}
                                 className="xl:w-[1.389vw] mt-1 xl:h-[1.389vw]" alt="" />
                              : null}

                           {selectedServices.name === 'Electricity' ?
                              <Image src={"/assets/images/lightning_icon.svg"} width={20} height={20}
                                 className="xl:w-[1.389vw] mt-1 xl:h-[1.389vw]" alt="" />
                              : null}

                           {selectedServices.name === 'Gas' ?
                              <Image src={"/assets/images/gas_icon_black.svg"} width={20} height={20}
                                 className="xl:w-[1.389vw] xl:h-[1.389vw]" alt="" />
                              : null}

                        </div>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-[24px] xl:gap-[1.667vw] items-center">
                     <div className="flex items-center ">
                        <div onClick={() => setActiveDate(1)} className={`${activeDate === 1 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           Today
                        </div>
                        {activeDate === 1 || activeDate === 2 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(2)} className={`${activeDate === 2 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           Yesterday
                        </div>
                        {activeDate === 2 || activeDate === 3 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(3)} className={`${activeDate === 3 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           7D
                        </div>
                        {activeDate === 3 || activeDate === 4 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(4)} className={`${activeDate === 4 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           30D
                        </div>
                        {activeDate === 4 || activeDate === 5 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(5)} className={`${activeDate === 5 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           3M
                        </div>
                        {activeDate === 5 || activeDate === 6 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(6)} className={`${activeDate === 6 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           6M
                        </div>
                        {activeDate === 6 || activeDate === 7 ? null : <div className="h-[16px] w-[2px] bg-[#bdc1ca]"></div>}
                        <div onClick={() => setActiveDate(7)} className={`${activeDate === 7 ? 'text-[#fff] bg-[#EC3237FF]' : 'text-[#EC3237FF]'} rounded-[3px] cursor-pointer px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.625vw] text-[14px] xl:text-[0.972vw] font-normal`}>
                           12M
                        </div>

                     </div>
                     <div className="customCalendar">
                        <Calendar
                           value={date}
                           onChange={(e) => setDate(e.value)}
                           showIcon
                           placeholder="Custom"
                           className="placeholder:text-[#171A1FFF] w-full xl:w-[10.625vw]"
                        />
                     </div>

                  </div>
               </div>
               {selectedServices.name === 'Water' ? <Water/> : null}
               {selectedServices.name === 'Electricity' ? <Electricity/> : null}
               {selectedServices.name === 'Gas' ? <Gas/> : null}
            </div>
         </Layout>
      </>
   );
}