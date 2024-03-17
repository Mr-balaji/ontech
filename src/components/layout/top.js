import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Profile from "../layout/profile";
import { Catamaran } from '@next/font/google';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import Left from './left';
import { OverlayPanel } from 'primereact/overlaypanel';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})


export default function Top({ ...pageProps }) {
  const menu = useRef(null);
  const router = useRouter()
  const notificatio = useRef(null);
  const help = useRef(null);



  return (
    <div className={myCatamaran.className}>
      <Left />
      <div className='fixed w-full z-20'>
        <div className='bg-white py-[0.500vw] relative z-20 shadow1 ' data-aos="fade-down" data-aos-duration="800">
          <div className='px-[15px] xl:px-[2.083vw] menu-wrap'>
            <div className='grid grid-cols-12 items-center'>
              <div className='col-span-3 xl:col-span-4'>
              </div>
              <div className='col-span-9 xl:col-span-8'>
                <div className='flex items-center justify-end xl:space-x-[2.083vw]'>

                  <div>
                    <Link href='' onClick={(e) => notificatio.current.toggle(e)}>
                      <Image src={"/assets/images/notification_icon.svg"} width={24} height={24} className="xl:w-[1.667vw] h-[24px] w-[24px] xl:h-[1.667vw]" alt="" />
                    </Link>
                  </div>
                  <OverlayPanel ref={notificatio} className="notificatio_popup">
                    <div className={myCatamaran.className}>
                      <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                        <div className="flex items-center justify-between">
                          <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                        </div>
                        <SimpleBar className="pr-4" style={{ maxHeight: '200px', }}>
                          <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                            <div className="flex items-start py-2">
                              <Link href={'/notifications'} className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                              </Link>
                            </div>
                            <div className="flex items-start py-2">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start py-2">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                              </div>
                            </div>
                            <div className="flex items-start py-2">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                              </div>
                            </div>
                            <div className="flex items-start py-2">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-[#4FB155]"></div>
                              </div>
                            </div>
                            <div className="flex items-start py-2">
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                  <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                  <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SimpleBar>
                      </div>
                    </div>
                  </OverlayPanel>
                  <div>
                    <Link onClick={(e) => help.current.toggle(e)} href=''>
                      <Image src={"/assets/images/help_icon.svg"} width={24} height={24} className="xl:w-[1.667vw] h-[24px] w-[24px] xl:h-[1.667vw]" alt="" />
                    </Link>

                    {/* help  */}
                    <OverlayPanel ref={help} className="notificatio_popup" style={{ width: '450px' }}>
                      <div className={myCatamaran.className}>
                        <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                          <div className='flex justify-center mt-[48px] xl:mt-[2.5vw]'>
                            <Image src={"/assets/images/dashboard-logo.png"} width={248} height={96}
                              className="xl:w-[12.917vw] w-[248px] h-auto" alt="" />
                          </div>
                          <div className='text-[#171A1F] text-[14px] xl:text-[0.833vw] font-normal text-center px-[52px] xl:px-[2.708vw] mt-[23px] xl:mt-[1.198vw] pb-[40px] xl:pb-[2.083vw] border-b border-b-[#DEE1E6]'>
                            <div>Company master information can be displayed here</div>
                            <div>Company master information can be displayed here</div>
                            <div>Company master information can be displayed here</div>
                            <div>Company master information can be displayed here</div>
                          </div>
                          <div className='text-[#171A1F] text-[20px] xl:text-[1.042vw] font-normal  px-[52px] xl:px-[4.708vw] mt-[23px] xl:mt-[1.198vw] pb-[40px] xl:pb-[2.083vw] '>
                            <div>Help Line : <span className='font-bold'>021 345 6789</span></div>
                             <div>Email :  <span className='font-bold'>help@ontecenergy.com</span></div>
                          </div>
                        </div>
                      </div>
                    </OverlayPanel>
                  </div>
                  <div>
                    <div className='flex items-center space-x-[0.521vw]'>
                      <div className='flex items-center space-x-[10px] xl:space-x-[1.354vw]'>
                        <div>
                          <div x-data="{ open: false }" className="">
                            <div className="relative" x-data="{ open: false }">
                              <Profile />
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}