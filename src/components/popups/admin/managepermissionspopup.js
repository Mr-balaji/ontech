import React, { Fragment, useRef, useState } from "react";
import Link from 'next/link';
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";

export default function ManagePermissionPopup(props) {
    const [checked, setChecked] = useState(false);
    return (
        <div className="otp-popup profilepopup">
            <Dialog
                visible={props.visible}
                onHide={props.onHides}
                draggable={false}
                resizable={false}
                className="xl:w-[52.222vw] w-[752px] otp-popup profilepopup"
            >
                <div className="mt-[24px] xl:mt-[1.667vw] flex justify-center text-[#171A1F] text-[32px] xl:text-[2.222vw] font-bold">
                    Manage Permissions
                </div>

                <div className="xl:my-[2.083vw] my-[30px] xl:px-[2.431vw] px-[35px]">
                    <div className="mangeshadow p-[20px] xl:p-[1.389vw]">
                        <div className="grid grid-cols-12 gap-2 mb-[23px] xl:mb-[1.597vw]">
                            <div className="col-span-6">
                                <div className="text-[#565D6DFF] text-[16px] xl:text-[1.111vw] font-semibold">
                                    Setting
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="text-[#565D6DFF] text-[16px] xl:text-[1.111vw] font-semibold">
                                    View
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="text-[#565D6DFF] text-[16px] xl:text-[1.111vw] font-semibold">
                                    Modify
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="text-[#565D6DFF] text-[16px] xl:text-[1.111vw] font-semibold">
                                    Delete
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 place-content-center gap-2 pb-[17px] xl:pb-[1.181vw] border-b border-[#DEE1E6FF]">
                            <div className="col-span-6">
                                <div className="text-[#565D6DFF] text-[14px] xl:text-[0.972vw] font-normal">
                                    User Master
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 place-content-center gap-2 pt-[20px] xl:pt-[1.389vw] pb-[17px] xl:pb-[1.181vw] border-b border-[#DEE1E6FF]">
                            <div className="col-span-6">
                                <div className="text-[#565D6DFF] text-[14px] xl:text-[0.972vw] font-normal">
                                    Customer Master
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 place-content-center gap-2 pt-[20px] xl:pt-[1.389vw] pb-[17px] xl:pb-[1.181vw] border-b border-[#DEE1E6FF]">
                            <div className="col-span-6">
                                <div className="text-[#565D6DFF] text-[14px] xl:text-[0.972vw] font-normal">
                                    Usage
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 place-content-center gap-2 pt-[20px] xl:pt-[1.389vw]">
                            <div className="col-span-6">
                                <div className="text-[#565D6DFF] text-[14px] xl:text-[0.972vw] font-normal">
                                    Payments
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                                <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 justify-self-center">
                            <div className="custom_switch custom_switch_admin">
                                    <InputSwitch
                                        checked={checked}
                                        onChange={(e) => setChecked(e.value)}
                                    />
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-end xl:px-[2.431vw] px-[35px] gap-2">
                        <Link href='' onClick={props.onHides} className=" px-4 text-center flex justify-center text-[#9095A1] text-[14px] xl:text-[0.972vw] font-normal">
                            CANCEL
                        </Link>
                        <Link href='' onClick={props.onHides} className=" custmBtn red radiusFull  text-center flex justify-center">
                            <i className="pi pi-check"></i> SAVE PERMISSIONS
                        </Link>
                    
                </div>
            </Dialog>
        </div>
    )

}