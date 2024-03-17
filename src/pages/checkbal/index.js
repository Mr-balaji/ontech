import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import Bottom from "@/components/layout/bottom";
import { DataView } from "primereact/dataview";

import CompleteProfile from "@/components/popups/completeprofile";
import Linecharts from "@/components/charts/linechart";


export default function index() {

    const [selectedProperty, setSelectedProperty] = useState(null);
    const Property = [
        { name: 'Sandtone Home', code: 'SH1' },
        { name: 'Sandtone Home 1', code: 'SH2' },
        { name: 'Sandtone Home 2', code: 'SH3' },
    ];
    // Data table 
    const products = [
        {
            id: 1,
            status: 'Credit'
        },
        {
            id: 2,
            status: 'Debit'
        },
        {
            id: 3,
            status: 'Debit'
        },
        {
            id: 4,
            status: 'Credit'
        },
    ];

    const itemTemplate = (product) => {
        return (

            <div className="bg-[#FAFAFB] border border-[#F3F4F6]  xl:px-[0.833vw] px-[16px] py-[11px] xl:py-[0.573vw] rounded-[2px] mb-[20px] xl:mb-[1.042vw]">
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
                                    <div className="bg-[#EEFDF3] px-[8px] py-[4px] text-[#117B34] text-[14px] xl:text-[0.972vw] rounded-[14px] xl:rounded-[0.0.972vw] font-normal">Credit</div>
                                    :
                                    <div className="bg-[#FEF1F1] px-[8px] py-[4px] text-[#EC3237] rounded-[14px] xl:rounded-[0.0.972vw] text-[14px] xl:text-[0.972vw] font-normal">Debit</div>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    };

    const LineData = {
        label:['July', 'Aug', 'Sep', 'Oct'],
        value:[2, 1, 4, 3]
    }
    return (
        <>
            <Layout pageTitle="Homepage" >
                <div className="xl:px-[1.042vw] px-2">
                    <div className="flex flex-wrap justify-between">
                        <h2 className="text-[#171A1F] text-[20px] xl:text-[1.806vw] font-semibold ">Account: 123456767</h2>

                        <div className="flex gap-3 items-center">
                            <label className="text-[#171A1F] text-[16px] xl:text-[1.528vw] font-semibold block">Change Property: </label>
                            <div className="place_dropdown relative">
                                <Dropdown value={selectedProperty} onChange={(e) => setSelectedProperty(e.value)} options={Property} optionLabel="name"
                                    placeholder="Select a Property" className="w-full md:w-14rem xl:w-[17.361vw]" />
                                <div className="absolute top-2 left-2">
                                    <Image src={"/assets/images/home_icon.svg"} width={24} height={24}
                                        className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="xl:my-[2.083vw] my-[20px] bg-[#fff] border xl:p-[2.361vw] p-[20px] ">
                    <div className="grid grid-cols-12 gap-5 xl:gap-[2.500vw]">
                            <div className="lg:col-span-8 col-span-12">
                                <div className="xl:p-[1.389vw] p-[15px] bg-[#323743] shadow1 rounded-lg border-bottom-red">

                                    <div className="flex flex-wrap justify-between items-center">
                                        <div>
                                            <h2 className="text-[#fff] text-[40px] xl:text-[2.278vw] font-light  leading-none">Current Balance</h2>
                                            <h3 className="text-[#fff] text-[20px] xl:text-[1.111vw] font-semibold">Last Toptup: R 100  On: 20 Sep 2023</h3>
                                        </div>
                                        <div className="">
                                            <h2 className="text-[#fff] text-[40px] xl:text-[2.867vw] font-semibold  leading-none">R300</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:col-span-4 col-span-12 text-center flex items-center justify-center">
                                <Link href='/topup' className="px-[30px] xl:px-[2.778vw] py-[12px] xl:py-[0.833vw] red text-[16px] xl:text-[1.25vw] font-normal uppercase rounded-full"><i className="pi pi-credit-card mr-2 "></i>TOPUP NOW </Link>
                            </div>
                        </div>
                    </div>
                    <div className="xl:my-[2.083vw] my-[20px] bg-[#fff] border xl:px-[2.361vw] px-[20px] 
               xl:py-[1.667vw] py-[24px]">
                        <div className="text-[#565D6D] text-[18px] xl:text-[1.389vw] font-bold  leading-none">
                            History</div>
                        <div>
                            <div >
                                {/* className="xl:h-[16.194vw] h-[160px]" */}
                                <Linecharts
                                    linecolor={['#EC3237']}
                                    xAxisLableColor='#9095A1'
                                    splitLineShow={true}
                                    data={LineData}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] px-[24px] py-[17px] xl:px-[1.25vw] xl:py-[0.885vw]generalShadow">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="text-[#565D6D] text-[20px] xl:text-[1.389vw] font-bold">Recent Transactions</div>
                            <div className="flex items-center gap-[28px] xl:gap-[1.458vw]">

                                <Link href='/transactions' className="inline-block bg-[#EC3237] text-[#FFFFFF] rounded-full text-[20px] xl:text-[1.111vw]  px-[16px] xl:px-[1.042vw] py-[9px] xl:py-[0.625vw] font-light leading-tight">
                                    <i className="pi pi-credit-card text-[20px] xl:text-[1.042vw] mr-2"></i> GO TO TRANSACTIONS
                                </Link>
                            </div>
                        </div>

                        <div className="xl:my-[2.083vw] my-[20px] get-statement ">
                            <DataView value={products} itemTemplate={itemTemplate} />


                            <div className="mt-4 text-center">
                                <Link href='' className="inline-block  text-[#EC3237] text-[20px] xl:text-[1.111vw] font-medium leading-tight">
                                    View all
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <CompleteProfile
               visible={profilePopup}
               onHides={() => setProfilePopup(false)}
            /> */}
            </Layout>
        </>
    );
}