import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function Linecharts({ data, linecolor,xAxisLableColor, splitLineShow }) {

  const Linechart = {
    tooltip: {
      trigger: 'axis',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      show: false,
      data: [
        'Direct',
      ]
    },
    grid: {
      right: '2',
      left: '2'
    },
    xAxis: {
      type: 'category',
      data: data.label,
      axisLabel: {
        color: xAxisLableColor
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: splitLineShow,
        lineStyle:{
          color:'#DEE1E6'
        }
      },
    },
    color: linecolor,
    series: [
      {
        name: 'System',
        type: 'line',
        showSymbol: false,
        label: {
          show: false,
        },
        data: data.value,
      },

    ]
  };

  return (
    <div>
      <ReactEcharts
        echarts={echarts}
        style={{ width: '100%', height: '300px' }}
        option={Linechart}
      />
    </div>
  );
}