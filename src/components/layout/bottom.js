import Link from 'next/link';
import Image from 'next/image';

import { Catamaran } from '@next/font/google';
const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})



export default function Bottom() {




  return (
    <>
      <div className={myCatamaran.className}>
        <div className='footer bg-[#fff] text-[#171A1F] pb-[20px] xl:py-[1.389vw] w-full  z-40  bottom-0 
        '>
        
          <div className='px-[20px] lg:px-[3.333vw] w-full'>
            <div className="w-full grow overflow-hidden">
              <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                <div className='col-span-6 lg:col-span-6 xl:col-span-7 text-center lg:text-start'>
                  
                  <div className='flex gap-2 xl:justify-start justify-center text-[#171A1F] my-2'>
                  <h3 className='text-[#171A1F] text-xs xl:text-[0.833vw]'>© 2023 Ontec Home PTY</h3>
                    <Link href={'/'} className='text-xs xl:text-[0.833vw]'>Privacy Policy</Link>
                    <Link href={'/'} className='px-4 text-xs xl:text-[0.833vw]'>Terms</Link>
                   
                  </div>
                </div>
                <div className='col-span-6 lg:col-span-6 xl:col-span-5'>
                  <div className='lg:pt-0 lg:pl-6 text-center lg:text-start text-[#323743]'>
                    <div className='flex flex-wrap flex-1 flex-grow items-center justify-center lg:justify-end mt-[14px] xl:mt-[0.729vw] gap-6 xl:gap-[1.111vw]'>
                      <Link href={'/'} className=''><i className="pi pi-facebook"></i> </Link>

                      <Link href={'/'} className=''><i className="pi pi-twitter"></i></Link>
                      <Link href={'/'} className=''><i className="pi pi-instagram"></i></Link>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
