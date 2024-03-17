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
            consumer: 'Ryan Young',
            image: 'td_water_icon.svg',
            meterdetails: 'Sandtone Water Meter #22546587523',
            address: 'Address line 1... Area',
            customer: 'Nil Simond (972) 290-7148',
            target: '240 Liter',
            document: '',
            date: 'Feb 15, 2023'
        },
        {
            consumer: 'Ryan Young',
            image: 'td_gas_icon.svg',
            meterdetails: 'Sandtone Gas Meter #22546587523',
            address: 'Address line 1... Area',
            customer: 'Nil Simond (972) 290-7148',
            target: '240 Liter',
            document: '',
            date: 'Feb 15, 2023'
        }
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
            <Image src={`/assets/images/${rawData.image}`}
                width={36} height={36}
                className="xl:w-[2.5vw] xl:h-[2.5vw] w-[36px] h-[36px] max-w-44" alt="" />
        )
    }

    const DocumentBody = (rawData) => {
        return (
            <button className="bg-[#EC3237] rounded-full xl:w-[2.5vw] xl:h-[2.5vw] w-[36px] h-[36px]">
                <Image src={"/assets/images/doucment_icon.svg"}
                    width={16} height={16}
                    className="xl:w-[1.111vw] xl:h-[1.111vw] w-[16px] h-[16px] mx-auto" alt="" />
            </button>
        )
    }

    //   data table 

    return (
        <>
            <Layout pageTitle="Consumer Registration Requests" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[29px] xl:pr-[2.014vw]">
                    {/* Header */}
                    <div className="mt-[22px] xl:mt-[1.528vw] text-[#171A1F] text-[32px] xl:text-[2.222vw] mb-[16px] xl:mb-[1.111vw] font-bold">
                        Meter Registration Requests
                    </div>


                    <div className="min-h-[30.153vw]">
                        <div className="mb-10 xl:mb-[2.778vw]">
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox"
                                scrollable
                                responsiveLayout="scroll"
                                style={{ width: "100%" }}

                                rows={5}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                onSelectionChange={(e) => setSelectedProducts(e.value)}
                                selectionMode={rowClick ? null : 'checkbox'}
                                selection={selectedProducts}
                                dataKey="id"
                            >
                                <Column
                                    field=""
                                    header=""
                                    body={ConsumerBody}
                                    style={{ minWidth: "5%" }}
                                ></Column>
                                <Column
                                    field="meterdetails"
                                    header="METER DETAILS"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="address"
                                    header="ADDRESS"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="customer"
                                    header="CONSTOMER"
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                                <Column
                                    field="target"
                                    header="TARGET"
                                    style={{ minWidth: "7rem" }}
                                ></Column>
                                <Column
                                    field="document"
                                    header="DOCUMENT"
                                    body={DocumentBody}
                                    align="center"
                                    style={{ minWidth: "8em" }}
                                ></Column>
                                <Column
                                    field="date"
                                    header="DATE"
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                                <Column
                                    field="status"
                                    body={StatusStyle}
                                    align="center"
                                    header="STATUS"
                                    style={{ minWidth: "19rem" }}
                                ></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
}