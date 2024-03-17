import React, { Fragment, useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from "primereact/dialog";

export default function PaymentSucess(props) {

    return (
        <div className="otp-popup profilepopup">
            <Dialog
                visible={props.visible}
                //   breakpoints={{ "960px": "80vw", "640px": "90vw" }}
                //   style={{ width: "46vw" }}
                onHide={props.onHides}
                draggable={false}
                resizable={false}
                className="w-[90vw] otp-popup profilepopup"
            >
                <div className="xl:pt-[7.885vw] pt-[113px] pb-10 xl:pb-[5.438vw]  xl:px-[6.875vw]">
                    <div className="grid grid-cols-12 gap-4 xl:gap-20 content-center">
                        {/* col  */}
                        <div className="col-span-12 xl:col-span-6 text-center">
                            <Image src={"/assets/images/payment_sucess_image.svg"}
                                width={30} height={24}
                                className="xl:w-[16.667vw] h-[295px] w-[320px] xl:h-[15.365vw] mx-auto mb-[24px] xl:mb-[1.25vw]" alt="" />
                            <div className="text-[#171A1F] text-[32px] xl:text-[1.667vw] font-bold">Your topup is successful! 🎉</div>
                            <div className="text-[#9095A1] text-[14px] xl:text-[0.833vw] font-normal">You will receive an confirmation letter through your email</div>
                        </div>

                        {/* col  */}
                        <div className="col-span-12 xl:col-span-6">
                            <div className="xl:p-[1.25vw] p-[24px] topup_card_shadow rounded-[2px]">

                                <div className="space-y-[20px] xl:space-y-[1.042vw] pb-[23px] xl:pb-[1.198vw] border-b border-b-[#DEE1E6]">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/calendar_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Date</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">27/04/2022</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/customer_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Customer</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">John Miller</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/payment_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Payment Method</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">XXXX 2320</div>
                                    </div>

                                </div>

                                <div className="space-y-[20px] xl:space-y-[1.042vw] mt-[20px] xl:mt-[1.042vw] pb-[23px] xl:pb-[1.198vw] border-b border-b-[#DEE1E6]">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/receipt_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Transaction ID</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">586789963</div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/currency_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Topup Amount</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">R 273</div>
                                    </div>
                                </div>

                                <div className="space-y-[20px] xl:space-y-[1.042vw] mt-[20px] xl:mt-[1.042vw] pb-[23px] xl:pb-[1.198vw] border-b border-b-[#DEE1E6]">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            <Image src={"/assets/images/money_icon.svg"}
                                                width={24} height={24}
                                                className="xl:w-[1.25vw] w-[24px] xl:h-[1.25vw] h-[24px]" alt="" />
                                            <div className="text-[#9095A1] text-[16px] xl:text-[0.833vw] font-bold">Wallet Balance</div>
                                        </div>
                                        <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold">R 360R 360</div>
                                    </div>
                                </div>

                                <div className="text-center mt-[58px] xl:mt-[3.021vw]">
                                    <Link href='/dashboard' className="flex items-center custmBtn red radiusFull  text-center  justify-center">
                                        <Image src={"/assets/images/dashboard_icon.svg"}
                                            width={20} height={20}
                                            className="inline-block xl:w-[1.042vw] w-[20px] xl:h-[1.042vw] h-[20px] mb-[2px] mr-2" alt="" /> 
                                            <span>GO TO DASHBOARD</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )

}