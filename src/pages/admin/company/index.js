import Image from "next/image";
import React, { useState } from "react";
import Layout from "@/components/adminlayout/layout";
import ManagePermissionPopup from "@/components/popups/admin/managepermissionspopup";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { ToastContainer, toast } from "react-toastify";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";

export default function index() {

    const [selected, setSelected] = useState(null);
    const [selected1, setSelected1] = useState(null);
    const option = [
        { name: "State 1", code: "SH1" },
        { name: "State 2", code: "SH2" },
        { name: "State 3", code: "SH3" },
        { name: "State 1", code: "SHG" },
    ];
    const option2 = [
        { name: "Country 1", code: "SH1" },
        { name: "Country 2", code: "SH2" },
        { name: "Country 3", code: "SH3" },
        { name: "Country 1", code: "SHG" },
    ];
    const onUpload = () => {
        toast.success("File Uploaded successfully");
    };

    return (
        <>
            <Layout pageTitle="Dashboard" >
                <div className="pl-[27px] xl:pl-[1.875vw] pr-[39px] xl:pr-[2.708vw]">
                    {/* Header */}
                    <div className="mt-[22px] xl:mt-[1.528vw] text-[#171A1F] text-[32px] xl:text-[2.222vw] font-bold">
                        Company Master
                    </div>

                    {/* profile */}
                    <div className="w-full xl:w-[47.014vw] px-[24px] xl:px-[1.667vw] py-[15px] xl:py-[1.042vw] bg-[#FFFFFFFF] rounded-[3px] mt-[36px] xl:mt-[2.5vw] topup_card_shadow">
                        <div className="text-[#171A1F] text-[24px] xl:text-[1.667vw] font-semibold mb-[10px]">
                            Company Image
                        </div>
                        <div className="flex items-center gap-[24px] xl:gap-[1.250vw]">
                            <div className="grid grid-cols-1 place-content-center border-2 border-dashed border-[#BDC1CAFF] rounded-[4px] h-[160px] xl:h-[11.111vw] w-[160px] xl:w-[11.111vw]">
                                <Image
                                    src={`/assets/images/dashboard-logo.png`}
                                    width={100}
                                    height={100}
                                    className=" w-full "
                                    alt=""
                                />
                            </div>
                            <div className="space-y-[8px] xl:space-y-[0.417vw]">
                                <div className="text-[#171A1F] text-[20px] xl:text-[1.389vw] font-normal">
                                    Upload new photo
                                </div>
                                <div className="text-[#565D6D] text-[16px] xl:text-[1.111vw] font-normal ">
                                    Your photo should be in PNG or JPG format
                                </div>
                                <div className="flex items-center gap-[23px] xl:gap-[1.597vw]">
                                    <button className="text-[20px] xl:text-[1.389vw] text-[#171A1F] border border-[#171A1F] bg-[#FFFFFF] p-[8px] xl:p-[0.317vw] rounded-[2px]">
                                        Choose image
                                    </button>
                                    <div className="flex custfileupload custfileupload2 adminuploadfile">
                                        <ToastContainer />
                                        <FileUpload
                                            mode="basic"
                                            name="demo[]"
                                            url="/api/upload"
                                            accept="image/*"
                                            chooseLabel="UPLOAD"
                                            chooseIcon='pi pi-upload'
                                            auto
                                            maxFileSize={1000000}
                                            onUpload={onUpload}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[34px] xl:mt-[2.361vw] xl:mb-[3.194vw] mb-[46px]">
                        <div className="grid xl:grid-cols-2 grid-cols-1">
                            <div className="py-[23px] xl:py-[1.597vw] px-[34px] xl:px-[2.361vw] bg-[#fff] rounded-[3px] topup_card_shadow">
                                <div className="text-[#171A1F] text-[24px] xl:text-[1.667vw] font-semibold mb-[10px]">
                                    Basic information
                                </div>
                                <div className="xl:space-y-[1.181vw] space-y-[17px]">
                                    <div className="grid grid-cols-2 gap-[47px] xl:gap-[3.264vw]">
                                        <div className="custom_input">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                First Name
                                            </label>
                                            <InputText
                                                placeholder="Enter first name"
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                        <div className="custom_input">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                Last name
                                            </label>
                                            <InputText
                                                placeholder="Enter last name "
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="custom_input">
                                        <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                            Company Name
                                        </label>
                                        <InputText
                                            placeholder="Enter Company name"
                                            className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                        />
                                    </div>
                                    <div className="custom_input grid grid-cols-2 gap-[47px] xl:gap-[3.264vw]">
                                        <div className="">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                Mobile
                                            </label>
                                            <InputText
                                                placeholder="Enter mobile number"
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                Email
                                            </label>
                                            <InputText
                                                placeholder="Enter email "
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="custom_input">
                                        <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                            Description
                                        </label>
                                        <InputTextarea
                                            placeholder="Type here"
                                            className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="py-[23px] xl:py-[1.597vw] px-[34px] xl:px-[2.361vw] bg-[#fff] rounded-[3px] topup_card_shadow">
                                <div className="text-[#171A1F] text-[24px] xl:text-[1.667vw] font-semibold mb-[10px]">
                                    Address
                                </div>
                                <div className="xl:space-y-[1.181vw] space-y-[17px]">
                                    <div className="custom_input">
                                        <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                            Address
                                        </label>
                                        <InputText
                                            placeholder="Enter address "
                                            className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-[47px] xl:gap-[3.264vw]">
                                        <div className="custom_dropdown col-span-1">
                                            <label className="text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block">
                                                Country
                                            </label>
                                            <Dropdown
                                                value={selected}
                                                onChange={(e) => setSelected(e.value)}
                                                options={option2}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="custom_dropdown col-span-1">
                                            <label className="text-[#424856] text-[16px] xl:text-[1.111vw] font-bold leading-8 block">
                                                State
                                            </label>
                                            <Dropdown
                                                value={selected1}
                                                onChange={(e) => setSelected1(e.value)}
                                                options={option}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="custom_input grid grid-cols-2 gap-[47px] xl:gap-[3.264vw]">
                                        <div className="custom_input">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                City
                                            </label>
                                            <InputText
                                                placeholder=""
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-[#424856] text-[14px] xl:text-[0.833vw] font-bold">
                                                ZIP
                                            </label>
                                            <InputText
                                                placeholder=" "
                                                className="placeholder:text-[#BDC1CA] placeholder:text-md w-full"
                                            />
                                        </div>
                                    </div>
                                        <div className="grid grid-cols-2 place-content-center gap-[47px] xl:gap-[3.264vw] pt-[40px] xl:pt-[2.778vw]">
                                            <Link href='' className="custmBtn red radiusFull  text-center flex justify-center">
                                            <i className="pi pi-times"></i> CANCEL
                                            </Link>
                                            <Link href='' className=" custmBtn red radiusFull  text-center flex justify-center">
                                                <i className="pi pi-check"></i> SAVE PERMISSIONS
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}