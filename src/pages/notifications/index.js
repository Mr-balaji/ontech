import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/layout/layout";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from "primereact/toast";

export default function index() {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const deleteconfirm = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };




    const op = useRef(null);
    return (
        <>
            <Layout pageTitle="Notifications" >
                <div className="min-h-screen">
                    <div className="xl:pt-[1.25vw] pt-[24px] xl:px-[1.563vw] px-[30px] xl:pb-[1.563vw] pb-[30px] bg-[#fff] shadow1">
                        <div className="flex flex-wrap md:justify-between items-center gap-5">
                            <h2 className="text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold ">Notifications</h2>
                            <div className="flex gap-3 items-center">
                                <Link href='' onClick={deleteconfirm} className="px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full"><i className="pi pi-trash text-[14px] mr-2"></i>DELETE NOTIFICATIONS</Link>
                            </div>
                        </div>
                        <div className="xl:space-y-[0.833vw] space-y-[16px] xl:pt-[0.833vw] pt-[16px] ">
                            <div className="bg-[#FAFAFB] xl:px-[1.25vw] px-[24px] xl:pt-[0.677vw] pt-[18px] xl:pb-[0.938vw] pb-[13px] rounded-[4px]">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-11">
                                        <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-semibold mb-2">
                                            Top up done!
                                        </div>
                                        <div className="text-[#6F7787] text-[14px] xl:text-[0.833vw] font-semibold ">
                                            Your account has been recharged with R200 Your account has been ... <span className="font-bold cursor-pointer">Show More</span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-1 lg:justify-self-end">
                                            <div className="text-[#323743] text-[11px] xl:text-[0.773vw] font-normal">
                                                3 min ago
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="bg-[#FAFAFB] xl:px-[1.25vw] px-[24px] xl:pt-[0.677vw] pt-[18px] xl:pb-[0.938vw] pb-[13px] rounded-[4px]">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 lg:col-span-11">
                                        <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-semibold mb-2">
                                        Wallet debit alert
                                        </div>
                                        <div className="text-[#6F7787] text-[14px] xl:text-[0.833vw] font-semibold ">
                                        Your account has been debited with R20 against electricity utinization from sandtone home property. Your account has been debited with R20 against electricity utinization from sandtone home property. <span className="font-bold cursor-pointer">Show Less </span>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-1 lg:justify-self-end">
                                            <div className="text-[#323743] text-[11px] xl:text-[0.773vw] font-normal">
                                                3 min ago
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Toast ref={toast} />
                <ConfirmDialog />
            </Layout>
        </>
    );
}