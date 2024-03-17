import { Menu, Transition } from '@headlessui/react';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment, useState, useEffect } from 'react';
import EditProfilePopup from '../popups/editprofile';
import { useRouter } from 'next/router';

export default function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const [activeNumber, setActiveNumber] = useState(0);
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('loggeduserId');
    localStorage.removeItem('icons');
    localStorage.removeItem('id');
    localStorage.removeItem('propertyname');
    router.push('/');
  };

  const [Name, Setname] = useState('');
  const [Email, SetEmail] = useState('');

  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('name'));
    if (name) {
      Setname(name);
    }
    const email = JSON.parse(localStorage.getItem('email'));
    if (email) {
      SetEmail(email);
    }
  }, []);
  return (
    <div>
      <span className='flex flex-wrap flex-grow'>
        {/* <div className="mr-3"> */}

        {/* </div> */}
        <Menu as='div' className='relative inline-block z-10'>
          <div className='flex items-center px-2'>
            <Menu.Button className='flex items-center'>
              {/* <Avatar  src={profilePic} /> */}
              <div className='relative py-2'>
                <div className='flex items-center space-x-3'>
                  <div>
                    <Image
                      src={'/assets/images/profile.png'}
                      width={35}
                      height={35}
                      className='rounded-full w-10 h-10'
                      alt=''
                    />
                  </div>
                  <div className='text-start hidden xl:inline-block'>
                    <div className='text-[#171A1F] font-normal text-[14px] xl:text-[0.800vw]'>
                      Welcome 👋{' '}
                    </div>
                    <div
                      className='text-[#171A1F] text-[16px] 
                                    xl:text-[1.25vw] font-normal'
                    >
                      {Name}
                    </div>
                  </div>
                </div>
              </div>
              <span className=' pl-2 xl:pl-4'>
                <i className='pi pi-angle-down text-[#171A1F]  text-[15px]'></i>
              </span>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-50 w-full min-w-[250px]  origin-top-right bg-white rounded-[5px] xl:rounded-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] divide-y divide-solid divide-[#D8D8D8]'>
              <div className='px-4 pt-5 pb-3 xl:px-[0.833vw] xl:py-[0.833vw]'>
                <div className='flex items-center mb-4 xl:mb-[0.417vw] space-x-3 my-2 border-b pb-2'>
                  <div className='flex gap-3 text-start'>
                    <div>
                      <Image
                        src={'/assets/images/profile.png'}
                        width={35}
                        height={35}
                        className='rounded-full w-10 h-10'
                        alt=''
                      />
                    </div>
                    <div>
                      <div className='text-md xl:text-[0.938vw] text-[#293141] font-semibold '>
                        {Name}
                      </div>
                      <div className='text-[#000000] opacity-[0.6] text-sm xl:text-[0.729vw] leading-none'>
                        {Email}{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3 py-1 xl:py-[0.521vw]'>
                  <Link
                    href={''}
                    onClick={() => {
                      setEditProfile(true), setActiveNumber(0);
                    }}
                    className='text-[#565D6D] text-[14px] 
                                        xl:text-[0.972vw] font-normal '
                  >
                    <i className='mr-3 pi pi-user text-[#565D6D] text-[14px] xl:text-[0.933vw]'></i>{' '}
                    Edit profile
                  </Link>
                </div>
                <div className='flex gap-3 items-center text-[#344054] font-normal text-[14px] py-1 xl:py-[0.521vw]'>
                  <Link
                    onClick={() => {
                      setEditProfile(true), setActiveNumber(1);
                    }}
                    href={''}
                    className='text-[#344054] text-[14px] 
                                        xl:text-[0.972vw] font-normal '
                  >
                    <i className='mr-3 pi pi-lock text-[#565D6D]  text-[14px] xl:text-[0.933vw]'></i>{' '}
                    Change Password
                  </Link>
                </div>
                <div className='flex gap-3 items-center text-[#344054] font-normal text-[14px] py-1 xl:py-[0.521vw]'>
                  <Link
                    href={''}
                    className='text-[#344054] text-[14px]
                                        xl:text-[0.972vw] font-normal '
                  >
                    <i className='mr-3 pi pi-question text-[#565D6D]  text-[14px] xl:text-[0.933vw]'></i>{' '}
                    Help / Contact Us
                  </Link>
                </div>
              </div>

              <div className='px-4 py-3 '>
                <button
                  onClick={() => handleLogOut()}
                  className='text-[#344054] text-[14px] xl:text-[0.972vw] font-normal '
                >
                  <i className='mr-3 pi pi-sign-out text-[#565D6D] text-[0.933vw]'></i>
                  Log out
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </span>
      <EditProfilePopup
        visible={editProfile}
        onHides={() => setEditProfile(false)}
        setEditProfile={setEditProfile}
        activeNumber={activeNumber}
      />
    </div>
  );
}
