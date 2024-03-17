import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from "primereact/toast";
import Layout from "@/components/adminlayout/layout";

export default function index() {
   const [visible, setVisible] = useState(false);
   const [checked, setChecked] = useState(false);
   const toast = useRef(null);

   const products = [
      {
         id: '1',
         code: 'f230fh0g3',
         unitnumber: '2053',
         propertyname: 'Sandtone Home',
         propertyaddress: 'Sandtone Home Address, Geneva...',
         propertyadddate: '23rd July 2023',
         propertmeters: '3',
         propertuser: '4',

      },
      {
         id: '2',
         code: 'f230fh0g3',
         unitnumber: '289',
         propertyname: 'Cape Home',
         propertyaddress: 'Consortium for Common Food Names 2107 Wilson Blvd. Suite 600',
         propertyadddate: '22th July 2023',
         propertmeters: '3',
         propertuser: '5',

      },
      {
         id: '3',
         code: 'f230fh0g3',
         unitnumber: '345',
         propertyname: 'Joberg Home',
         propertyaddress: 'Cape Home Address, Geneva...',
         propertyadddate: '22th July 2023',
         propertmeters: '4',
         propertuser: '3',

      },
      {
         id: '4',
         code: 'f230fh0g3',
         unitnumber: '567',
         propertyname: 'Sumter Way',
         propertyaddress: '101 Independence Avenue, S.E.Washington, D.C',
         propertyadddate: '22th July 2023',
         propertmeters: '4',
         propertuser: '3',

      },
      {
         id: '5',
         code: 'f230fh0g3',
         unitnumber: '567',
         propertyname: 'Capstone Walk',
         propertyaddress: '101 Independence Avenue, S.E.Washington, D.C',
         propertyadddate: '22th July 2023',
         propertmeters: '4',
         propertuser: '3',

      },
      {
         id: '6',
         code: 'f230fh0g3',
         unitnumber: '567',
         propertyname: 'Acacia Vista',
         propertyaddress: '101 Independence Avenue, S.E.Washington, D.C',
         propertyadddate: '22th July 2023',
         propertmeters: '4',
         propertuser: '3',

      },
      {
         id: '7',
         code: 'f230fh0g3',
         unitnumber: '567',
         propertyname: 'Acacia Vista',
         propertyaddress: '101 Independence Avenue, S.E.Washington, D.C',
         propertyadddate: '22th July 2023',
         propertmeters: '4',
         propertuser: '3',

      },
   ]



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
   const itemTemplate = (product) => {
      return (

         <div className="bg-[#323743] border-bottom-red xl:px-[30px] px-[10px] rounded-xl relative property-block xl:mb-[1.736vw] mb-3">
            <div className="grid grid-cols-10 lg:grid-cols-12 xl:grid-cols-12  gap-4">
               <div className="col-span-10 md:col-span-7 xl:col-span-4" >
                  <div className="flex gap-[20px] xl:gap-[2.083vw]">
                     <div className="xl:w-[6.944vw] w-[100px]">
                        <Image src={"/assets/images/property_img.svg"} width={80} height={60}
                           className="xl:w-[5.556vw] xl:h-[4.167vw] w-[80px] h-[60px] mx-auto" alt="" />
                        <div className="text-center">
                           <label className="xl:mt-[1.389vw] mt-[15px] text-[#fff] text-[10px] 
                     xl:text-[0.833vw] font-semibold leading-none text-center">UNIT NO</label>
                           <h6 className="text-[#fff] text-[10px] 
                     xl:text-[1.389vw] font-semibold leading-none text-center">{product.unitnumber}</h6>
                        </div>
                     </div>

                     <div className="xl:pt-[1.389vw] pt-[15px] xl:pb-[1.042vw] pb-[15px]">
                        <div className="flex gap-1">
                           <Image src={"/assets/images/drop_icon.svg"} width={12} height={12}
                              className="xl:w-[0.833vw] xl:h-[0.833vw] w-[12px] h-[12px]" alt="" />
                           <Image src={"/assets/images/light_icon.svg"} width={12} height={12}
                              className="xl:w-[0.833vw] xl:h-[0.833vw] w-[12px] h-[12px]" alt="" />
                           <Image src={"/assets/images/flame_icon.svg"} width={12} height={12}
                              className="xl:w-[0.833vw] xl:h-[0.833vw] w-[12px] h-[12px]" alt="" />
                        </div>
                        <h2 className="text-[#fff] text-[20px] 
                     xl:text-[1.389vw] font-semibold leading-8">{product.propertyname}</h2>
                        <p className="text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-semibold leading-4">Added on: {product.propertyadddate}</p>
                     </div>
                  </div>

               </div>
               <div className="col-span-10 md:col-span-3 xl:col-span-3 self-center" >
                  <div className="flex items-center">
                     <p className="text-[#DEE1E6] text-[14px] 
                     xl:text-[0.972vw] font-light leading-none">{product.propertyaddress}</p>
                  </div>
               </div>
               <div className="col-span-10 md:col-span-8 xl:col-span-5  ">
                  <div className="flex flex-wrap justify-between items-center h-full">

                     <div className="flex gap-[15px] xl:gap-[1.389vw] xl:pr-3 pr-0 xl:my-[0px] my-2">
                        <Link href='/meter' className="px-[10px] xl:px-[0.694vw] py-[5px] xl:py-[0.347vw] red text-[12px] xl:text-[0.833vw] font-light uppercase rounded-full flex gap-2 ">
                           <Image src={"/assets/images/check_usage_icon.svg"} width={16} height={16}
                              alt="" />CONSUMPTION</Link>
                        <Link href='/meter' className="px-[10px] xl:px-[0.694vw] py-[5px] xl:py-[0.347vw] red text-[12px] xl:text-[0.833vw] font-light uppercase rounded-full flex gap-2 ">
                           <Image src={"/assets/images/meter_white_icon.svg"} width={16} height={16}
                              alt="" />3 METERES</Link>
                        <Link href='' className="px-[10px] xl:px-[0.694vw] py-[5px] xl:py-[0.347vw] red text-[12px] xl:text-[0.833vw] font-light uppercase rounded-full flex gap-2">
                           <Image src={"/assets/images/two_white_user.svg"} width={16} height={16}
                              alt="" />2 USERS</Link>
                     </div>
                  </div>
               </div>
               <div className="absolute top-4 right-5">
                  <i className="pi pi-ellipsis-v text-[#fff] text-[14px] xl:text-[0.94vw] align-top cursor-pointer"
                     title="Select setting"
                     onClick={(e) => op.current.toggle(e)}
                  ></i>
                  <OverlayPanel ref={op} className="op">
                     <div className=" text-[#565D6D] text-[14px] xl:text-[0.972vw] font-light">
                        <Link href='' className=" flex gap-2 items-center xl:px-[1.111vw] px-[10px] xl:py-[0.556vw] py-[6px] "> <i className="pi pi-file"></i>View Documents</Link>
                     </div>
                  </OverlayPanel>
               </div>
            </div>
         </div>

      );
   };

   const op = useRef(null);
   return (
      <>
         <Layout pageTitle="My Properties" >
            <div className="xl:p-[1.667vw] p-[20px] bg-[#fff] shadow1">
               <div className="flex flex-wrap items-center gap-4 xl:gap-56">
                  <div className="flex gap-3 items-center">
                     <Link href='/admin/consumers' className="px-[16px] xl:px-[1.111vw] py-[10px] xl:py-[0.694vw] red text-[16px] xl:text-[1.111vw] font-light uppercase rounded-full"><i className="pi pi-arrow-left text-[14px] mr-2"></i>BACK TO USERS</Link>
                  </div>

                  <h2 className="text-[#565D6D] text-[18px] xl:text-[1.389vw] font-semibold ">Customer: Ryan Young</h2>
               </div>
               <div className="xl:my-[2.083vw] my-[20px] ">

                  <DataView value={products} itemTemplate={itemTemplate} paginator rows={5} filter filterPlaceholder="Search by name" />
               </div>



            </div>

            <div className="otp-popup">
               <Dialog visible={visible} breakpoints={{ '960px': '80vw', '640px': '90vw' }} style={{ width: '46vw' }} onHide={() => setVisible(false)} draggable={false} resizable={false} className="xl:w-[40vw] w-[200px] otp-popup">
                  <div className="flex justify-center text-[#171A1F] text-[20px] xl:text-[2.083vw] font-bold leading-10">
                     Add New Property
                  </div>


                  <div className="xl:mt-[2.216vw] mt-[20px] xl:px-[3.167vw] px-[20px]">
                     <div className="custom_input xl:space-y-[1.042vw] space-y-[10px]">
                        <div className="">
                           <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">Property Name</label>
                           <InputText placeholder="Enter property name" className="placeholder:text-[#BDC1CA] placeholder:text-md w-full" />
                        </div>
                        <div className="">
                           <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">Unit Number</label>
                           <InputText placeholder="Enter Unit Number or Scan Code " className="placeholder:text-[#BDC1CA] placeholder:text-md w-full" />
                        </div>
                        <div className="">
                           <label className="text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8">Unit Number</label>
                           <div className="flex gap-2 xl:gap-[1.389vw] items-center">
                              <InputText placeholder="Enter location" className="placeholder:text-[#BDC1CA] placeholder:text-md w-full" />
                              <Link href=''> <Image src={"/assets/images/location_icon.svg"} width={36} height={36} className="xl:w-[2.778vw] xl:h-[2.778vw] w-[36px] h-[36px] mx-auto" alt="" /></Link>
                           </div>
                        </div>


                     </div>
                  </div>
                  <div className="xl:mt-[2.431vw] mt-[30px] xl:px-[4.167vw] px-[20px]">
                     <div className="flex gap-1">
                        <Checkbox htmlFor="ingredient1" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label htmlFor="ingredient1" className="ml-2">Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x  x x x x x x x x x x xxx x x xx x x x x x x x x x x x x </label>
                     </div>
                  </div>


                  <div className="flex flex-wrap justify-between xl:mt-[3.463vw] mt-[20px] mx-[45px] xl:mx-[3.116vw] ">

                     {/* <Link href='' onClick={deleteconfirm} className="xl:order-1 order-2 custmBtn outline_btn font-medium  radiusFull  text-center flex justify-center xl:h-[42px]">
                        <i className="pi pi-trash mr-2"></i> DELETE PROPERTY
                     </Link> */}
                     <div className="flex flex-wrap gap-4 items-center xl:order-2 order-1 mb-2">
                        <Link href='' onClick={() => setVisible(false)} className="xl:order-1 order-2  px-4 text-center flex justify-center text-[#9095A1] mb-4">
                           CANCEL
                        </Link>
                        <Link href='/' className="xl:order-2 order-1 custmBtn red radiusFull  text-center flex justify-center mb-2">
                           <i className="pi pi-check"></i> ADD PROPERTY
                        </Link>

                     </div>

                  </div>





               </Dialog>
            </div>

            <Toast ref={toast} />
            <ConfirmDialog />
         </Layout>
      </>
   );
}