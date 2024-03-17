import React, { Fragment, useRef, useState } from "react";
import Link from 'next/link';
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { ToastContainer, toast } from "react-toastify"
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { InputTextarea } from "primereact/inputtextarea";

export default function EditConsumerPopup(props) {
    const [checked, setChecked] = useState(false);

    const accept = () => {
        toast.success("Opertator successfully deleted");
    }

    const reject = () => {
        toast.warn("Opertator successfully deleted");
    }
    const deleteconfirm = () => {
        confirmDialog({
            message: 'Do you want to delete this operator?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };
    return (
        <div className="otp-popup profilepopup">
            <Dialog
                visible={props.visible}
                onHide={props.onHides}
                draggable={false}
                resizable={false}
                className="xl:w-[47.917vw] w-[690px] otp-popup profilepopup"
            >
                <div className="mt-[24px] xl:mt-[1.667vw] flex justify-center text-[#171A1F] text-[30px] xl:text-[2.083vw] font-bold">
                    Edit Consumer
                </div>

                <div className="space-y-[21px] xl:space-y-[1.458vw] xl:mb-[2.292vw] mb-[33px] mt-[16px] xl:mt-[1.111vw] xl:px-[4.236vw] px-[61px]">
                    <div className="grid grid-cols-2 gap-[58px] xl:gap-[4.028vw]">
                        <div className="custom_input">
                            <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                                First Name
                            </label>
                            <InputText
                                placeholder="Enter first name"
                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                            />
                        </div>
                        <div className="custom_input">
                            <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                                Last name
                            </label>
                            <InputText
                                placeholder="Enter last name "
                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                            />
                        </div>
                    </div>
                    <div className="custom_input grid grid-cols-2 gap-[58px] xl:gap-[4.028vw]">
                        <div className="">
                            <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                                Email
                            </label>
                            <InputText
                                placeholder="Enter email"
                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                            />
                        </div>
                        <div className="">
                            <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                                Mobile
                            </label>
                            <InputText
                                placeholder="Enter mobile number"
                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                            />
                        </div>
                    </div>
                    <div className="custom_input">
                        <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">
                            Address
                        </label>
                        <InputTextarea
                            rows={1}
                            placeholder="Enter address here"
                            className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="text-[#323743] text-[20px] xl:text-[1.111vw] font-bold">
                            Status:
                        </div>
                        <div className="custom_switch custom_switch_admin pt-[8px]">
                            <InputSwitch
                                checked={checked}
                                onChange={(e) => setChecked(e.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between xl:px-[4.236vw] px-[61px] gap-2">
                    <Link href='' onClick={deleteconfirm} className=" text-[#EC3237] border border-[#EC3237] rounded-full items-center text-[16px] xl:text-[1.111vw] flex justify-center font-normal py-[9px] px-[16px] xl:px-[1.111vw]">
                        <i className="pi pi-trash text-[14px] mr-2"></i> DELETE CONSUMER
                    </Link>
                    <div className="flex flex-wrap items-center gap-1">
                        <Link href='' onClick={props.onHides} className=" px-4 text-center flex justify-center text-[#9095A1] text-[14px] xl:text-[0.972vw] font-normal">
                            CANCEL
                        </Link>
                        <Link href='' onClick={props.onHides} className=" custmBtn red radiusFull  text-center flex justify-center">
                            <i className="pi pi-check"></i> ADD CONSUMER
                        </Link>
                    </div>

                </div>
                <ToastContainer autoClose={500} />
                <ConfirmDialog />
            </Dialog>
        </div>
    )

}