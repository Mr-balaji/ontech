import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function GaugeChart({ data, color,color2,center=['50%', '85%'],radius="108%" }) {

    const option = {
        
        series: [
            {
                type: 'gauge',
                center: center,
                radius: radius,
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                itemStyle: {
                    color: color,
                },
                progress: {
                    show: true,
                    roundCap: false,
                    width: 25
                },
                pointer: { show: false},
                axisLine: {
                    roundCap: false,
                    lineStyle: {
                        width: 25,
                        color:[
                            [0.58, color],
                            [1, color2]
                        ]
                    }
                },
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                title: {show: false},
                detail: {
                    width: '60%',
                    offsetCenter: [0, '5%'],
                    valueAnimation: true,
                    formatter: function (value) {
                        return '{completed|Completed} \n {value|' + value.toFixed(0) + '}{unit|%}';
                    },
                    rich: {
                        completed: {
                            fontSize: 12,
                            fontWeight: 400,
                            color: '#6F7787'
                        },
                        value: {
                            fontSize: 20,
                            fontWeight: 400,
                            color: '#171A1F'
                        },
                        unit: {
                            fontSize: 20,
                            fontWeight: 400,
                            color: '#171A1F'
                        }
                    }
                },
                data: data,
            }
        ]
    };

    return (
            <ReactEcharts
                echarts={echarts}
                style={{ height: '100%', width: '100%' }}
                option={option}
            />
    );
}