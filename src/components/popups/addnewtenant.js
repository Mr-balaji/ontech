import React, { Fragment, useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

export default function AddNewTenantPopup(props) {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const Property = [
        { name: "Sandtone Home", code: "SH1" },
        { name: "Sandtone Home 1", code: "SH2" },
        { name: "Sandtone Home 2", code: "SH3" },
    ];
    const [selected, setSelected] = useState(null);
    const option = [
        { name: "Mrs.", code: "SH1" },
        { name: "Ms", code: "SH2" },
        { name: "Mr", code: "SH3" },
        { name: "Miss", code: "SHG" },
    ];
    const toast = useRef(null);
    const [checked, setChecked] = useState(false);


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

    return (
      <div className='otp-popup profilepopup'>
        <Dialog
          visible={props.visible}
          onHide={() => setVisible(false)}
          draggable={false}
          resizable={false}
          className='xl:w-[40vw] w-[690px] otp-popup profilepopup'
        >
          <div className='mt-[35px] xl:mt-[1.823vw] flex justify-center text-[#171A1F] text-[20px] xl:text-[2.083vw] font-bold leading-10'>
            Add New User
          </div>

          <div className='xl:mt-[1.042vw] mt-[20px] xl:px-[2.167vw] px-[20px]'>
            <div className='xl:space-y-[0.573vw] space-y-[10px]'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                <div className='custom_dropdown'>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
                    Title <span className='text-[#EC3237]'>*</span>
                  </label>
                  <Dropdown
                    value={selected}
                    onChange={(e) => setSelected(e.value)}
                    options={option}
                    optionLabel='name'
                    placeholder='Select'
                    className='w-full md:w-[10rem] '
                  />
                </div>
                <div className='custom_input'>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    First name <span className='text-[#EC3237]'>*</span>
                  </label>
                  <InputText
                    placeholder='Enter last name '
                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                  />
                </div>
              </div>
              <div className='custom_input grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                <div className=''>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Last name <span className='text-[#EC3237]'>*</span>
                  </label>
                  <InputText
                    placeholder='Enter last name '
                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                  />
                </div>
                <div className=''>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Mobile <span className='text-[#EC3237]'>*</span>
                  </label>
                  <InputText
                    placeholder='Enter mobile number'
                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 xl:gap-[2.917vw]'>
                <div className='custom_input'>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8'>
                    Email <span className='text-[#EC3237]'>*</span>
                  </label>
                  <InputText
                    placeholder='Enter email '
                    className='placeholder:text-[#BDC1CA] placeholder:text-md w-full'
                  />
                </div>
                <div className='custom_dropdown'>
                  <label className='text-[#424856] text-[20px] xl:text-[1.111vw] font-bold leading-8 block'>
                    Select Property <span className='text-[#EC3237]'>*</span>
                  </label>
                  <Dropdown
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.value)}
                    options={Property}
                    optionLabel='name'
                    placeholder='Sandtone Home'
                    className='w-full '
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='xl:mt-[1.979vw] mt-[38px] xl:px-[2.167vw] px-[20px] mb-[42px] xl:mb-[2.188vw]'>
            <div className='flex gap-1'>
              <Checkbox
                htmlFor='ingredient1'
                onChange={(e) => setChecked(e.checked)}
                checked={checked}
                className='mt-1'
              ></Checkbox>
              <label htmlFor='ingredient1' className='ml-2'>
                Agree… xxxxx xxxxxx xxxxxx xxx xx x xx x x x x x x x x x x x xxx
                x x xx x x x x x x x x x x x x{' '}
              </label>
            </div>
          </div>

          <div className='flex flex-wrap items-center justify-between xl:px-[2.167vw] px-[20px] gap-2'>
            <Link
              href=''
              onClick={deleteconfirm}
              className=' custmBtn outline_btn font-medium radiusFull items-center flex justify-center'
            >
              <i className='pi pi-trash text-[14px] mr-2'></i> Delete Tenant
            </Link>
            <div className='flex flex-wrap gap-4 items-center  '>
              <Link
                href=''
                onClick={props.onHides}
                className=' px-4 text-center flex justify-center text-[#9095A1] '
              >
                CANCEL
              </Link>
              <Link
                href=''
                onClick={props.onHides}
                className=' custmBtn red radiusFull  text-center flex justify-center'
              >
                <i className='pi pi-check'></i> ADD TENANT
              </Link>
            </div>
          </div>
        </Dialog>

        <Toast ref={toast} />
        <ConfirmDialog />
      </div>
    );

}