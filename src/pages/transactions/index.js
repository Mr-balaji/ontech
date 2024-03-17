import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { DataView } from "primereact/dataview";

export default function index() {
    const [ingredient, setIngredient] = useState('');
    const [date, setDate] = useState(null);
    const [activeTab, setActiveTab] = useState(2);
    const toast = useRef(null);
    const [selectedMeter, setSelectedMeter] = useState(null);
    const Meter = [
        { name: 'Sandtone Water Meter ( 1234567676 )', code: 'SH1' },
        { name: 'Sandtone Water Meter ( 1234567676 )', code: 'SH2' },
        { name: 'Sandtone Water Meter ( 1234567676 )', code: 'SH3' },
    ];





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
    // Data table 
    const products = [
        {
            id: 1,
            status: 'Credit'
        },
        {
            id: 2,
            status: 'Debit'
        }
    ];

    const itemTemplate = (product) => {
        return (

            <div className="bg-[#FAFAFB] border border-[#F3F4F6]  xl:px-[1.111vw] px-[16px] py-[11px] xl:py-[0.573vw] rounded-[2px] mb-[20px] xl:mb-[1.042vw]">
                <div className=" grid grid-cols-12 gap-4 flex items-center">
                    <div className="col-span-12 xl:col-span-6">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <div className="text-[#379AE6] text-[14px] xl:text-[0.972vw] font-bold">Transaction #456</div>
                            </div>
                            <div className="col-span-8">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-normal">Topup by Antonio Diaz</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                        <div className=" grid grid-cols-3 flex items-center">
                            <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">R200</div>
                            <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-noraml">23 Oct 2023</div>
                            <div className="flex justify-end">
                                {product.status === 'Credit' ? 
                                <div className="bg-[#EEFDF3] px-[8px] py-[4px] text-[#117B34] text-[14px] xl:text-[0.972vw] rounded-[14px] xl:rounded-[0.972vw] font-normal">Credit</div>
                                :
                                <div className="bg-[#FEF1F1] px-[8px] py-[4px] text-[#EC3237] rounded-[14px] xl:rounded-[0.972vw] text-[14px] xl:text-[0.972vw] font-normal">Debit</div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };




    return (
        <>
            <Layout pageTitle="My Transactions" >
                <div className="px-[35px] xl:px-[2.431vw]">
                    {/* Get Statement  */}
                    <div className="bg-[#323743] border-bottom-red xl:px-[2.083vw] px-[40px] rounded-xl relative property-block pt-[14px] xl:pt-[0.972vw] xl:pb-[2.031vw] pb-[39px]">
                        <div className="text-[#FFFFFF] text-center text-[32px] xl:text-[2.222vw] font-bold mb-[18px] xl:mb-[1.25vw]">Get Statement</div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[1.563vw] mb-[11px] xl:mb-[0.573vw]">
                            <div className="bg-[#FFFFFF] flex items-center justify-between rounded-full p-[2px]">
                                <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#FFFFFF] bg-[#1E2128]' : 'text-[#171A1F]'} text-[14px] sm:text-[18px] xl:text-[1.25vw] font-normal leading-5 py-[7px] px-[15px] sm:px-[32px] xl:px-[2.222vw] cursor-pointer rounded-full`}>30 days</div>
                                <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#FFFFFF] bg-[#1E2128]' : 'text-[#171A1F]'} text-[14px] sm:text-[18px] xl:text-[1.25vw] font-normal leading-5 py-[7px] px-[15px] sm:px-[32px] xl:px-[2.222vw] cursor-pointer rounded-full`}>60 days</div>
                                <div onClick={() => setActiveTab(3)} className={`${activeTab === 3 ? 'text-[#FFFFFF] bg-[#1E2128]' : 'text-[#171A1F]'} text-[14px] sm:text-[18px] xl:text-[1.25vw] font-normal leading-5 py-[7px] px-[15px] sm:px-[32px] xl:px-[2.222vw] cursor-pointer rounded-full`}>90 days</div>
                                <div onClick={() => setActiveTab(4)} className={`${activeTab === 4 ? 'text-[#FFFFFF] bg-[#1E2128]' : 'text-[#171A1F]'} text-[14px] sm:text-[18px] xl:text-[1.25vw] font-normal leading-5 py-[7px] px-[15px] sm:px-[32px] xl:px-[2.222vw] cursor-pointer rounded-full`}>Custom</div>
                            </div>
                            <div className="flex gap-3 items-center w-full">
                                <div className="place_dropdown relative w-full">
                                    <Dropdown
                                        value={selectedMeter}
                                        onChange={(e) => setSelectedMeter(e.value)}
                                        options={Meter}
                                        optionLabel="name"
                                        placeholder="Select a Meter"
                                        className="w-full"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <Image src={"/assets/images/meter_icon_black.svg"} width={24} height={24}
                                            className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-[30px] xl:gap-[1.563vw]">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="grid xl:grid-cols-2 grid-cols-1 gap-[65px] xl:gap-[3.385vw]">
                                    <div className="custom_input">
                                        <label className="block text-[#CFD2DA] text-[16px] xl:text-[1.111vw] font-bold leading-8">
                                            From
                                        </label>
                                        <Calendar
                                            value={date}
                                            onChange={(e) => setDate(e.value)}
                                            dateFormat="dd/mm/yy"
                                            className="w-full"
                                            placeholder="DD/MM/YYYY"
                                        />
                                    </div>
                                    <div className="custom_input">
                                        <label className="block text-[#CFD2DA] text-[16px] xl:text-[1.111vw] font-bold leading-8">
                                            To
                                        </label>
                                        <Calendar
                                            value={date}
                                            onChange={(e) => setDate(e.value)}
                                            dateFormat="dd/mm/yy"
                                            className="w-full"
                                            placeholder="DD/MM/YYYY"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12 text-center">
                                <label className="block invisible text-[#CFD2DA] text-[16px] xl:text-[1.111vw] font-bold leading-8">sdfsf</label>
                                <Link href='' className="inline-block bg-[#EC3237] text-[#FFFFFF] rounded-full px-[74px] xl:px-[3.88vw] py-[12px] xl:py-[0.625vw]">
                                    <i className="pi pi-check mr-2"></i> SUBMIT
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-[#FFFFFF] mt-[30px] xl:mt-[1.563vw] mb-[34px] xl:mb-[1.771vw] xl:px-[2.083vw] px-[40px] rounded-[2px] pt-[14px] xl:pt-[0.972vw] xl:pb-[1.979vw] pb-[38px] generalShadow">
                        <div className="text-[#565D6D] text-center text-[32px] xl:text-[2.222vw] font-bold mb-[14xl:mb-[0.972vw] my-2">Summary</div>

                        <div className="flex justify-between px-[16px] xl:px-[1.111vw] py-[8px] xl:py-[0.417vw] bg-[#FAFAFB] border-b border-b-[#DEE1E6]">
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-semibold">Suppery</div>
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">Amount</div>
                        </div>
                        <div className="flex justify-between px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.517vw] bg-[#FFFFFF] ">
                            <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">Opening Balance</div>
                            <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-normal">-R232,987</div>
                        </div>
                        <div className="flex justify-between items-center px-[16px] xl:px-[1.111vw] py-[8px] xl:py-[0.417vw] bg-[#FAFAFB] ">
                            <div>
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">Total billing calculations</div>
                                <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">Electricity(123456)</div>
                            </div>
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">-R22,987</div>
                        </div>

                        <div className="flex justify-between items-center px-[16px] xl:px-[1.111vw] py-[8px] xl:py-[0.417vw] bg-[#fff] ">
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">Total Deposit</div>
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">R47</div>
                        </div>

                        <div className="flex justify-between items-center px-[16px] xl:px-[1.111vw] py-[8px] xl:py-[0.417vw] bg-[#FAFAFB] ">
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">Total Asjustments</div>
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">R72,987</div>
                        </div>

                        <div className="flex justify-between items-center px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.517vw] bg-[#FFFFFF] ">
                            <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">Closing Balance</div>
                            <div className="text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">R72,987</div>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] px-[24px] py-[17px] xl:px-[1.25vw] xl:py-[0.885vw]generalShadow">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="text-[#565D6D] text-[24px] xl:text-[1.25vw] font-bold">Transaction Statement</div>
                            <div className="flex flex-wrap items-center gap-[15px] md:gap-[28px] xl:gap-[1.458vw]">
                                <div className="custRadio flex items-center">
                                    <RadioButton inputId="ingredient1" name="payment" value="Email" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Email'} />
                                    <label htmlFor="ingredient1" className="ml-1 text-[#171A1F] text-[14px] xl:text-[0.972vw] font-normal">Send to Email</label>
                                </div>
                                <div className="custRadio flex items-center">
                                    <RadioButton inputId="ingredient2" name="payment" value="Download" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Download'} />
                                    <label htmlFor="ingredient2" className="ml-1 text-[#171A1F] text-[14px] xl:text-[0.972vw] font-normal">Download</label>
                                </div>
                                <Link href='' className="inline-block bg-[#EC3237] text-[#FFFFFF] rounded-full px-[16px] xl:px-[1.111vw] py-[9px] xl:py-[0.469vw]">
                                    <i className="pi pi-check text-[20px] xl:text-[1.042vw] mr-2"></i> GET STATEMENT
                                </Link>
                            </div>
                        </div>

                        <div className="xl:my-[2.083vw] my-[20px] get-statement ">
                            <DataView value={products} itemTemplate={itemTemplate} />
                        </div>
                    </div>

                </div>

            </Layout>
        </>
    );
}