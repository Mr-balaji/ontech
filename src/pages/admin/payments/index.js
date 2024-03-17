import Image from "next/image";
import React, { useRef, useState } from "react";
import Layout from "@/components/adminlayout/layout";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function index() {
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);

    // Data table 
    const products = [
        {
            consumer: 'Elizabeth Lee',
            type:'woner',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_water_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },
        {
            consumer: 'Elizabeth Lee',
            type:'tenent',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_gas_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },
        {
            consumer: 'Elizabeth Lee',
            type:'woner',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_water_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },
        {
            consumer: 'Elizabeth Lee',
            type:'woner',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_water_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },
        {
            consumer: 'Elizabeth Lee',
            type:'woner',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_water_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },
        {
            consumer: 'Elizabeth Lee',
            type:'woner',
            email: 'ElizabethLee@email.com',
            phone: '020  34763734',
            utility:'td_water_icon.svg',
            topup:'R 300',
            mode:'CC **67',
            date: '10/07/2023'
        },


    ];

    const StatusStyle = (rawData) => {
        return (
            <div className="flex justify-center items-center gap-[24px] xl:gap-[1.667vw]">
                <button className="bg-[#1DD75B] px-[11px] xl:px-[0.764vw] py-[7px] xl:py-[0.486vw] text-[#FFFFFF] text-[14px] xl:text-[0.972vw] font-normal rounded-[18px] xl:rounded-[1.25vw]">
                    <i className="pi pi-check" style={{ fontSize: '1.111vw' }}></i> ACCEPT
                </button>
                <button className="bg-[#EC3237] px-[11px] xl:px-[0.764vw] py-[7px] xl:py-[0.486vw] text-[#FFFFFF] text-[14px] xl:text-[0.972vw] font-normal rounded-[18px] xl:rounded-[1.25vw]">
                    <i className="pi pi-times" style={{ fontSize: '1.111vw' }}></i> REJECT
                </button>
            </div>
        )

    }
    const ConsumerBody = (rawData) => {
        return (
            <div className="">
                <div className="font-bold">{rawData.consumer}</div>
                <div className="font-normal text-[#565D6D] text-[12px]">{rawData.type}</div>
            </div>
        )
    }

    const UtilityBody = (rawData) => {
        return (
            <button className="xl:w-[2.5vw] xl:h-[2.5vw] w-[36px] h-[36px]">
                <Image src={`/assets/images/${rawData.utility}`}
                    width={16} height={16}
                    className="xl:w-[1.111vw] xl:h-[1.111vw] w-[16px] h-[16px] mx-auto" alt="" />
            </button>
        )
    }

    //   data table 

    return (
        <>
            <Layout pageTitle="Payments" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[29px] xl:pr-[2.014vw]">
                    {/* Header */}
                    <div className="mt-[22px] xl:mt-[1.528vw] text-[#171A1F] text-[32px] xl:text-[2.222vw] pb-[8px] xl:pb-[0.556vw] font-bold border-b border-b-[#DEE1E6]">
                        Payments
                    </div>
                    {/* Header */}
                    <div className="xl:mt-[1.806vw] mt-[26px] mb-[21px] xl:mb-[1.458vw]">
                        <div className="flex flex-wrap items-center gap-[20px] xl:gap-[1.389vw]">
                            {/* Total Consumers */}
                            <div className="px-[20px] xl:px-[1.389vw] pt-[7px] pb-[10px] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between gap-[14px] xl:gap-[0.972vw]">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Consumers</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">2,345 </div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/customers_icon.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total properties */}
                            <div className="px-[20px] xl:px-[1.389vw] pt-[7px] pb-[10px] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between gap-[14px] xl:gap-[0.972vw]">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Properties</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">3,045</div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/home_icon_white.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total meters */}
                            <div className="px-[20px] xl:px-[1.389vw] pt-[7px] pb-[10px] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between gap-[14px] xl:gap-[0.972vw]">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Meters</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">103,045</div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/meter_white_icon.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Active meters */}
                            <div className="px-[20px] xl:px-[1.389vw] pt-[7px] pb-[10px] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between gap-[14px] xl:gap-[0.972vw]">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Active Meters</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">103,045</div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/meter_white_icon.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-[30px] xl:gap-[2.083vw] mb-[26px] xl:mb-[1.806vw]">
                        {/* Electricity */}
                        <div className="bg-[#F5C747] payment_tile_shadow rounded-[15px] xl:rounded-[1.042vw]">
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw]">
                                <div>
                                <Image 
                                src={`/assets/images/electricity_white_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.389vw] xl:h-[1.389vw] w-[20px] h-[20px]" alt="" /> 
                                </div>
                                <div className="text-white font-bold text-[16px] xl:text-[1.111vw] ">Electricity</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Week
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R232,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Month
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R822,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] bg-[#FFFFFF] rounded-b-[15px] xl:rounded-b-[1.042vw]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Year
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R23,327,343</div>
                            </div>
                        </div>
                        {/* Water */}
                        <div className="bg-[#1A99EE] payment_tile_shadow rounded-[15px] xl:rounded-[1.042vw]">
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw]">
                                <div>
                                <Image 
                                src={`/assets/images/water_white_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.389vw] xl:h-[1.389vw] w-[20px] h-[20px]" alt="" /> 
                                </div>
                                <div className="text-white font-bold text-[16px] xl:text-[1.111vw] ">Water</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Week
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R232,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Month
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R822,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] bg-[#FFFFFF] rounded-b-[15px] xl:rounded-b-[1.042vw]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Year
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R23,327,343</div>
                            </div>
                        </div>
                        {/* Gas */}
                        <div className="bg-[#4CE77F] payment_tile_shadow rounded-[15px] xl:rounded-[1.042vw]">
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw]">
                                <div>
                                <Image 
                                src={`/assets/images/gas_white_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.389vw] xl:h-[1.389vw] w-[20px] h-[20px]" alt="" /> 
                                </div>
                                <div className="text-white font-bold text-[16px] xl:text-[1.111vw] ">Gas</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Week
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R232,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Month
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R822,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] bg-[#FFFFFF] rounded-b-[15px] xl:rounded-b-[1.042vw]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Year
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R23,327,343</div>
                            </div>
                        </div>
                        {/* Hot water */}
                        <div className="bg-[#1A99EE] payment_tile_shadow rounded-[15px] xl:rounded-[1.042vw]">
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw]">
                                <div>
                                <Image 
                                src={`/assets/images/hot_water_white_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.389vw] xl:h-[1.389vw] w-[20px] h-[20px]" alt="" /> 
                                </div>
                                <div className="text-white font-bold text-[16px] xl:text-[1.111vw] ">Hot Water</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Week
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R232,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] border-b border-b-[#DEE1E6] bg-[#FFFFFF]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Month
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R822,987</div>
                            </div>
                            <div className="flex justify-between px-[12px] xl:px-[0.833vw] py-[7px] xl:py-[0.486vw] bg-[#FFFFFF] rounded-b-[15px] xl:rounded-b-[1.042vw]">
                                <div className="text-[#171A1F] text-[14px] xl:text-[0.972vw] font-bold">
                                Last Year
                                </div>
                                <div className="text-[#171A1F] font-normal text-[14px] xl:text-[0.972vw] ">R23,327,343</div>
                            </div>
                        </div>
                    </div>

                    <div className="min-h-[30.153vw]">
                        <div className="flex justify-end items-center mb-3 gap-3">
                            <button className="text-[#565D6D] bg-[#F3F4F6] text-[14px] xl:text-[0.972vw] px-[12px] xl:px-[0.833vw] py-[9px] xl:py-[0.625vw] rounded-[3px]">
                            <Image 
                                src={`/assets/images/export_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.111vw] xl:h-[1.111vw] w-[16px] h-[16px] pr-1" alt="" /> Export
                            </button>
                            <button className="text-[#565D6D] bg-[#F3F4F6] text-[14px] xl:text-[0.972vw] px-[12px] xl:px-[0.833vw] py-[9px] xl:py-[0.625vw] rounded-[3px]">
                            <Image 
                                src={`/assets/images/filter_icon.svg`}
                                width={16} height={16}
                                className="inline-block xl:w-[1.111vw] xl:h-[1.111vw] w-[16px] h-[16px] pr-1" alt="" /> Filter
                            </button>
                        </div>
                        <div className="mb-10 xl:mb-[2.778vw]">
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox"
                                scrollable
                                responsiveLayout="scroll"
                                style={{ width: "100%" }}
                                paginator
                                paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                                currentPageReportTemplate="Rows per page {first}-{last} of {totalRecords}"
                                rows={2}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                onSelectionChange={(e) => setSelectedProducts(e.value)}
                                selectionMode={rowClick ? null : 'checkbox'}
                                selection={selectedProducts}
                                dataKey="id"
                            >
                                <Column
                                    field="consumer"
                                    header="CONSUMER"
                                    body={ConsumerBody}
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="email"
                                    header="EMAIL"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="phone"
                                    header="PHONE"
                                    style={{ minWidth: "4rem" }}
                                ></Column>
                                <Column
                                    field="utility"
                                    header="UTILITY"
                                    body={UtilityBody}
                                    align="center"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="topup"
                                    header="TOPUP"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                                <Column
                                    field="mode"
                                    header="MODE"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                                <Column
                                    field="date"
                                    header="DATE"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
}