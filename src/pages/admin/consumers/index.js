import Image from "next/image";
import React, { useRef, useState } from "react";
import Layout from "@/components/adminlayout/layout";
import ManagePermissionPopup from "@/components/popups/admin/managepermissionspopup";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { OverlayPanel } from "primereact/overlaypanel";
import AddNewOperatorPopup from "@/components/popups/admin/addnewoperatorpopup";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { ToastContainer, toast } from "react-toastify";
import EditConsumerPopup from "@/components/popups/admin/editconsumerpopup";

export default function index() {
    const [editConsumerShow, setEditConsumerShow] = useState(false);
    const [selectedMeterStatus, setSelectedMeterStatus] = useState(null);
    const [managePermissionShow, setManagePermissionShow] = useState(false);
    const [addnewOperatorShow, setAddNewOperatorShow] = useState(false);
    const [activeTab2, setActiveTab2] = useState(2);
    const [activeTab, setActiveTab] = useState(0);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [checked, setChecked] = useState(false);
    const op = useRef(null);
    const MeterStatus = [
        { name: "Meter Status", code: "SH1" },
        { name: "Meter Status", code: "SH2" },
        { name: "Meter Status", code: "SH3" },
        { name: "Meter Status", code: "SHG" },
    ];

    const onUpload = () => {
        toast.success("File Uploaded successfully");
    };


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
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },
        {
            operator: 'Ryan Young',
            address: 'Address line 1... Area',
            contact: 'ryansmit1984@yahoo.com (972) 290-7148',
            sources: '2 Properties 4 Meters',
            createdon: 'Feb 15, 2023'
        },

    ];

    const StatusStyle = (rawData) => {
        return (
            <div className="custom_switch custom_switch_admin">
                <InputSwitch
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                />
            </div>
        )

    }
    const OperatorBody = (rawData) => {
        return (
            <div className="flex items-center gap-1">
               <Image src={"/assets/images/user.jpg"} 
                        width={36} height={36}
                         className="xl:w-[2.5vw] xl:h-[2.5vw] w-[36px] h-[36px] rounded-full" alt="" />
                <div>{rawData.operator}</div>
            </div>
        )

    }



    const actionTemplate = (product) => {
        return (
            <div>
                <i className="pi pi-ellipsis-v text-[#565D6D] text-[14px] xl:text-[0.94vw] align-top cursor-pointer"
                    title="Select setting"
                    onClick={(e) => op.current.toggle(e)}
                ></i>
                <OverlayPanel ref={op} className="op">
                    <div className=" text-[#565D6D] text-[14px] xl:text-[0.972vw] font-normal">
                        <Link href='' onClick={() => setEditConsumerShow(true)}  className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] ">
                            <i className="pi pi-pencil"></i>
                            Edit Consumer</Link>
                        <Link href='' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] ">
                            <i className="pi pi-book"></i>
                            View Document</Link>
                        <Link href='' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] ">
                            <i className="pi pi-pencil"></i>
                            Menu item</Link>
                        <Link href='/admin/property' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] ">
                            <i className="pi pi-home"></i>
                            Properties</Link>
                        <Link href='/admin/meter' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "> 
                        <Image src={"/assets/images/meter_icon_black.svg"} 
                        width={20} height={20}
                         className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" /> Meters</Link>
                        <Link href='' onClick={deleteconfirm} className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "><i className="pi pi-trash"></i> Delete Consumer</Link>
                    </div>
                </OverlayPanel>

            </div>
        );
    };

    //   data table 

    return (
        <>
            <Layout pageTitle="Customer" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[29px] xl:pr-[2.014vw]">
                    {/* Header */}
                    <div className="mt-[22px] xl:mt-[1.528vw] text-[#171A1F] text-[32px] xl:text-[2.222vw] mb-[16px] xl:mb-[1.111vw] font-bold">
                        Customer
                    </div>

                    <div className="xl:mt-[1.458vw] mt-[21px] mb-[77px] xl:mb-[5.347vw]">
                        <div className="grid grid-cols-9 gap-[30px] xl:gap-[1.083vw]">

                            {/* Total Consumers */}
                            <div className="col-span-9 xl:col-span-2 p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Consumers</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">2,345 <span className="text-[#1DD75BFF] text-[16px] xl:text-[1.111vw] font-bold">16% <i className="pi pi-arrow-up" style={{ fontSize: '14px' }}></i></span></div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/customers_icon.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* New Consumers */}
                            <div className="col-span-9 xl:col-span-2 p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">New Consumers</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">45 <span className="text-[#FF3419FF] text-[16px] xl:text-[1.111vw] font-bold">6% <i className="pi pi-arrow-down" style={{ fontSize: '14px' }}></i></span></div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/new_customers.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total properties */}
                            <div className="col-span-9 xl:col-span-2 p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="flex justify-between">
                                    <div className="">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal leading-6 mb-[10px]">Total Properties</div>
                                        <div className="text-[#fff] text-[32px] xl:text-[2.222vw] font-semibold leading-6">3,045 <span className="text-[#1DD75BFF] text-[16px] xl:text-[1.111vw] font-bold">16% <i className="pi pi-arrow-up" style={{ fontSize: '14px' }}></i></span></div>
                                    </div>
                                    <div>
                                        <div className="bg-[#424856] rounded-full p-[11px]">
                                            <Image src={"/assets/images/home_icon_white.svg"} width={20} height={20}
                                                className="xl:w-[1.042vw] xl:h-[1.042vw] w-[20px] h-[20px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Utility Wise Consumers */}
                            <div className="col-span-9 xl:col-span-3 p-[20px] xl:p-[1.389vw] bg-[#323743] shadow1 rounded-[20px] xl:rounded-[1.042vw] border-bottom-red">
                                <div className="">
                                    <div className="flex items-center justify-between mb-[9px]">
                                        <div className="text-[#fff] text-[16px] xl:text-[1.111vw] font-normal">Utility Wise Consumers</div>
                                        <div className="">
                                            <div className="bg-[#fff] flex items-center justify-between rounded-full p-[2px] ">
                                                <div onClick={() => setActiveTab2(1)} className={`${activeTab2 === 1 ? 'text-[#fff] bg-[#060D1E]' : 'text-[#060D1E] '} text-[11px] xl:text-[0.664vw] font-normal py-[3px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>All</div>
                                                <div onClick={() => setActiveTab2(2)} className={`${activeTab2 === 2 ? 'text-[#fff] bg-[#060D1E]' : 'text-[#060D1E] '} text-[11px] xl:text-[0.664vw] font-normal py-[3px] px-[19px] xl:px-[0.99vw] cursor-pointer rounded-full`}>Active</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 xl:gap-[0.833vw]">
                                        <div className="flex items-center gap-[1px]">
                                            <Image
                                                src={"/assets/images/electricity_icon.svg"}
                                                width={20} height={20}
                                                className="inline-block xl:w-[1.042vw] xl:h-[1.342vw] w-[20px] h-[20px]" alt="" />
                                            <div className="text-[#fff] text-[20px] xl:text-[1.389vw] font-semibold">
                                                3045
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <Image
                                                src={"/assets/images/drop_icon.svg"}
                                                width={20} height={20}
                                                className="inline-block xl:w-[1.342vw] xl:h-[1.342vw] w-[20px] h-[20px]" alt="" />
                                            <div className="text-[#fff] text-[20px] xl:text-[1.389vw] font-semibold">
                                                3045
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <Image
                                                src={"/assets/images/gas_icon_green.svg"}
                                                width={20} height={20}
                                                className="inline-block xl:w-[1.342vw] xl:h-[1.342vw] w-[20px] h-[20px]" alt="" />
                                            <div className="text-[#fff] text-[20px] xl:text-[1.389vw] font-semibold">
                                                3045
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <Image
                                                src={"/assets/images/shower_icon.svg"}
                                                width={20} height={20}
                                                className="inline-block xl:w-[1.342vw] xl:h-[1.342vw] w-[20px] h-[20px]" alt="" />
                                            <div className="text-[#fff] text-[20px] xl:text-[1.389vw] font-semibold">
                                                3045
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[1px]">
                                            <Image
                                                src={"/assets/images/shower_icon.svg"}
                                                width={20} height={20}
                                                className="inline-block xl:w-[1.342vw] xl:h-[1.342vw] w-[20px] h-[20px]" alt="" />
                                            <div className="text-[#fff] text-[20px] xl:text-[1.389vw] font-semibold">
                                                3045
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="min-h-[30.153vw]">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-b-[#F3F4F6FF]">
                            <div className="flex items-center">
                                <div onClick={() => setActiveTab(0)} className={`${activeTab === 0 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    All (2345)
                                </div>
                                <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    Active (2000)
                                </div>
                                <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    Inactive (345)
                                </div>
                            </div>
                            <div className="flex gap-[28px] xl:gap-[1.944vw]">
                                <div className="cust_search">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText placeholder="Search" />
                                    </span>
                                </div>
                                <div className="cust_dropdown">
                                    <Dropdown
                                        value={selectedMeterStatus}
                                        onChange={(e) => setSelectedMeterStatus(e.value)}
                                        options={MeterStatus}
                                        optionLabel="name"
                                        placeholder="Meter status"
                                        className="w-full"
                                    />
                                </div>
                                <button className="custmBtn red radiusFull mb-2" >
                                    <i className="pi pi-check"></i><span className="pl-2">Find</span>
                                </button>
                            </div>
                        </div>
                        <div className="mb-10 xl:mb-[2.778vw]">
                            {activeTab === 0 ? 
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox"
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
                                    field="operator"
                                    header="OPERATOR"
                                    body={OperatorBody}
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="address"
                                    header="ADDRESS"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="contact"
                                    header="CONTACT"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="sources"
                                    header="SOURCES"
                                    style={{ minWidth: "15rem" }}
                                ></Column>
                                <Column
                                    field="createdon"
                                    header="CREATED ON"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="status"
                                    body={StatusStyle}
                                    align="center"
                                    header="STATUS"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                                <Column
                                    field=""
                                    header=""
                                    align='center'
                                    body={actionTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                            </DataTable>
                            :null
                            }
                            {activeTab === 1 ? 
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox"
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
                                    field="operator"
                                    header="OPERATOR"
                                    body={OperatorBody}
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="address"
                                    header="ADDRESS"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="contact"
                                    header="CONTACT"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="sources"
                                    header="SOURCES"
                                    style={{ minWidth: "15rem" }}
                                ></Column>
                                <Column
                                    field="createdon"
                                    header="CREATED ON"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="status"
                                    body={StatusStyle}
                                    align="center"
                                    header="STATUS"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                                <Column
                                    field=""
                                    header=""
                                    align='center'
                                    body={actionTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                            </DataTable>
                            :null
                            }
                            {activeTab === 2 ? 
                            <DataTable value={products}
                                className="custTable tableCust custCheckBox"
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
                                    field="operator"
                                    header="OPERATOR"
                                    body={OperatorBody}
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="address"
                                    header="ADDRESS"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="contact"
                                    header="CONTACT"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="sources"
                                    header="SOURCES"
                                    style={{ minWidth: "15rem" }}
                                ></Column>
                                <Column
                                    field="createdon"
                                    header="CREATED ON"
                                    style={{ minWidth: "10rem" }}
                                ></Column>
                                <Column
                                    field="status"
                                    body={StatusStyle}
                                    align="center"
                                    header="STATUS"
                                    style={{ minWidth: "8rem" }}
                                ></Column>
                                <Column
                                    field=""
                                    header=""
                                    align='center'
                                    body={actionTemplate}
                                    style={{ minWidth: "5rem" }}
                                ></Column>
                            </DataTable>
                            :null
                            }
                        </div>
                    </div>
                </div>
                <ManagePermissionPopup
                    visible={managePermissionShow}
                    onHides={() => setManagePermissionShow(false)}
                />
                <AddNewOperatorPopup
                    visible={addnewOperatorShow}
                    onHides={() => setAddNewOperatorShow(false)}
                />
                <EditConsumerPopup
                    visible={editConsumerShow}
                    onHides={() => setEditConsumerShow(false)}
                />
                <ConfirmDialog />
                <ToastContainer autoClose={500} />
            </Layout>
        </>
    );
}