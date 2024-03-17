import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function PieChart({ data, color,center,radius,title,legend }) {

    const option = {
        title:{
            text: title,
            left: 'center',
            top:'center',
            textStyle:{
                color:'#6F7787FF',
                fontSize:15,
                fontWeight:400,
                lineHeight:25
            }
        },
        color: color,
        tooltip: {
          trigger: 'item'
        },
        legend: legend,
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: radius,
            center:center,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
              }
            },
            labelLine: {
              show: false
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