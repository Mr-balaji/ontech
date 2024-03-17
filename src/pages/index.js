import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import Top from '../components/layout/toplogin';
import Bottom from '../components/layout/bottom';
import { Catamaran } from '@next/font/google';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});
import {
  isAndroid,
  isIOS
} from "react-device-detect";
export default function index() {
  const [resetPassword, setResetPassword] = useState(false);
  console.log(resetPassword);
  const [otp, setOtp] = useState(false);
  const [forgotpassword, setForgotpassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');


  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Sign In');
  const [validationMsg, setValidationMsg] = useState({userName:false,password:false});


  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if(userName === ""){
        setValidationMsg({userName:true})
      }
      if (userName === '' && password === '') {
        setValidationMsg({userName:true,password:true})
      }
      if (userName === '' || password === '') {
        toast.error('Please fill all fields..');
        setValidationMsg({userName:true,password:true})
      } else {
        const requestedData = {
          email: userName,
          password: password,
          companyId: 1,
        };
        setButtonText('please wait...');
        const response = await axios.post('/api/auth', requestedData);
        console.log('response', response.data);
        if (response.data.isUserValid) {
          router.push('/dashboard');
          toast.success('Login successfully');
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.accessToken)
          );
          localStorage.setItem(
            'loggeduserId',
            JSON.stringify(response.data.userId)
          );
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.accessToken)
          );
          localStorage.setItem('name', JSON.stringify(response.data.firstName));
          localStorage.setItem('email', JSON.stringify(response.data.emailId));
        } else {
          router.push('/');
          toast.error(response.data.message);
          setButtonText('Sign In');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again later.');
      setButtonText('Sign In');
    }
  };

  const handlepassToApp= () =>{
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.tetraz.capsigo";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com/app/capsigo/id1547746310";
    } else{
      window.location.href =
        "https://capsigo.com";
    }
  }
  return (
    <>
      <Head>
        <title>OnTech</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <ToastContainer />
      <Top />
      <main className={myCatamaran.className}>
        <div className='login-wrap-bg min-h-screen'>
          {
            forgotpassword === true ? (
              // Forgot passoword page start
              <div className='flex w-full  login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]'>
                <div className='bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg xl:m-[0px] m-[40px]'>
                  <div
                    className=' w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] '
                    data-aos='fade-right'
                    data-aos-duration='800'
                  >
                    <form autoComplete='off'>
                      <div className='flex '>
                        <h2 className='text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold'>
                          Forgot Password?{' '}
                        </h2>
                      </div>
                      <div className='mb-10 xl:mb-[2.083vw]'>
                        <div className='text-[#171A1F] text-[20px] xl:text-[1.042vw]  font-bold'>
                          Enter your Email or Mobile
                        </div>
                      </div>
                      <div className='xl:space-y-[1.936vw] space-y-[25px]'>
                        <div className='relative  mb-2 xl:mb-[0.781vw]'>
                          <span className='p-float-label'>
                            <InputText
                              id='username'
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className='placeholder:text-[#BDC1CA] placeholder:text-sm w-full'
                            />
                            <p>{userName === '' ? "please Enter User Name" : null}</p>
                            <label htmlFor='username' className='w-full'>
                              Enter Email/Mobile
                            </label>
                          </span>
                        </div>
                      </div>

                      <div className='flex items-center justify-center my-5 xl:my-[1.563vw]'>
                        <div>
                          <div className='text-[#171A1F] font-normal xl:text-[0.972vw] text-[15px]'>
                            We will send OTP to your registered email.
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-center w-full my-5 xl:my-[2.083vw]'>
                        <div
                          onClick={() => setOtp(true)}
                          className='custmBtn red radiusFull w-full text-center flex items-center justify-center cursor-pointer'
                        >
                          <Image
                            src={'/assets/images/send_message_icon.svg'}
                            width={35}
                            height={35}
                            className='inline-block w-5 h-5 xl:w-[1.142vw] xl:h-[1.142vw] mr-2'
                            alt=''
                          />
                          SEND OTP
                        </div>
                      </div>

                      <div className='flex items-center justify-center mb-0 xl:mb-[0.083vw] text-sm text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]'>
                        Remember Password?
                        <Link
                          href='/'
                          onClick={()=>{setResetPassword(false),setForgotpassword(false)}}
                          className='ml-2 text-md font-semibold text_red '
                        >
                          Sign in
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : // Forgot passoword page end
            // reset password page start
            resetPassword === true ? (
              <div className='flex w-full login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]'>
                <div className='bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg xl:m-[0px] m-[40px]'>
                  <div
                    className=' w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] '
                    data-aos='fade-right'
                    data-aos-duration='800'
                  >
                    <form autoComplete='off'>
                      <div className='flex '>
                        <h2 className='text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold'>
                          Reset Your Password{' '}
                        </h2>
                      </div>
                      <div className='mb-10 xl:mb-[2.083vw]'>
                        <div className='text-[#171A1F] text-[20px] xl:text-[1.042vw]  font-bold'>
                          Setup new password
                        </div>
                      </div>
                      <div className='xl:space-y-[1.936vw] space-y-[25px]'>
                        <div className='relative mb-2 xl:mb-[0.781vw] password-custom'>
                          <span className='p-float-label'>
                            <Password
                              inputId='password'
                              value={password1}
                              onChange={(e) => setPassword1(e.target.value)}
                              toggleMask
                              className='placeholder:text-[#BDC1CA] placeholder:text-sm w-full'
                            />
                             
                            <label htmlFor='password'>
                              Enter Your Password
                            </label>
                            
                          </span>
                        </div>
                        <div className='relative mb-2 xl:mb-[0.781vw] password-custom'>
                          <span className='p-float-label'>
                            <Password
                              inputId='password'
                              value={password2}
                              onChange={(e) => setPassword2(e.target.value)}
                              toggleMask
                              className='placeholder:text-[#BDC1CA] placeholder:text-sm w-full'
                            />
                            <label htmlFor='password'>
                              Confirm new password
                            </label>
                          </span>
                        </div>
                      </div>

                      <div className='flex justify-center w-full mt-5 xl:mt-[2.083vw]'>
                        <div
                         onClick={() => {
                          password1 !== password2 ?
                          toast.error("Password mismatch") :
                          (
                              setOtp(false),
                              setResetPassword(false),
                              setForgotpassword(false)
                          );
                      }}
                          className='custmBtn red radiusFull w-full text-center flex items-center justify-center cursor-pointer'
                        >
                          <Image
                            src={'/assets/images/lock_password_icon.svg'}
                            width={35}
                            height={35}
                            // onClick={hanleResentPassword}
                            className='inline-block w-5 h-5 xl:w-[1.192vw] xl:h-[1.192vw] mr-1'
                            alt=''
                          />
                          SET NEW PASSWORD
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              // reset password page end
              // login page start
              <div className='flex w-full  login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]'>
                <div className='bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg pb-3 xl:m-[0px] m-[40px]'>
                  <div
                    className=' w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] '
                    data-aos='fade-right'
                    data-aos-duration='800'
                  >
                    <form autoComplete='off'>
                      <div className='flex '>
                        <h2 className='text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold'>
                          Sign in to your account{' '}
                          <span className='text-[18px]'>🚀</span>
                        </h2>
                      </div>
                      <div className='mb-10 xl:mb-[2.083vw]'>
                        <div className='text-[#9095A1] text-sm lg:text-lg xl:text-[1.250vw] font-medium'>
                          Sign in with your email or mobile
                        </div>
                      </div>
                      <div className='xl:space-y-[1.936vw] space-y-[25px]'>
                        <div className='relative  mb-2 xl:mb-[0.781vw]'>
                          <span className='p-float-label'>
                            <InputText
                              id='username'
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className='placeholder:text-[#BDC1CA] placeholder:text-sm w-full'
                            />
                            <label htmlFor='username' className='w-full'>
                              Enter Email/Mobile
                            </label>
                          </span>
                          <p className='text-[red] pt-2'>{validationMsg.userName  ? "Please Enter User Name" : null}</p>

                        </div>

                        <div className='relative mb-2 xl:mb-[0.781vw] password-custom'>
                          <span className='p-float-label'>
                            <Password
                              inputId='password'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              toggleMask
                              className='placeholder:text-[#BDC1CA] placeholder:text-sm w-full'
                            />
                            <label htmlFor='password'>
                              Enter Your Password
                            </label>
                          </span>
                          <p className='text-[red] pt-2'>{validationMsg.password  ? "Please Enter User Name" : null}</p>

                        </div>
                      </div>

                      <div className='flex items-center justify-end my-5 xl:my-[1.563vw]'>
                        <div>
                          <p className='text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]'>
                            Forgot password?{' '}
                            <Link
                              href=''
                              onClick={() => setForgotpassword(true)}
                              className='text_red font-semibold hover:underline'
                            >
                              Click Here
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className='flex justify-center w-full my-5 xl:my-[2.083vw]'>
                        {/* <Link href={'/dashboard'} className="custmBtn red radiusFull w-full text-center flex justify-center">
                
                    Sign In</Link> */}

                        <button
                          onClick={handleSubmit}
                          className='custmBtn red radiusFull w-full text-center flex justify-center '
                        >
                          {buttonText}
                        </button>
                      </div>

                      <div className='flex items-center justify-center mb-0 xl:mb-[0.083vw] text-sm text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]'>
                        Not Registered Yet?
                        <Link
                          href='/createaccount'
                          className='ml-2 text-md font-semibold text_red '
                        >
                          Sign up
                        </Link>
                      </div>
                      <div className='flex justify-center my-2 text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold'>
                        <h6>Get our mobile application</h6>
                      </div>
                      <div className='flex justify-center gap-3'>
                        <Link href={'/'}>
                          <Image
                          onClick={handlepassToApp}
                            src={'/assets/images/play_store.png'}
                            width={'170'}
                            height={'55'}
                            className='xl:h-auto h-auto xl:w-auto'
                            alt='play_store'
                          />
                        </Link>
                        <Link href={'/'}>
                          <Image
                           onClick={handlepassToApp}
                            src={'/assets/images/app_store.png'}
                            width={'170'}
                            height={'58'}
                            className='xl:h-auto h-auto xl:w-auto'
                            alt='play_store'
                          />
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
            // login page end
          }
        </div>
        <Bottom />

        <div className='otp-popup'>
          <Dialog
            visible={otp}
            breakpoints={{ '960px': '80vw', '640px': '90vw' }}
            style={{ width: '40vw' }}
            onHide={() => setOtp(false)}
            draggable={false}
            resizable={false}
            className='xl:w-[40vw] w-[200px] otp-popup'
          >
            <div className='flex justify-center text-[#171A1F] text-[20px] xl:text-[2.222vw] font-normal leading-10'>
              Almost done
            </div>
            <div className='mt-3 flex justify-center text-[#323743] text-[14px] xl:text-[0.970vw] font-normal'>
              Please type the code we sent you in your email and mobile
            </div>

            <div className='xl:mt-[2.216vw] mt-[20px]'>
              <div className='flex justify-center items-center otp_input gap-[20px]'>
                <InputText className='w-[48px]' />
                <InputText className='w-[48px]' />
                <InputText className='w-[48px]' />
                <InputText className='w-[48px]' />
                <InputText className='w-[48px]' />
                <InputText className='w-[48px]' />
              </div>

              <div className='xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw]'>
                <Link
                  onClick={() => {
                    setResetPassword(true),
                      setOtp(false),
                      setForgotpassword(false);
                  }}
                  href=''
                  className='custmBtn red radiusFull w-full text-center flex justify-center'
                >
                  VERIFY
                </Link>
              </div>
              <div className='xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw] text-[#323743] text-[14px] xl:text-[0.970vw]  text-center'>
                01:00
              </div>

              <div className='flex justify-center mt-2 xl:mt-[2.083vw] text-[0.970vw]'>
                Can't access to your email?
                <Link href='' className='font-semibold text-[#323743] ml-1'>
                  Contact support
                </Link>
              </div>
            </div>
          </Dialog>
        </div>
      </main>
    </>
  );
}
