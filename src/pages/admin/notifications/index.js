import Image from "next/image";
import React, { useRef, useState } from "react";
import Layout from "@/components/adminlayout/layout";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { OverlayPanel } from "primereact/overlaypanel";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { ToastContainer, toast } from "react-toastify";

export default function index() {
    const [selectedMeterStatus, setSelectedMeterStatus] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const op = useRef(null);
    const MeterStatus = [
        { name: "Meter Status", code: "SH1" },
        { name: "Meter Status", code: "SH2" },
        { name: "Meter Status", code: "SH3" },
        { name: "Meter Status", code: "SHG" },
    ];

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


    // Data table 
    const products = [
        {
            category: 'Registration',
            event: 'Welcome',
            message: 'Duis dolore commodo irure in nulla laboris ipsum Lorem sint occaecat...',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },
        {
            category: 'Payment',
            event: 'Welcome',
            message: 'Adipisicing occaecat anim..',
            createdon: 'Feb 15, 2023'
        },

    ];

    const actionTemplate = (product) => {
        return (
            <div>
                <i className="pi pi-ellipsis-v text-[#565D6D] text-[14px] xl:text-[0.94vw] align-top cursor-pointer"
                    title="Select setting"
                    onClick={(e) => op.current.toggle(e)}
                ></i>
                <OverlayPanel ref={op} className="op">
                    <div className=" text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">
                        <Link href='' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] ">
                            <i className="pi pi-eye"></i>
                            View Full Notification</Link>
                       
                        <Link href='' onClick={deleteconfirm} className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "><i className="pi pi-trash"></i> Delete Notification</Link>
                    </div>
                </OverlayPanel>
            </div>
        );
    };

    //   data table 

    return (
        <>
            <Layout pageTitle="Notifications" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[29px] xl:pr-[2.014vw]">
                    {/* Header */}
                    <div className="mt-[20px] xl:mt-[1.389vw] text-[#323743] text-[32px] xl:text-[2.222vw] mb-[33px] xl:mb-[2.292vw] pb-2 font-bold border-b border-b-[#DEE1E6]">
                        Notifications
                    </div>


                    <div className="min-h-[30.153vw]">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-b-[#F3F4F6FF]">
                            <div className="flex items-center gap-[28px] xl:gap-[1.944vw]">
                                <div className="cust_dropdown">
                                    <Dropdown
                                        value={selectedMeterStatus}
                                        onChange={(e) => setSelectedMeterStatus(e.value)}
                                        options={MeterStatus}
                                        optionLabel="name"
                                        placeholder="Bulk Action"
                                        className="w-full"
                                    />
                                </div>
                                <button className="custmBtn red radiusFull" >
                                    <i className="pi pi-check"></i><span className="pl-2">Find</span>
                                </button>
                            </div>
                            <div className="flex gap-[28px] xl:gap-[1.944vw]">
                                <div className="cust_search">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText className="w-[121px] xl:w-[8.403vw]" placeholder="Search" />
                                    </span>
                                </div>
                                <div className="cust_search">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText className="w-[121px] xl:w-[8.403vw]" placeholder="Search" />
                                    </span>
                                </div>
                                <button className="custmBtn red radiusFull mb-2" >
                                    <i className="pi pi-check"></i><span className="pl-2">Find</span>
                                </button>
                            </div>
                        </div>
                        <div className="mb-10 xl:mb-[2.778vw]">
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox hideCheckbox"
                                scrollable
                                responsiveLayout="scroll"
                                style={{ width: "100%" }}
                                paginator
                                paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                                currentPageReportTemplate="Rows per page {first}-{last} of {totalRecords}"
                                rows={5}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                onSelectionChange={(e) => setSelectedProducts(e.value)}
                                selectionMode={rowClick ? null : 'checkbox'}
                                selection={selectedProducts}
                                dataKey="id"
                            >
                                <Column
                                    header="SELECT"
                                    selectionMode="multiple"
                                    headerStyle={{ width: '1rem' }}
                                ></Column>
                                <Column
                                    field="category"
                                    header="CATEGORY"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="event"
                                    header="EVENT"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="message"
                                    header="MESSAGE"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="createdon"
                                    header="CREATED ON"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field=""
                                    header=""
                                    align='center'
                                    body={actionTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                            </DataTable>

                        </div>
                    </div>
                </div>
                <ConfirmDialog />
                <ToastContainer autoClose={500} />
            </Layout>
        </>
    );
}