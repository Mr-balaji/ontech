import Image from "next/image";
import React, { useRef, useState } from "react";
import Layout from "@/components/adminlayout/layout";
import ManagePermissionPopup from "@/components/popups/admin/managepermissionspopup";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputSwitch } from "primereact/inputswitch";
import { OverlayPanel } from "primereact/overlaypanel";
import AddNewOperatorPopup from "@/components/popups/admin/addnewoperatorpopup";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { ToastContainer, toast } from "react-toastify";

export default function index() {
    const [managePermissionShow, setManagePermissionShow] = useState(false);
    const [addnewOperatorShow, setAddNewOperatorShow] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [checked, setChecked] = useState(false);
    const op = useRef(null);
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
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },
        {
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },{
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
        },{
            operator:'Ryan Young',
            email:'ryansmit1984@yahoo.com',
            phone:'(972) 290-7148',
            createdon:'Feb 15, 2023'
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
                            <i className="pi pi-pencil"></i>
                            Edit Opertator</Link>
                        <Link onClick={() => setManagePermissionShow(true)} href='' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "> <i className="pi pi-cog"></i>Manage Permission</Link>
                        <Link href='' onClick={deleteconfirm} className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "><i className="pi pi-trash"></i> Delete Operator</Link>
                    </div>
                </OverlayPanel>

            </div>
        );
    };

    //   data table 

    return (
        <>
            <Layout pageTitle="Operator" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[39px] xl:pr-[2.708vw]">
                    {/* Header */}
                    <div className="mt-[22px] xl:mt-[1.528vw] text-[#171A1F] text-[32px] xl:text-[2.222vw] mb-[16px] xl:mb-[1.111vw] font-bold">
                        Operators
                    </div>
                    <div className="min-h-[30.153vw]">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-b-[#F3F4F6FF]">
                            <div className="flex items-center">
                                <div onClick={() => setActiveTab(0)} className={`${activeTab === 0 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    All
                                </div>
                                <div onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    Active
                                </div>
                                <div onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? 'text-[#EC3237FF] font-bold border-b-4 border-b-[#EC3237FF]' : 'text-[#565D6DFF] font-normal border-b-4 border-b-[#fafafb]'} text-[14px] xl:text-[0.833vw] py-[11px] xl:py-[0.664vw] px-[35px] xl:px-[2.431vw] cursor-pointer`}>
                                    Inactive
                                </div>
                            </div>
                            <div>
                                <button onClick={() => setAddNewOperatorShow(true)} className="custmBtn red radiusFull mb-2" >
                                    <i className="pi pi-plus"></i><span className="pl-2">Add New Operator</span>
                                </button>
                            </div>
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
            <ConfirmDialog />
            <ToastContainer autoClose={500} />
            </Layout>
        </>
    );
}