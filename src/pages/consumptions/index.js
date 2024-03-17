import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import Bottom from "@/components/layout/bottom";
import RechargePopup from "@/components/popups/recharge";
import Linecharts from "@/components/charts/linechart";
import GaugeChart from "@/components/charts/gaugechart";


export default function index() {
   const [activeTab, setActiveTab] = useState(2);
   const [rechargePopup, setRechargePopup] = useState(false);
   const [selectedProperty, setSelectedProperty] = useState(null);
   const Property = [
      { name: 'Sandtone Home', code: 'SH1' },
      { name: 'Sandtone Home 1', code: 'SH2' },
      { name: 'Sandtone Home 2', code: 'SH3' },
   ];

   const [selectedServices, setSelectedServices] = useState({ name: 'Water', code: 'SH1' });
   const Services = [
      { name: 'Water', code: 'SH1' },
      { name: 'Electricity', code: 'SH2' },
      { name: 'Gas', code: 'SH3' },
   ];

   const LineData = {
      label:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      value:[2, 1, 4, 3, 2, 4.5, 4]
  }
   return (
      <>
         <Layout pageTitle="Consumptions" >
            <div className="xl:px-[1.042vw] px-2">
               <div className="flex flex-wrap justify-between items-center">
                  <h2 className="text-[#171A1F] text-[32px] xl:text-[1.667vw] font-bold ">Consumption Dashboard</h2>

                  <div className="flex flex-wrap gap-3 items-center">
                     <div className="place_dropdown relative">
                        <Dropdown value={selectedProperty} onChange={(e) => setSelectedProperty(e.value)} options={Property} optionLabel="name"
                           placeholder="Select a Property" className="w-full md:w-14rem xl:w-[15.361vw]" />
                        <div className="absolute top-2 left-2">
                           <Image src={"/assets/images/home_icon.svg"} width={24} height={24}
                              className="xl:w-[1.567vw] xl:h-[1.567vw]" alt="" />
                        </div>
                     </div>

                     <div className="place_dropdown relative">
                        <Dropdown
                           value={selectedServices}
                           onChange={(e) => setSelectedServices(e.value)}
                           options={Services}
                           optionLabel="name"
                           placeholder="Select"
                           className="w-full md:w-14rem xl:w-[15.361vw]"
                        />
                        <div className="absolute top-2 left-2">
                        {selectedServices.name === 'Water' ? 
                           <Image src={"/assets/images/black_drop_icon.svg"} width={24} height={24}
                              className="xl:w-[1.567vw] xl:h-[1.567vw]" alt="" />
                        : null}

                        {selectedServices.name === 'Electricity' ?
                           <Image src={"/assets/images/lightning_icon.svg"} width={24} height={24}
                              className="xl:w-[1.567vw] xl:h-[1.567vw]" alt="" />
                        :null}

                        {selectedServices.name === 'Gas' ?
                           <Image src={"/assets/images/gas_icon_black.svg"} width={24} height={24}
                              className="xl:w-[1.567vw] xl:h-[1.567vw]" alt="" />
                        :null}

                        </div>
                     </div>

                     <div className="xl:order-2 order-1 px-[32px] xl:px-[1.667vw] py-[8px] red radiusFull text-center flex justify-center ">
                        <Link
                           href=""
                        >
                           <i className="pi pi-check xl:text-[0.881vw] text-[15px] mr-2"></i>{" "}
                           VIEW
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="xl:mt-[1.563vw] mt-5">
                  <div className="bg-[#FFFFFF] rounded-lg border-b border-b-[#F3F4F6] px-[24px] xl:px-[1.667vw] py-[15px] xl:py-[0.781vw] pb-[32px] xl:pb-[1.667vw]">
                     <div className="text-[#323743] text-[24px] xl:text-[1.667vw] font-bold leading-7 mb-[9px]">Overview</div>
                     <div className="grid grid-cols-12 gap-[31px] xl:gap-[1.615vw]">
                        {/* Water  */}
                        {selectedServices.name === 'Water' ?
                           <div className="xl:col-span-4 col-span-12 bg-[#1A99EE12] rounded-[16px] xl:rounded-[1.111vw] p-2 w-full relative">
                              <Image src={"/assets/images/drop_icon_big.svg"}
                                 width={34}
                                 height={43}
                                 className="absolute top-6 left-10 w-[34px] xl:w-[1.771vw] h-[43px] xl:h-[2.240vw]" alt="" />
                              <div className="h-[190px]">
                                 <GaugeChart
                                    color={'#71B2FF'}
                                    color2={'#71B2FF40'}
                                    data={[{ value: 75 }
                                    ]}
                                 />
                              </div>
                              <div className="text-center text-[#000] text-[20px] xl:text-[1.042vw] font-bold leading-6 mb-[22px] xl:mb-[1.146vw]">108 Liter / <span className="font-normal">120 Liter</span></div>
                              <div className="px-[15px] xl:px-[0.801vw]">
                                 <div className="bg-[#060D1E] flex items-center justify-between rounded-full p-[2px] ">
                                    <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Daily</div>
                                    <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Weekly</div>
                                    <div onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Monthly</div>
                                    <div onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Yearly</div>
                                 </div>
                              </div>
                           </div>
                           : null
                        }

                        {/* Electricity */}
                        {selectedServices.name === 'Electricity' ?
                           <div className="xl:col-span-4 col-span-12 bg-[#FFCA4F12] rounded-[16px] xl:rounded-[1.111vw] p-2 w-full relative">
                              <Image src={"/assets/images/electricity_icon.svg"}
                                 width={34}
                                 height={43}
                                 className="absolute top-6 left-10 w-[34px] xl:w-[1.771vw] h-[43px] xl:h-[2.240vw]" alt="" />
                              <div className="h-[190px]">
                                 <GaugeChart
                                    color={'#FFCA4F'}
                                    color2={'#F5C74740'}
                                    data={[{ value: 72 }
                                    ]}
                                 />
                              </div>
                              <div className="text-center text-[#000] text-[20px] xl:text-[1.042vw] font-bold leading-6 mb-[22px] xl:mb-[1.146vw]">17kWh / <span className="font-normal">25kWh</span></div>
                              <div className="px-[15px] xl:px-[0.801vw]">
                                 <div className="bg-[#060D1E] flex items-center justify-around rounded-full p-[2px] ">
                                    <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Daily</div>
                                    <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Weekly</div>
                                    <div onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Monthly</div>
                                    <div onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Yearly</div>
                                 </div>
                              </div>
                           </div>
                           : null
                        }

                        {/* Gas */}
                        {selectedServices.name === 'Gas' ?
                           <div className="xl:col-span-4 col-span-12 bg-[#4CE77F12] rounded-[16px] xl:rounded-[1.111vw] p-2 w-full relative">
                              <Image src={"/assets/images/water_icon.svg"}
                                 width={34}
                                 height={43}
                                 className="absolute top-6 left-10 w-[34px] xl:w-[1.771vw] h-[43px] xl:h-[2.240vw]" alt="" />
                              <div className="h-[190px]">
                                 <GaugeChart
                                    color={'#4CE77F'}
                                    color2={'#4CE77F40'}
                                    data={[{ value: 72 }
                                    ]}
                                 />
                              </div>
                              <div className="text-center text-[#000] text-[20px] xl:text-[1.042vw] font-bold leading-6 mb-[22px] xl:mb-[1.146vw]">0.205Cube ft / <span className="font-normal">0.5Cube ft</span></div>
                              <div className="px-[15px] xl:px-[0.801vw]">
                                 <div className="bg-[#060D1E] flex items-center justify-around rounded-full p-[2px] ">
                                    <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Daily</div>
                                    <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Weekly</div>
                                    <div onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Monthly</div>
                                    <div onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? 'text-[#060D1E] bg-[#FFFFFF]' : 'text-[#FFFFFF] '} text-[14px] xl:text-[0.972vw] font-normal leading-5 py-[7px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Yearly</div>
                                 </div>
                              </div>
                           </div>
                           : null
                        }

                        <div className="xl:col-span-8 col-span-12">
                           <div className="bg-[#F3F4F6] rounded-[16px] xl:rounded-[1.111vw] w-full">
                              <Linecharts
                                 linecolor={['#424856']}
                                 xAxisLableColor='#171A1F'
                                 splitLineShow={false}
                                 data={LineData}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="xl:mt-[2.031vw] mt-[32px] mb-[67px] xl:mb-[3.490vw]">
                  <div className="grid grid-cols-12 gap-[5px] md:gap-[35px] xl:gap-[3.646vw]">
                     <div className="xl:col-span-2 col-span-12 text-[#323743] text-[24px] xl:text-[1.667vw] font-bold leading-7 px-[20px] md:px-[35px] xl:px-[2.083vw] py-[20px] xl:py-[1.042vw]">

                     {selectedServices.name === 'Water' ? <>Average <br /> Consumption</>  : null}
                     {selectedServices.name === 'Electricity' ? <>Current <br /> Consumption</>  : null}
                     {selectedServices.name === 'Gas' ? <>Average <br /> Consumption</>  : null}

                     </div>
                     <div className="xl:col-span-10 col-span-12">
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[20px] md:gap-[35px] xl:gap-[3.646vw]">
                           {/* daily  */}
                           <div className="p-[20px] xl:p-[1.042vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                              <div className="flex justify-between">
                                 <div className="">
                                    <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[4px]">Daily</div>

                                    {selectedServices.name === 'Water' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">110 Liter</div>
                                    : null }
                                    {selectedServices.name === 'Electricity' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">19 kWh</div>
                                    : null }
                                    {selectedServices.name === 'Gas' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">0.230 Cube ft</div>
                                    : null }

                                 </div>
                                 <div>
                                    <div className="bg-[#424856] rounded-full p-[11px]">
                                       <Image src={"/assets/images/hours_icon.svg"} width={20} height={20}
                                          className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Day Time  */}
                           <div className="p-[20px] xl:p-[1.042vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                              <div className="flex justify-between">
                                 <div className="">
                                    <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[4px]">Day Time</div>

                                    {selectedServices.name === 'Water' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">70 Liter</div>
                                    : null }
                                    {selectedServices.name === 'Electricity' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">9 kWh</div>
                                    : null }
                                    {selectedServices.name === 'Gas' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">0.180 Cube ft</div>
                                    : null }

                                 </div>
                                 <div>
                                    <div className="bg-[#424856] rounded-full p-[11px]">
                                       <Image src={"/assets/images/sun_icon.svg"} width={20} height={20}
                                          className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Night Time  */}
                           <div className="p-[20px] xl:p-[1.042vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                              <div className="flex justify-between">
                                 <div className="">
                                    <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[4px]">Night Time</div>

                                    {selectedServices.name === 'Water' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">40 Liter</div>
                                    : null }
                                    {selectedServices.name === 'Electricity' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">10 kWh</div>
                                    : null }
                                    {selectedServices.name === 'Gas' ?
                                    <div className="text-[#fff] text-[24px] xl:text-[1.667vw] font-semibold leading-6">0.050 Cube ft</div>
                                    : null }

                                 </div>
                                 <div>
                                    <div className="bg-[#424856] rounded-full p-[11px]">
                                       <Image src={"/assets/images/moon_icon.svg"} width={20} height={20}
                                          className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>

            </div>
            <RechargePopup
               visible={rechargePopup}
               onHides={() => setRechargePopup(false)}
            />
         </Layout>
      </>
   );
}