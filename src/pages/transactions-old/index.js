import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect,useRef  } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export default function index() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
   const toast = useRef(null);
   const [rowClick, setRowClick] = useState(true);
   const [selectedProducts, setSelectedProducts] = useState(null);
 




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
          id: "MA-11111",
          byname: "Jhon Smith",
          Ondate: "05/11/2023",
          lastestlead: "+ R100.00",
          subcategory: "-",
          marketSource: 'IDC',
          description: 'Wallet Topup',
          property: 'Sandtone Home',
          Usage: 'Water Usage',
          qarter: 'Q2',
          type: 'Historical',
          generatedOn: '07/05/2023',
          dummyname: 'Alex',
          Status: 'Debit',
          publishedDate: '07/07/2023',
          lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11112",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11113",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11115",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11116",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11117",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Open',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11118",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11111",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11111",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Open',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11111",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
      {
         id: "MA-11111",
         byname: "Jhon Smith",
         Ondate: "05/11/2023",
         lastestlead: "+ R100.00",
         subcategory: "-",
         marketSource: 'IDC',
         description: 'Wallet Topup',
         property: 'Sandtone Home',
         Usage: 'Water Usage',
         qarter: 'Q2',
         type: 'Historical',
         generatedOn: '07/05/2023',
         dummyname: 'Alex',
         Status: 'Credit',
         publishedDate: '07/07/2023',
         lastUpdated: '07/07/2023',
      },
  ];

  const StatusStyle = (rawData) => {
      if (rawData.Status === 'Debit') {
          return (
              <>
                  <div className="flex items-center justify-center text-[14px] xl:text-[0.825vw] font-medium text-[#EC3237] bg-[#FEF1F1] py-[8px] xl:py-[0.408vw] px-[12px] xl:px-[0.825vw]  rounded-full xl:rounded-[0.833vw] gap-2">
                      
                      <div>{rawData.Status}</div>
                  </div>
              </>
          )
      } else if (rawData.Status === 'Credit') {
          return (
              <>
                  <div className="flex items-center justify-center text-[14px] xl:text-[0.825vw] font-medium text-[#117B34]  bg-[#EEFDF3]  py-[8px] xl:py-[0.408vw] px-[12px] xl:px-[0.825vw] rounded-full xl:rounded-[0.833vw] gap-2">
                     
                      <div>{rawData.Status}</div>
                  </div>
              </>
          )
      } else {
          return (
              <>

              </>
          )
      }

  }



  const actionTemplate = (product) => {
      return (
        <div className="flex items-center justify-center gap-4  ">
            <Link href={""} className="leading-none">
            <i className="pi pi-eye text-[18px]" ></i>
            </Link>
            <Link href='' className="leading-none">
            <i className="pi pi-pencil text-[18px]"></i>
            </Link>
            <Link href='' className="leading-none">
            <i className="pi pi-trash text-[18px] "></i>
            </Link>
           
        </div>
      );
    };
  // Data table 
  
 
  
   return (
      <>
         <Layout pageTitle="My Transactions" >
            <div className="xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1">
               <div className="flex flex-wrap justify-between items-center">
                  <h2 className="text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold ">My Transactions</h2>

                  <div className="flex gap-3 items-center">
                     <Link href='' onClick={() => setVisible(true)} className="px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full"><i className="pi pi-credit-card text-[14px] mr-2"></i>GO TO TRANSACTIONS</Link>


                  </div>
               </div>
               <div className="xl:my-[2.083vw] my-[20px] ">
               <div className="overflow-hidden">
                   
                    <div>
                        <DataTable value={products}
                            className="custTable tableCust custCheckBox"
                            scrollable
                            responsiveLayout="scroll"
                            style={{ width: "100%" }}
                            paginator
                            paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                            currentPageReportTemplate="Rows per page {first}-{last} of {totalRecords}"
                            rows={10}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            selectionMode={rowClick ? null : 'checkbox'}
                            selection={selectedProducts}
                            dataKey="id"
                        >


                            <Column
                                selectionMode="multiple"
                                headerStyle={{ width: '1rem' }}
                            ></Column>
                            <Column
                                field="id"
                                header="Report ID"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="byname"
                                header="By"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="Ondate"
                                header=" On"
                                sortable
                                style={{ minWidth: "15rem" }}
                            ></Column>
                            <Column
                                field="lastestlead"
                                header="Lastest Lead"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="subcategory"
                                header="Sub-Category"
                                sortable
                                style={{ minWidth: "15rem" }}
                            ></Column>
                            <Column
                                field="marketSource"
                                header="Market Source"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="description"
                                header="Description"
                                sortable
                                style={{ minWidth: "25rem" }}
                            ></Column>
                            <Column
                                field="property"
                                header="Property"
                                sortable
                                style={{ minWidth: "9rem" }}
                            ></Column>
                            <Column
                                field="Usage"
                                header="Usage"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="qarter"
                                header="qarter"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="generatedOn"
                                header="Generated On"
                                sortable
                                style={{ minWidth: "12rem" }}
                            ></Column>
                            <Column
                                field="dummyname"
                                header="Dummy Name"
                                sortable
                                style={{ minWidth: "12rem" }}
                            ></Column>
                            <Column
                                field="SBUStatus"
                                body={StatusStyle}
                                header="SBU Status"
                                sortable
                                style={{ minWidth: "8rem" }}
                            ></Column>
                          
                            <Column
                                field="publishedDate"
                                header="Published Date"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="lastUpdated"
                                header="Last Updated"
                                sortable
                                style={{ minWidth: "10rem" }}
                            ></Column>
                            <Column
                                field="action"
                                header="Action"
                                frozen
                                alignFrozen="right"
                                align='center'
                                className='action-shadow-table'
                                body={actionTemplate}
                                style={{ minWidth: "8rem" }}
                            ></Column>
                        </DataTable>
                    </div>
                </div>
                 
               </div>


              
            </div>

            
         </Layout>
      </>
   );
}