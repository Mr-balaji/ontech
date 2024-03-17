import Image from "next/image";
import React, { useState } from "react";
import GaugeChart from "@/components/charts/gaugechart";
import PieChart from "@/components/charts/piechart";
import MultipleLinecharts from "@/components/charts/multiplelinechart";
import BarWithLineChart from "@/components/charts/barwithlinechart";


export default function Water() {

    const UtilitySalesData = {
        label: ['15', '16', '17', '18', '19', '20', '21'],
        value1: [88, 32, 12, 34, 90, 30, 20],
        value2: [50, 20, 20, 10, 40, 20, 30],
        value3: [25, 45, 40, 36, 20, 60, 30],
        value4: [10, 35, 20, 46, 30, 20, 40],
        value5: [45, 40, 18, 25, 40, 60, 50]
    }
    const ConsumptionAndRevenueData = {
        label: ['15', '16', '17', '18', '19', '20', '21'],
        value1: [500, 625, 930, 850, 625, 930, 850],
        value2: [1, 2.2, 2, 1, 1.2, 2, 4],
    }
    return (
        <>
            <div className="xl:mt-[2.292vw] mt-[33px] mb-[34px] xl:mb-[2.361vw]">
                <div className="grid grid-cols-10 gap-[31px] xl:gap-[1.615vw]">

                    <div className="xl:col-span-3 col-span-12 bg-[#FFFFFF] border border-[#F3F4F6FF] p-[23px] xl:p-[1.597vw] rounded-[2px]">
                        <div className="bg-[#FFCA4F12] rounded-[4px] p-2 w-full relative">
                            <Image src={"/assets/images/drop_icon_big.svg"}
                                width={34}
                                height={43}
                                className="absolute top-4 left-5 w-[34px] xl:w-[1.771vw] h-[43px] xl:h-[2.240vw]" alt="" />
                            <div className="h-[160px] xl:h-[10.111vw]">
                                <GaugeChart
                                    radius='120%'
                                    center={['50%', '75%']}
                                    color={'#51c0e1'}
                                    color2={'#d3ecee'}
                                    data={[{ value: 72 }
                                    ]}
                                />
                            </div>
                            <div className="text-center text-[#000] text-[20px] xl:text-[1.042vw] font-bold leading-6 mb-[22px] xl:mb-[1.146vw]">17Liter / <span className="font-normal">25Liter</span></div>
                        </div>
                        <div className="rounded-[2px] border border-[#F3F4F6FF] bg-[#FAFAFBFF] p-[16px] xl:p-[1.111vw] mt-[20px] xl:mt-[1.389vw]">
                            <div className="flex items-center justify-between gap-1">
                                <div className="text-[#000] text-[20px] xl:text-[1.042vw] font-bold">Utilization</div>
                                <div className="text-[#000] text-[20px] xl:text-[1.042vw] font-bold">17 Liter</div>
                            </div>
                            <div className="flex items-center justify-between gap-1">
                                <div className="text-[#000] text-[20px] xl:text-[1.042vw] font-bold">Total Sale</div>
                                <div className="text-[#000] text-[20px] xl:text-[1.042vw] font-bold">R12,324</div>
                            </div>
                        </div>
                    </div>

                    {/* col  */}
                    <div className="xl:col-span-3 col-span-12 bg-[#FFFFFF] border border-[#F3F4F6FF]">
                        <div className="py-[15px] xl:py-[0.833vw] px-[14px] xl:px-[0.972vw] rounded-[2px]">
                            <div className="h-[21.072vw]">
                                <PieChart
                                    title={'Water\nSources'}
                                    color={['#1a99ee', '#bdc1ca']}
                                    legend={{
                                        icon: 'circle',
                                        bottom: '-6',
                                        itemWidth: 10,
                                        itemHeight: 10,
                                    }}
                                    center={['50%', '45%']}
                                    radius={['60%', '85%']}
                                    data={[
                                        { value: 65, name: 'Munciple' },
                                        { value: 35, name: 'Alternative' },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* col */}
                    <div className="xl:col-span-4 col-span-12 bg-[#FFFFFF] border border-[#F3F4F6FF]">
                        <div className="py-[20px] xl:py-[1.389vw] px-[20px] xl:px-[1.389vw] rounded-[2px]">
                            <div className="border border-[F3F4F6FF] rounded-[2px] mb-[20px] xl:mb-[1.389vw]">
                                <div className="px-[24px] xl:px-[1.667vw] py-[24px] xl:py-[1.319vw] border-b border-b-[#F3F4F6FF]">
                                    <div className="flex flex-wrap items-center gap-[23px] xl:gap-[1.597vw]">
                                        <div className="flex justify-center items-center w-[58px] xl:w-[4.028vw] h-[58px] xl:h-[4.028vw] rounded-full border border-[#F9C1C3FF] bg-[#FEF1F1FF]">
                                            <Image src={"/assets/images/customers_image.svg"}
                                                width={32}
                                                height={32}
                                                className="w-[32px] xl:w-[2.222vw] h-[32px] xl:h-[1.922vw]" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-[#323743FF] text-[16px] xl:text-[1.111vw] font-normal">
                                             New Consumers
                                            </div>
                                            <div className="text-[#323743FF] text-[24px] xl:text-[1.667vw] font-semibold">
                                                152,293
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[24px] xl:pl-[1.667vw] pt-[9px] xl:pt-[0.625vw] xl:pr-[1.25vw] pr-[18px] pb-[8px] xl:pb-[0.556vw]">
                                    <div className="flex flex-wrap items-center gap-[23px] xl:gap-[1.597vw]">
                                        <div className="flex justify-center items-center bg-[#EEFDF3FF] text-[#117B34FF] rounded-[14px] xl:rounded-[0.972vw] text-[12px] xl:text-[0.833vw] font-normal p-[6px] xl:p-[0.417vw]">
                                            <i className="pi pi-arrow-up pr-1" style={{ fontSize: '12px' }}></i> 25%
                                        </div>
                                        <div className="text-[#323743FF] text-[12px] xl:text-[0.833vw] font-normal">
                                            new consumers compared to average last year
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[F3F4F6FF] rounded-[2px]">
                                <div className="px-[24px] xl:px-[1.667vw] py-[24px] xl:py-[1.319vw] border-b border-b-[#F3F4F6FF]">
                                    <div className="flex flex-wrap items-center gap-[23px] xl:gap-[1.597vw]">
                                        <div className="flex justify-center items-center w-[58px] xl:w-[4.028vw] h-[58px] xl:h-[4.028vw] rounded-full border border-[#FCEDC3FF] bg-[#FEF9EDFF]">
                                            <Image src={"/assets/images/home_icon_yellow.svg"}
                                                width={32}
                                                height={32}
                                                className="w-[32px] xl:w-[2.222vw] h-[32px] xl:h-[1.922vw]" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-[#323743FF] text-[16px] xl:text-[1.111vw] font-normal">
                                                Properties Added
                                            </div>
                                            <div className="text-[#323743FF] text-[24px] xl:text-[1.667vw] font-semibold">
                                                2.140
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[24px] xl:pl-[1.667vw] pt-[9px] xl:pt-[0.625vw] xl:pr-[1.25vw] pr-[18px] pb-[8px] xl:pb-[0.556vw]">
                                    <div className="flex flex-wrap items-center gap-[23px] xl:gap-[1.597vw]">
                                        <div className="flex justify-center items-center bg-[#FDF2F2FF] text-[#DE3B40FF] rounded-[14px] xl:rounded-[0.972vw] text-[12px] xl:text-[0.833vw] font-normal p-[6px] xl:p-[0.417vw]">
                                            <i className="pi pi-arrow-down pr-1" style={{ fontSize: '12px' }}></i> 25%
                                        </div>
                                        <div className="text-[#323743FF] text-[12px] xl:text-[0.833vw] font-normal">
                                            new properties compared to average last year
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[28px] xl:gap-[1.944vw] mb-[27px] xl:mb-[1.875vw]">
                <div className="p-[24px] xl:p-[1.667vw] bg-[#fff]">
                    <div className="text-[#323743FF] text-[20px] xl:text-[1.389vw] font-bold ">
                        Utility Wise Sale
                    </div>
                    <div className="h-[230px] xl:h-[15.972vw] w-full">
                        <MultipleLinecharts
                            legend={{
                                show: true,
                                icon: 'circle',
                                top: 35,
                                left: 'center',
                                itemWidth: 10,
                                itemHeight: 10,
                            }}
                            grid={{
                                bottom: 35,
                                top: 80,
                                right: 10
                            }}
                            yAxisLabel={{
                                show: true,
                                formatter: '{value}K'
                            }}
                            min={0} interval={25} max={100}
                            data={UtilitySalesData}
                            color={['#f5c747', '#1a99ee', '#1dd75b', '#ec3237', '#f59195']}
                        />

                    </div>
                </div>
                <div className="p-[24px] xl:p-[1.667vw] bg-[#fff]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-[#323743FF] text-[20px] xl:text-[1.389vw] font-bold ">
                            Consumption (Liter) & Revenue (Thousand)
                        </div>
                        <div className="text-[#EC3237FF] text-[16px] xl:text-[1.111vw] font-normal cursor-pointer">
                            View All
                        </div>
                    </div>
                    <div className="h-[230px] xl:h-[15.972vw] w-full">
                        <BarWithLineChart
                            legend={{
                                show: true,
                                bottom: 0,
                                left: 0,
                                data: [
                                    { name: 'Revenue', icon: 'circle', },
                                    { name: 'Utilization', }],
                                itemWidth: 10,
                                itemHeight: 10,
                                textStyle: {
                                    fontSize: 10,
                                    color: 'rgba(108, 118, 139, 1)',
                                    fontWeight: "400"
                                },
                            }}
                            grid={{
                                left: 20,
                                right: 20,
                                top: 50,
                                bottom: 35,
                                containLabel: true,
                            }}
                            min1={0}
                            max1={1000}
                            interval1={200}
                            min2={0}
                            max2={4}
                            interval2={1}
                            yAxisName1={'Liter'}
                            yAxisName2={'R'}
                            barColor={['#EC3237FF', '#1A99EEFF']}
                            data={ConsumptionAndRevenueData}
                        />

                    </div>
                </div>
            </div>


        </>
    );
}