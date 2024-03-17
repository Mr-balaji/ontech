import React, { Fragment, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "primereact/dialog";

export default function RechargePopup(props) {

  return (
    <div className="recharge_popup">
      <Dialog
        visible={props.visible}
        // breakpoints={{ "960px": "80vw", "640px": "90vw" }}
        onHide={props.onHides}
        draggable={false}
        resizable={false}
        className="xl:w-[42vw] w-[757px] recharge_popup"
      >
        <div className="grid grid-cols-12 ">
          <div className="md:col-span-7 col-span-12 px-[44px] xl:px-[2.292vw]">
            <div className="text-[#EC3237] text-[32px] xl:text-[1.667vw] font-bold mt-[30px] xl:mt-[1.563vw]">
              It's Time to <br />
              <span className="text-[56px] xl:text-[2.917vw]"> RECHARGE!</span>
            </div>
            <div className="text-[#000000] text-[20px] xl:text-[1.042vw] font-normal mb-[26px] xl:mb-[1.354vw]">
              Your wallet balance is low for{" "}
              <span className="font-bold">Sandtone Home Account.</span> Please
              top up to enjoy uninterrupted services
            </div>
            <div className="flex gap-[29px] xl:gap-[1.510vw] mb-[43px] xl:mb-[2.240vw]">
                <div>
                    <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] leading-6 xl:leading-[1.354vw] font-normal">Wallet Balance</div>
                    <div className="text-[#EC3237] text-[32px] xl:text-[1.667vw]  font-semibold">R 300.00</div>
                </div>
                <div className="text-center">
                <Link href='' className="flex items-center px-[18px] xl:px-[0.938vw] py-[15px] xl:py-[0.781vw] red text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full mb-[18px] xl:mb-[0.938vw]">
                    <i className="pi pi-credit-card text-[14px] mr-2"></i>TOPUP NOW
                </Link>
                <div onClick={props.onHides} className="text-[#323743] text-[20px] xl:text-[1.042vw] underline font-normal cursor-pointer">Do it later</div>
                </div>
            </div>
          </div>
          <div className="md:col-span-5 ">
          <div className="popupbgimg ">
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
