import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Catamaran } from "@next/font/google";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import Bottom from "@/components/adminlayout/bottom";
import Top from "@/components/adminlayout/toplogin";
const myCatamaran = Catamaran({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function index() {
  const [resetPassword, setResetPassword] = useState(false);
  const [otp, setOtp] = useState(false);
  const [forgotpassword, setForgotpassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Sign In");

  const router = useRouter();
  const toast = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please Fill All Field",
        life: 3000,
      });
    } else {
      const payloadDta = {
        email: userName,
        password: password,
      };
      setButtonText("please wait...");
      const res = await axios.post(
        "https://surveybackend-cjev.onrender.com/api/admin/login",
        payloadDta
      );
      console.log("payloadDta", res);
      if (res.data.responseStatus === "success") {
        router.push("/dashboard");
        localStorage.setItem(
          "token",
          JSON.stringify(res.data.responseData.token)
        );
      } else if (res.data.responseStatus === "error") {
        setError(res.data.responseMsg);
        setButtonText("Sign In");
      } else {
        setButtonText("Sign In");
      }
    }
  };

  return (
    <>
      <Head>
        <title>OnTech</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Toast ref={toast} />
      <Top />
      <main className={myCatamaran.className}>
        <div className="loginadmin-wrap-bg min-h-screen">
          {forgotpassword === true ? 
          // Forgot passoword page start
            <div className="flex w-full  login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]">
              <div className="bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg xl:m-[0px] m-[40px]">
                <div
                  className=" w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] "
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <form autoComplete="off">
                    <div className="flex ">
                      <h2 className="text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold">
                        Forgot Password?{" "}
                      </h2>
                    </div>
                    <div className="mb-10 xl:mb-[2.083vw]">
                      <div className="text-[#171A1F] text-[20px] xl:text-[1.042vw]  font-bold">
                        Enter your Email or Mobile
                      </div>
                    </div>
                    <div className="xl:space-y-[1.936vw] space-y-[25px]">
                      <div className="relative  mb-2 xl:mb-[0.781vw]">
                        <span className="p-float-label">
                          <InputText
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"
                          />
                          <label htmlFor="username" className="w-full">
                            Enter Email/Mobile
                          </label>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center my-5 xl:my-[1.563vw]">
                      <div>
                        <div className="text-[#171A1F] font-normal xl:text-[0.972vw] text-[15px]">
                          We will send OTP to your registered email.
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center w-full my-5 xl:my-[2.083vw]">
                      <div
                        onClick={() => setOtp(true)}
                        className="custmBtn red radiusFull w-full text-center flex items-center justify-center cursor-pointer"
                      >
                        <Image
                          src={"/assets/images/send_message_icon.svg"}
                          width={35}
                          height={35}
                          className="inline-block w-5 h-5 xl:w-[1.142vw] xl:h-[1.142vw] mr-2"
                          alt=""
                        />
                        SEND OTP
                      </div>
                    </div>

                    <div className="flex items-center justify-center mb-0 xl:mb-[0.083vw] text-sm text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]">
                      Remember Password?
                      <Link
                        href="/"
                        className="ml-2 text-md font-semibold text_red "
                      >
                        Sign in
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           // Forgot passoword page end 
          : 
          // reset password page start 
          resetPassword === true ? 
          <div className="flex w-full login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]">
            <div className="bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg xl:m-[0px] m-[40px]">
              <div
                className=" w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] "
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <form autoComplete="off">
                  <div className="flex ">
                    <h2 className="text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold">
                      Reset Your Password{" "}
                    </h2>
                  </div>
                  <div className="mb-10 xl:mb-[2.083vw]">
                    <div className="text-[#171A1F] text-[20px] xl:text-[1.042vw]  font-bold">
                      Setup new password
                    </div>
                  </div>
                  <div className="xl:space-y-[1.936vw] space-y-[25px]">
                    <div className="relative mb-2 xl:mb-[0.781vw] password-custom">
                      <span className="p-float-label">
                        <Password
                          inputId="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          toggleMask
                          className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"
                        />
                        <label htmlFor="password">Enter Your Password</label>
                      </span>
                    </div>
                    <div className="relative mb-2 xl:mb-[0.781vw] password-custom">
                      <span className="p-float-label">
                        <Password
                          inputId="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          toggleMask
                          className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"
                        />
                        <label htmlFor="password">Confirm new password</label>
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center w-full mt-5 xl:mt-[2.083vw]">
                    <div onClick={() =>{ 
                            setOtp(false), 
                            setResetPassword(false), 
                            setForgotpassword(false)
                          }}
                      className="custmBtn red radiusFull w-full text-center flex items-center justify-center cursor-pointer"
                    >
                      <Image
                        src={"/assets/images/lock_password_icon.svg"}
                        width={35}
                        height={35}
                        className="inline-block w-5 h-5 xl:w-[1.192vw] xl:h-[1.192vw] mr-1"
                        alt=""
                      />
                      SET NEW PASSWORD
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> 
          // reset password page end 
          : 
           // login page start 
            <div className="flex w-full  login xl:py-[8.083vw]  pt-[10px] xl:pb-[7.083vw] pb-[40px]">
              <div className="bg-[#fff] w-full xl:w-[34.722vw] xl:ml-[6.944vw] ml-[40px] rounded-lg xl:m-[0px] m-[40px]">
                <div
                  className=" w-full xl:w-[34.722vw] xl:p-[2.431vw]  p-[20px] "
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <form autoComplete="off">
                    <div className="flex ">
                      <h2 className="text-[#171A1F] text-[20px] xl:text-[2.222vw] font-bold">
                        Sign in to admin account{" "}
                        <span className="text-[18px]">🚀</span>
                      </h2>
                    </div>
                    <div className="mb-10 xl:mb-[2.083vw]">
                      <div className="text-[#9095A1] text-sm lg:text-lg xl:text-[1.250vw] font-medium">
                        Sign in with your email or mobile
                      </div>
                    </div>
                    <div className="xl:space-y-[1.936vw] space-y-[25px]">
                      <div className="relative  mb-2 xl:mb-[0.781vw]">
                        <span className="p-float-label">
                          <InputText
                            id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"
                          />
                          <label htmlFor="username" className="w-full">
                            Enter Email/Mobile
                          </label>
                        </span>
                      </div>

                      <div className="relative mb-2 xl:mb-[0.781vw] password-custom">
                        <span className="p-float-label">
                          <Password
                            inputId="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            toggleMask
                            className="placeholder:text-[#BDC1CA] placeholder:text-sm w-full"
                          />
                          <label htmlFor="password">Enter Your Password</label>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end my-5 xl:my-[1.563vw]">
                      <div>
                        <p className="text-[#171A1F] font-light xl:text-[0.972vw] text-[15px]">
                          Forgot password?{" "}
                          <Link
                            href=""
                            onClick={() => setForgotpassword(true)}
                            className="text_red font-semibold hover:underline"
                          >
                            Click Here
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center w-full mt-4 xl:mt-[1.181vw]">
                      <Link href={'/admin/dashboard'} className="custmBtn red radiusFull w-full text-center flex justify-center">
                
                    Sign In</Link>

                      {/* <button
                        onClick={handleSubmit}
                        className="custmBtn red radiusFull w-full text-center flex justify-center "
                      >
                        {buttonText}
                      </button> */}
                    </div>

                   
                  </form>
                </div>
              </div>
            </div>
           // login page end 
            }

        </div>
        {forgotpassword || resetPassword ? <Bottom /> :null}
        

        <div className="otp-popup">
          <Dialog
            visible={otp}
            breakpoints={{ "960px": "80vw", "640px": "90vw" }}
            style={{ width: "40vw" }}
            onHide={() => setOtp(false)}
            draggable={false}
            resizable={false}
            className="xl:w-[40vw] w-[200px] otp-popup"
          >
            <div className="flex justify-center text-[#171A1F] text-[20px] xl:text-[2.222vw] font-normal leading-10">
              Almost done
            </div>
            <div className="mt-3 flex justify-center text-[#323743] text-[14px] xl:text-[0.970vw] font-normal">
              Please type the code we sent you in your email and mobile
            </div>

            <div className="xl:mt-[2.216vw] mt-[20px]">
              <div className="flex justify-center items-center otp_input gap-[20px]">
                <InputText className="w-[48px]" />
                <InputText className="w-[48px]" />
                <InputText className="w-[48px]" />
                <InputText className="w-[48px]" />
                <InputText className="w-[48px]" />
                <InputText className="w-[48px]" />
              </div>

              <div className="xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw]">
                <Link
                  onClick={() => {
                    setResetPassword(true), setOtp(false),setForgotpassword(false)
                  }}
                  href=""
                  className="custmBtn red radiusFull w-full text-center flex justify-center"
                >
                  VERIFY
                </Link>
              </div>
              <div className="xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw] text-[#323743] text-[14px] xl:text-[0.970vw]  text-center">
                01:00
              </div>

              <div className="flex justify-center mt-2 xl:mt-[2.083vw] text-[0.970vw]">
                Can't access to your email?
                <Link href="" className="font-semibold text-[#323743] ml-1">
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
