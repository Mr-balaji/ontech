import React, { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import Profile from "./profile";
import { Catamaran } from '@next/font/google';
import { useRouter } from 'next/router';

const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function Top({ ...pageProps }) {
  const menu = useRef(null);
  const router = useRouter()
  return (
    <div className='{myCatamaran.className}  w-full '>
      <div className='bg-white dark:bg-[#4D5A67] xl:py-[1vw] py-[15px] relative' data-aos="fade-down" data-aos-duration="800">
        <div className='px-[15px] xl:px-[2.083vw] menu-wrap'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-3 xl:col-span-4'>
              <div className='flex items-center space-x-[30px] xl:space-x-[3.385vw]'>
                <div className='w-full lg:w-auto' id='logo'>
                  <Link href={"/"}><Image src={"/assets/images/logo.png"} width={"100"} height={"40"} className='max-w-[40px] md:max-w-[40px] xl:max-w-[6.944vw] light' alt="Logo" /></Link>
                </div>
              </div>
            </div>
            <div className='col-span-9 xl:col-span-8'>
              <div className='flex items-center justify-end xl:space-x-[2.083vw]'>
                
                <div>
                  <div className='flex items-center space-x-[0.521vw]'>
                    <div className='flex items-center space-x-[10px] xl:space-x-[1.354vw]'>
                     
                      <div className='relative'>
                        <Link href={""} className="">
<Image src={"/assets/images/question_mark_icon.svg"} width={"20"} height={"20"}  alt="help" />

                   </Link>
                        
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