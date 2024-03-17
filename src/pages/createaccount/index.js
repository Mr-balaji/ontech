import Image from "next/image";
import Link from "next/link";
import React, { useState,useRef, useEffect } from "react";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import Top from "../../components/layout/toplogin";
import Bottom from "../../components/layout/bottom";
import { Catamaran } from '@next/font/google';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { InputMask } from "primereact/inputmask";
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import CompleteProfile from "@/components/popups/completeprofile";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
const myCatamaran = Catamaran({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})
export default function SignUp() {
   const [visible, setVisible] = useState(false);
   const [userId,setUserId] = useState("");
   const [token,setToken] = useState("");
   const [disabled,setDisable] = useState(false)
   const [seconds, setSeconds] = useState(60);
   const firstInputRef = useRef(null);
   const [resisterData,setResisterData] = useState({
    email:"",
    Password:"",
    mobile:""
   })
   const [profilePopup,setProfilePopup] = useState(false)
   const inputRefs = useRef([]);
   const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
    // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResisterData({
      ...resisterData,
      [name]: value,
    });
  };

  const handleNumberChange = (name,value) => {
  
    setResisterData({
      ...resisterData,
      [name]: value,
    });
  };

  const handleOtpInputChange = (index, value) => {
    // Limit input value length to 1
    const newValue = value.slice(0, 1);
  
    // Update the OTP value at the specified index
    const newOtpValues = [...otpValues];
    newOtpValues[index] = newValue;
    setOtpValues(newOtpValues);
  
    // Move focus to the next input box if available
    if (newValue && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  // Handle form submission
  const getOtpData = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        "countryCode": "91",
        "mobileNumber": resisterData.mobile,
        "email": resisterData.email,
        "companyId": 1
      };

      setDisable(true)

      const response = await axios.post("/api/register/getresisterotp", requestData);

      // Handle successful response if needed
      if(response){
      setVisible(true)
      setDisable(false)

      toast.success("Otp send successfully....")
      }
    } catch (error) {
      console.log("response",error);
      setVisible(false)

      // Check if the error response contains specific messages
      if (error.response && error.response.data) {
        // Show toast with the specific error message
        if(error.response.data.errors?.MobileNumber){
          toast.error(error.response.data.errors.MobileNumber[0]);
      setVisible(false)

        }
        if(error.response.data.errors?.Email){
          toast.error(error.response.data.errors.Email[0]);
      setVisible(false)

        }

      } else {
        // Show a generic error message
        toast.error('An error occurred');
      }
    }
  };

  // Handle OTP verificationtoast
  const handleSubmit = async() => {
    // Concatenate the OTP values into a single string
    const otpString = otpValues.join('');

    try {
      const requestData = {
        "countryCode": "91",
        "countryCodeId": 0,
        "mobileNumber": resisterData.mobile,
        "emailId": resisterData.email,
        "password": resisterData.Password,
        "companyId": 1,
        "otp": otpString,
        "otpType": ""
      };

      const response = await axios.post("/api/register/resisterapi", requestData);

      console.log("response",response);

      // Handle successful response if needed
      if(response){
      setVisible(true)
      toast.success("Otp Verify successfully....")
      setProfilePopup(true)
      setUserId(response.data.userId)
      setToken(response.data.accessToken)
      localStorage.setItem("token",response.data.accessToken)
      setVisible(false)
      }
    } catch (error) {
        toast.error('An error occurred');
        setOtpValues(['', '', '', '', '', '']);
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
      }
  };


 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const resendOtp = () =>{
    setSeconds(60)
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }



  return (
    <>
      <Head>
        <title>OnTech</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
   
      <Top/>
      <main className={myCatamaran.className}>
        <div className="login-wrap-bg min-h-screen">
      <ToastContainer />
       
         
            <div className="flex w-full  login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[30px]">
            <div className="bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg pb-3 xl:m-[0px] m-[40px]">

              <div className=" w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] " data-aos="fade-right" data-aos-duration="800">
                <form autoComplete="off">
                <div className="flex ">
                  <h2 className="text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold" onClick={()=>setVisible(true)} >Lets get started <span className="text-[18px]">🚀</span></h2> 
                </div>
                    <div className="mb-10 xl:mb-[2.083vw]">
                    <div className="text-[#9095A1] text-sm lg:text-lg xl:text-[1.250vw] font-medium">Create a new account</div>
                  </div>
                  <div className="xl:space-y-[1.936vw] space-y-[25px]">
                     <div className="relative  mb-2 xl:mb-[0.781vw]">
                    
                    <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope top-1"/>
                      <InputText  value={resisterData.email}
          onChange={handleInputChange} id="email" name="email"   className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"/>
                      <label htmlFor="email" className="w-full">Enter Email</label>
                  </span>
                  </div>

                
                  <div className="relative mb-2 xl:mb-[0.781vw]">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-mobile" />
                  <InputMask mask="9999999999" placeholder="(999) 999-9999"  id="mobile" value={resisterData.mobile}
          onChange={(e)=>handleNumberChange('mobile',e.value)} name="mobile"  className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"/>
                      <label htmlFor="mobile" className="w-full">Enter Mobile</label>
                   </span>
                  </div>
                 
                  <div className="relative mb-2 xl:mb-[0.781vw] password-custom">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-lock" />
                          <Password inputId="password" value={resisterData.Password}
          onChange={handleInputChange} name="Password"  toggleMask  className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"/>
                          <label htmlFor="password">Enter Your Password</label>
                      </span>
                  </div>
                  </div>

                

                  <div className="flex justify-center w-full my-5 xl:my-[2.083vw]">
                    {/* <Link href={'/dashboard'} className="custmBtn red radiusFull w-full text-center flex justify-center">
                  
                      Sign In</Link> */}

                      <Button disabled={disabled} onClick={(e) => getOtpData(e)} className="custmBtn red radiusFull w-full text-center flex justify-center " >                  
                        <i className="pi pi-user-plus mr-2 font-normal text-[15px]" /> {disabled ? "Please Wait..." : "SIGN UP"}
                     </Button>
                  </div>
                        <div className="my-2 xl:my-[2.083vw] xl:text-[0.970vw] text-[12px]">By continuing you agree to our <Link href='' className="font-semibold text-[#323743] mr-1">Terms & Conditions </Link>  and  <Link href='' className="font-semibold text-[#323743] ml-1">Privacy Policy</Link></div>
                  <div className="flex items-center justify-center mb-0 xl:mb-[0.083vw] text-sm text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]">
                  Already have an account? 
                    <Link href='/' className="ml-2 text-md font-semibold text_red">
                         Sign In
                    </Link>
                  </div>
                  <div className="flex justify-center my-2 text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold">
                    <h6>Get our mobile application</h6>
                  </div>
                  <div className="flex justify-center gap-3">
                  <Link href={"/"}><Image src={"/assets/images/play_store.png"} width={"170"} height={"55"} className='xl:h-auto h-auto xl:w-auto' alt="play_store" /></Link>
                  <Link href={"/"}><Image src={"/assets/images/app_store.png"} width={"170"} height={"58"} className='xl:h-auto h-auto xl:w-auto' alt="play_store" /></Link>
                  </div>

                </form>
              </div>
              </div>
            </div>
          
        </div>
        <Bottom/>
      <div className="otp-popup">
        <Dialog  visible={visible}  breakpoints={{'960px': '80vw', '640px': '90vw'}} style={{ width: '40vw' }} onHide={() => setVisible(false)} draggable={false} resizable={false}  className="xl:w-[40vw] w-[200px] otp-popup">
      <div className="flex justify-center text-[#171A1F] text-[20px] xl:text-[2.222vw] font-normal leading-10">
                Almost done
                </div>
                  <div className="mt-3 flex justify-center text-[#323743] text-[14px] xl:text-[0.970vw] font-normal">
                  Please type the code we sent you in your email and mobile
                  </div>

                  <div className="xl:mt-[2.216vw] mt-[20px]">
                     <div className="flex justify-center items-center otp_input gap-[20px]">
                     {otpValues.map((value, index) => (
          <InputText
            key={index}
            type="text"
            className="w-[48px]"
            value={value}
            onChange={(e) => handleOtpInputChange(index, e.target.value)}
            ref={(inputRef) => {
              if (index === 0) {
                firstInputRef.current = inputRef;
              }
              inputRefs.current[index] = inputRef;
            }}
          />
        ))}
                   </div>

                   <div className="xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw]">
                   <button onClick={handleSubmit}  className="custmBtn red radiusFull w-full text-center flex justify-center">
                          VERIFY
                    </button>
                   </div>
                   <div className="xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw] text-[#323743] text-[14px] xl:text-[0.970vw]  text-center">
                       
                    {
                    seconds != 0 ? seconds : <p onClick={()=>resendOtp()}>Resend Otp</p> }
                     </div>

                     <div className="flex justify-center mt-2 xl:mt-[2.083vw] text-[0.970vw]">Can't access to your email?<Link href='' className="font-semibold text-[#323743] ml-1">Contact support</Link></div>
                  
                  </div>
            </Dialog>
            </div>
            <CompleteProfile
               visible={profilePopup}
               onHides={() => setProfilePopup(false)}
               setProfilePopup={setProfilePopup}
               email={resisterData.email}
               phone={resisterData.mobile}
               userId={userId}
               token={token}
           
            />
        </main>
       
    </>
  );
}