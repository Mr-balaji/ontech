import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function BarWithLineChart({ data,legend,grid,min1,max1,interval1,min2,max2,interval2, yAxisName1,yAxisName2,barColor, xAxisLableColor, splitLineShow }) {

    const option = {
        tooltip: { trigger: "axis" },
        legend: legend,
        grid: grid,
        xAxis: [
            {
                type: 'category',
                data: ['15', '16', '17', '18', '19', '20', '21'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3"
                    }
                },
                axisTick: {show: false},
                axisLabel: { color: "#363A44"}
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: min1,
                max: max1,
                interval: interval1,
                name: yAxisName1,
                nameTextStyle:{
                    color:'#171A1FFF',
                    align: "right",
                    fontSize:14,
                    fontWeight:700
                },
                axisLabel: {
                    formatter: '{value}',
                    color: "#363A44"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3"
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dotted",
                        color: "#EDEEF1"
                    }
                }
            },
            {
                type: 'value',
                min: min2,
                max: max2,
                interval: interval2,
                name: yAxisName2,
                nameTextStyle:{
                    color:'#171A1FFF',
                    fontSize:14,
                    fontWeight:700
                },
                axisLabel: {
                    formatter: '{value}',
                    color: "#363A44"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#EAEDF3"
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                name: 'Revenue',
                data: data.value1,
                type: 'bar',
                color: barColor[0],
                label: {
                    show: false,
                }
            },
            {
                name: 'Utilization',
                yAxisIndex: 1,
                data: data.value2,
                type: 'line',
                showSymbol: false,
                smooth: true,
                color: barColor[1],
                label: {
                    show: false,
                }
            }
        ]
    };

    return (
        <div>
            <ReactEcharts
                echarts={echarts}
                style={{ width: '100%', height: '250px' }}
                option={option}
            />
        </div>
    );
}