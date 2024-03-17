import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Catamaran } from '@next/font/google';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import EditProfilePopup from '../popups/editprofile';

const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function Left({ ...pageProps }) {
  const [activate, setActivate] = useState("");
  const toggleActive = () => {
    setActivate(activate === "active" ? "" : "active");
  };
  //assigning location variable
  const location = useRouter();
  //destructuring pathname from location
  const { pathname } = location;
  const [editProfile, setEditProfile] = useState(false);
  const [activeNumber, setActiveNumber] = useState(0);

  return (
    <div className={myCatamaran.className}>
      <div className="visible lg:hidden fixed right-[150px] z-50 top-[10px]">
        <Button icon="pi pi-bars" onClick={toggleActive} style={{ color: '#EC3237', background: '#ffffff00', border: '1', borderColor: '#EC3237', width: '38px', padding: '6px 0', borderRadius: '4px' }}></Button>

      </div>
      <div className='fixed top-0 left-0 z-30  xl:w-[18.403vw] 2xl:w-[18.403vw] max-md:h-full h-full' style={{ maxHeight: "100%", height: "calc(100%)" }} >
        <div className='bg-[#fff] py-[0.500vw] shadow1 lg:sticky fixed -left-72 lg:left-0 overflow-y-auto h-full lg:overflow-hidden lg:h-full z-10 ' data-aos="fade-right" data-aos-duration="900" id={activate}>
          <div className='px-[15px] xl:px-[2.083vw] '>

            <Image src={"/assets/images/dashboard-logo.png"} width={170} height={70}
              className="xl:w-[10.417vw] xl:h-[4.861vw] w-[150px] h-[55px]" alt="" />
          </div>

          <div className='xl:p-[1.389vw] p-[10px]'>
            <ul className="left-menu h-full  border-b border-[#F3F4F6]">
              <Link href='/dashboard'>
                <li className={pathname === "/dashboard" ? "active" : ""}>
                  <i className='pi pi-th-large mr-2 relative  '></i>Dashboard
                </li>
              </Link>
              <Link href='/property'>
                <li className={pathname === "/property" ? "active" : ""}>
                  <i className='pi pi-home mr-2 relative'></i>Properties
                </li>
              </Link>
              <Link href='/consumptions'>
                <li className={pathname === '/consumptions' ? 'active' : ''}>
                  <i className='pi pi-chart-bar mr-2 relative'></i>Consumptions
                </li>
              </Link>
            </ul>
            <div>
              <h6 className='xl:mt-[1.736vw] mt-[18px] font-[700] text-[#6F7787] text-[14px]'>Accounts</h6>
            </div>
            <ul className="left-menu h-full  border-b border-[#F3F4F6]">

              <Link href='/checkbal'>
                <li className={pathname === '/checkbal' ? 'active' : ''}>
                  <i className='pi pi-dollar mr-2 relative'></i>Check Balance
                </li>
              </Link>
              <Link href='/transactions' >
                <li className={pathname === "/transactions" ? "active" : ""}>
                  <i className='pi pi-sync mr-2 relative'></i>Transactions
                </li>
              </Link>
              <Link href='' onClick={() => { setEditProfile(true),setActiveNumber(0) }}>
                <li className=" ">
                  <i className='pi pi-user mr-2 relative'></i>My Profile
                </li>
              </Link>
              <Link onClick={() => { setEditProfile(true), setActiveNumber(3) }} href=''>
                <li className=" ">
                  <i className='pi pi-cog mr-2 relative'></i>Settings
                </li>
              </Link>
              <Link href='/'>
                <li className="/">
                  <i className='pi pi-sign-out mr-2 relative'></i>Sign out
                </li>
              </Link>
            </ul>

          </div>
        </div>
      </div>

      <EditProfilePopup
        visible={editProfile}
        onHides={() => setEditProfile(false)}
        setEditProfile={setEditProfile}
        activeNumber={activeNumber}
      />
    </div>
  )

}