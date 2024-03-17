import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

export default function index() {
    const [ingredient, setIngredient] = useState('');
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(null);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const Property = [
        { name: 'Sandtone Home', code: 'SH1' },
        { name: 'Sandtone Home 1', code: 'SH2' },
        { name: 'Sandtone Home 2', code: 'SH3' },
    ];

    const [selectedCard, setSelectedCard] = useState(null);
    const Card = [
        { name: 'XXXX XXXX XXXX  2334', code: 'SH1' },
        { name: 'XXXX XXXX XXXX  2335', code: 'SH2' },
        { name: 'XXXX XXXX XXXX  2336', code: 'SH3' },
    ];
    return (
        <>
            <Layout pageTitle="Add Card" >
                <div className="xl:px-[1.042vw] px-2">
                    <div className="grid grid-cols-12 gap-[39px] xl:gap-[2.031vw] mb-[120px] xl:mb-[6.25vw]">
                        {/* col  */}
                        <div className="xl:col-span-6 col-span-12">
                            <div className="bg-[#FFFFFF] topup_card_shadow rounded-[2px] pt-[25px] xl:pt-[1.302vw] px-[43px] xl:px-[3vw] pb-[37px] xl:pb-[1.927vw]">
                                <div className="flex items-center justify-between mb-[16px] xl:mb-[0.833vw]">
                                    <div className="text-[#565D6D] text-[20px] xl:text-[1.042vw] font-semibold leading-6">Saved Card</div>
                                    <Link href='javascrip:void(0);' className="flex items-center justify-center py-[12px] xl:py-[0.625vw] text-[#EC3237] text-[16px] xl:text-[0.899vw] font-normal">
                                        <i className="pi pi-plus text-[20px] xl:text-[1.042vw] mr-2"></i>Add new card
                                    </Link>
                                </div>

                                {/* Cards */}
                                <div className="flex flex-col gap-[30px] xl:gap-[1.563vw]">
                                    {/* col */}
                                    <div className="flex justify-between border border-[#1DD75B] rounded-[2px] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.833vw]">
                                        <div className="flex items-start gap-[20px] xl:gap-[1.042vw]">
                                            <div>
                                                <Image src={"/assets/images/visa_image.svg"} width={24} height={24}
                                                    className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                            </div>
                                            <div>
                                                <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold leading-5">1234 4567 8901 2345</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Name: Antonio Diaz</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Expiry: XX / XXXX</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[#565D6D] text-[14px] xl:text-[0.729vw] font-semibold leading-5">Deafult</div>
                                        </div>
                                    </div>

                                     {/* col */}
                                    <div className="flex justify-between border border-[#9095A1] rounded-[2px] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.833vw]">
                                        <div className="flex items-start gap-[20px] xl:gap-[1.042vw]">
                                            <div>
                                                <Image src={"/assets/images/visa_image.svg"} width={24} height={24}
                                                    className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                            </div>
                                            <div>
                                                <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold leading-5">1234 4567 8901 2345</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Name: Antonio Diaz</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Expiry: XX / XXXX</div>
                                            </div>
                                        </div>
                                        <div className="self-end">
                                            <div className="text-[#EC3237] underline text-[14px] xl:text-[0.729vw] font-semibold leading-5 cursor-pointer ">MAKE DEFAULT</div>
                                        </div>
                                    </div>
                                    
                                     {/* col */}
                                    <div className="flex justify-between border border-[#9095A1] rounded-[2px] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.833vw]">
                                        <div className="flex items-start gap-[20px] xl:gap-[1.042vw]">
                                            <div>
                                                <Image src={"/assets/images/visa_image.svg"} width={24} height={24}
                                                    className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                            </div>
                                            <div>
                                                <div className="text-[#171A1F] text-[16px] xl:text-[0.833vw] font-bold leading-5">1234 4567 8901 2345</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Name: Antonio Diaz</div>
                                                <div className="text-[#323743] text-[16px] xl:text-[0.729vw] font-normal leading-5">Expiry: XX / XXXX</div>
                                            </div>
                                        </div>
                                        <div className="self-end">
                                            <div className="text-[#EC3237] underline text-[14px] xl:text-[0.729vw] font-semibold leading-5 cursor-pointer">MAKE DEFAULT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* col  */}
                        <div className="xl:col-span-6 col-span-12">
                            <div className="bg-[#FFFFFF] px-[60px] xl:px-[3.125vw] pt-[25px] xl:pt-[1.302vw] pb-[28px] xl:pb-[1.458vw] rounded-[2px] topup_card_shadow">
                                {/* form  */}
                                <div className="text-[#565D6D] text-[20px] xl:text-[1.042vw] font-semibold leading-6 mb-[12px] xl:mb-[0.625vw]">Add New Card</div>
                                <div>
                                    <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-normal leading-5 mb-[6px]">Card holder</div>
                                    <div className="customInput mb-[23px] xl:mb-[1.198vw]">
                                        <InputText
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Your name"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-normal leading-5 mb-[6px]">Card number</div>
                                    <div className="customInput mb-[23px] xl:mb-[1.198vw]">
                                        <div className="p-inputgroup flex-1">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-credit-card"></i>
                                            </span>
                                            <InputText
                                                value={value1}
                                                onChange={(e) => setValue1(e.target.value)}
                                                placeholder="XXXX XXXX XXXX XXXX"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-[25px] xl:mb-[1.302vw]">
                                    <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-normal leading-5 mb-[6px]">Valid until</div>
                                    <div className="customInput">
                                        <Calendar
                                            value={date}
                                            onChange={(e) => setDate(e.value)}
                                            dateFormat="mm/yy"
                                            placeholder="MM/YYYY"
                                        />
                                    </div>
                                </div>

                                <div className="mb-[31px] xl:mb-[1.615vw]">
                                    <div className="flex items-center gap-2 mb-[12px] xl:mb-[0.625vw]">
                                        <div className="mb-1">
                                            <Checkbox
                                                onChange={(e) => setChecked(e.checked)}
                                                checked={checked}
                                            ></Checkbox>
                                        </div>
                                        <div className="text-[#171A1F] text-[14px] xl:text-[0.833vw] font-normal leading-5 underline">Accept the <Link className="underline text-[#379AE6]" href={'javascrip:void(0);'}>Term and Conditions</Link></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="mb-1">
                                            <Checkbox
                                                onChange={(e) => setChecked(e.checked)}
                                                checked={checked}
                                            ></Checkbox>
                                        </div>
                                        <div className="text-[#171A1F] text-[14px] xl:text-[0.833vw] font-normal leading-5 ">Use as default payment method</div>
                                    </div>
                                </div>

                                <div className="px-5">
                                    <div className="grid grid-cols-2 gap-[34px] xl:gap-[1.771vw] mb-[21px] xl:mb-[1.094vw]">
                                        <Link href='javascrip:void(0);' className="flex items-center justify-center py-[12px] xl:py-[0.625vw] red text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full">
                                            <i className="pi pi-times text-[14px] mr-2"></i>CANCEL
                                        </Link>
                                        <Link href='javascrip:void(0);' className="flex items-center justify-center py-[12px] xl:py-[0.625vw] red text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full">
                                            <i className="pi pi-check text-[14px] mr-2"></i>ADD CARD
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-center py-[12px] xl:py-[0.625vw] text-[#EC3237] border border-[#EC3237] text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full cursor-pointer">
                                        <i className="pi pi-trash text-[14px] mr-2"></i>Delete CARD
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