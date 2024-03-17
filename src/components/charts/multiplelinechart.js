import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function MultipleLinecharts({ data,legend,grid,yAxisLabel,min,interval,max,color}) {

  const option = {
    legend: legend,
    grid:grid,
    xAxis: {
      type: 'category',
      data: data.label,
      axisLine: { show: false},
      axisTick: {show: false,},
    },
    yAxis: {
      type: 'value',
      min:min,
      interval:interval,
      max:max,
      axisLabel: yAxisLabel,
      splitLine: {
        show: true,
        lineStyle:{
          color:'#DEE1E6'
        }
      },
    },
    series: [
      {
        name:'Electricity',
        color:color[0],
        data: data.value1,
        type: 'line',
        showSymbol: false,
        smooth: true
      },
      {
        name:'Water',
        color:color[1],
        data: data.value2,
        type: 'line',
        showSymbol: false,
        smooth: true
      },
      {
        name:'Gas',
        color:color[2],
        data: data.value3,
        type: 'line',
        showSymbol: false,
        smooth: true
      },
      {
        name:'Hot Water',
        color:color[3],
        data: data.value4,
        type: 'line',
        showSymbol: false,
        smooth: true
      },
      {
        name:'Solar',
        color:color[4],
        data: data.value5,
        type: 'line',
        showSymbol: false,
        smooth: true
      },
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