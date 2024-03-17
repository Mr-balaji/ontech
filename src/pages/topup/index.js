import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Layout from "../../components/layout/layout";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import PaymentSucess from "@/components/popups/paymentsucess";

export default function index() {
    const [paymentSucess, setPaymentSucess] = useState(false);
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
            <Layout pageTitle="Top up" >
                <div className="xl:px-[1.042vw] px-2">
                    <div className="flex flex-wrap justify-between mb-[28px] xl:mb-[1.458vw]">
                        <h2 className="text-[#171A1F] text-[20px] xl:text-[1.806vw] font-semibold ">Topup: 123456767</h2>
                        <div className="flex gap-3 items-center">
                            <label className="text-[#171A1F] text-[16px] xl:text-[1.528vw] font-semibold block">Change Property: </label>
                            <div className="place_dropdown relative">
                                <Dropdown value={selectedProperty} onChange={(e) => setSelectedProperty(e.value)} options={Property} optionLabel="name"
                                    placeholder="Select a Property" className="w-full md:w-14rem xl:w-[17.361vw]" />
                                <div className="absolute top-2 left-2">
                                    <Image src={"/assets/images/home_icon.svg"} width={24} height={24}
                                        className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-[42px] xl:gap-[2.188vw] mb-[120px] xl:mb-[6.25vw]">
                        {/* col  */}
                        <div className="xl:col-span-7 col-span-12 text-center">
                            <div className="bg-[#FFFFFF] topup_card_shadow rounded-[2px] pt-[45px] xl:pt-[2.344vw] pb-[57px] xl:pb-[2.969vw]">
                                <div className="text-[#323743] text-[14px] xl:text-[0.833vw] font-bold">TOPUP AMOUNT</div>
                                <h2 className="text-[#171A1F] text-[32px] xl:text-[1.867vw] font-semibold mb-[45px] xl:mb-[2.444vw]">R 300.00</h2>
                                <div className="inline-block">
                                    <div className="flex items-center gap-[24px] xl:gap-[1.25vw] topup_card_shadow px-[10px] py-[11px] xl:px-[0.521vw] xl:py-[0.573vw]">
                                        <div className="bg-[#FEF1F1] text-[#EC3237] text-[14px] xl:text-[0.829vw] font-medium rounded-[4px] leading-5 px-[12px] xl:px-[0.625vw] py-[7px] xl:py-[0.365vw] cursor-pointer">R15.00</div>
                                        <div className="bg-[#FEF1F1] text-[#EC3237] text-[14px] xl:text-[0.829vw] font-medium rounded-[4px] leading-5 px-[12px] xl:px-[0.625vw] py-[7px] xl:py-[0.365vw] cursor-pointer">R150.00</div>
                                        <div className="bg-[#FEF1F1] text-[#EC3237] text-[14px] xl:text-[0.829vw] font-medium rounded-[4px] leading-5 px-[12px] xl:px-[0.625vw] py-[7px] xl:py-[0.365vw] cursor-pointer">R1,500.00</div>
                                        <div className="bg-[#FEF1F1] text-[#EC3237] text-[14px] xl:text-[0.829vw] font-medium rounded-[4px] leading-5 px-[12px] xl:px-[0.625vw] py-[7px] xl:py-[0.365vw] cursor-pointer">R2000.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* col  */}
                        <div className="xl:col-span-5 col-span-12">
                            <div className="bg-[#FFFFFF] px-[55px] xl:px-[2.865vw] pt-[31px] xl:pt-[1.615vw] pb-[17px] xl:pb-[0.885vw] rounded-[2px] topup_card_shadow">
                                {/* form  */}
                                <div className="text-[#565D6D] text-[14px] xl:text-[0.833vw] font-semibold leading-5 mb-[12px] xl:mb-[0.625vw]">Select from Saved Cards</div>
                                <div className="place_dropdown card_dropdown relative mb-[23px] xl:mb-[1.198vw]">
                                    <Dropdown 
                                        value={selectedCard} 
                                        onChange={(e) => setSelectedCard(e.value)} 
                                        options={Card} 
                                        optionLabel="name"
                                        placeholder="XXXX XXXX XXXX  2334" 
                                        className="w-full" />
                                    <div className="absolute top-2 left-2">
                                        <Image src={"/assets/images/visa_image.svg"} width={24} height={24}
                                            className="xl:w-[1.667vw] xl:h-[1.667vw]" alt="" />
                                    </div>
                                </div>
                                <div className="customInput mb-[23px] xl:mb-[1.198vw]">
                                    <InputText
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Card Holder Name"
                                        className="w-full"
                                    />
                                </div>
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
                                <div className="customInput mb-[13px] xl:mb-[0.677vw]">
                                    <Calendar
                                        value={date}
                                        onChange={(e) => setDate(e.value)}
                                        dateFormat="mm/yy"
                                        placeholder="MM/YYYY"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-[20px] xl:mb-[1.042vw]">
                                    <div className="mb-1">
                                        <Checkbox
                                            onChange={(e) => setChecked(e.checked)}
                                            checked={checked}
                                        ></Checkbox>
                                    </div>
                                    <div className="text-[#565D6D] text-[14px] xl:text-[0.833vw] font-normal leading-5 ">Securely save for future transactions</div>
                                </div>
                                <div className="text-[#565D6D] text-[14px] xl:text-[0.833vw] font-normal leading-5 mb-2">Other Payment Methods</div>
                                <div className="flex items-center justify-between gap-[13px] xl:pap-[0.677vw] border border-[#DEE1E6] rounded-[2px] bg-[#fff] px-[13px] xl:px-[0.677vw] py-[18px] xl:py-[0.938vw] mb-[14px] xl:mb-[0.729vw]">
                                    <div className="flex items-center  gap-[13px] xl:pap-[0.677vw]">
                                        <Image
                                            src={"/assets/images/paypal.svg"}
                                            width={50} height={70}
                                            className="xl:w-[2.604vw] w-[50px] " alt=""
                                        />

                                        <label htmlFor="ingredient1" className="text-[#323743] text-[14px] xl:text-[0.833vw] font-normal leading-5 cursor-pointer">abc@gmail.com</label>
                                        <div className="custRadio">
                                        </div>
                                    </div>
                                    <div className="custRadio flex items-center">
                                        <RadioButton inputId="ingredient1" name="payment" value="Paypal" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Paypal'} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mb-[12px] xl:mb-[0.625vw]">
                                    <Link onClick={() => setPaymentSucess(true)} href='javascrip:void(0);' className="flex items-center px-[120px] md:px-[150px] xl:px-[7.813vw] py-[12px] xl:py-[0.625vw] red text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full">
                                        <i className="pi pi-credit-card text-[14px] mr-2"></i>PAY NOW
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Link href='/addcard' className="flex items-center  py-[12px] xl:py-[0.625vw] text-[#EC3237] text-[16px] xl:text-[0.833vw] font-normal uppercase rounded-full ">
                                        <Image
                                            src={"/assets/images/card_edit_icon.svg"}
                                            width={50} height={70}
                                            className="xl:w-[1.042vw] w-[20px] mr-1" alt=""
                                        />MANAGE SAVED CARDS
                                    </Link>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
                <PaymentSucess 
                    visible={paymentSucess}
                    onHides={() => setPaymentSucess(false)}
                />
            </Layout>
        </>
    );
}