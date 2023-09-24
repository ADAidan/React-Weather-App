import { useState, useEffect, useRef } from 'react';
import Chart, { CategoryScale } from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import './rainfall-chart.css';

Chart.register(CategoryScale);
Chart.defaults.borderColor = '#800020'
Chart.defaults.color = '#800020'

const RainfallChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  const options = {
    scales: {
      'y-axis-1': {
        type: 'linear',
        position: 'left',
        grid: {
          drawOnChartArea: false,
        },
      },
      'y-axis-2': {
        type: 'linear',
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  console.log('data', data)
  useEffect(() => {
    const formattedData = {
      labels: data.map(row => row.day),
      datasets: [
        {
          id: 1,
          label: 'total preciptation (mm)',
          data: data.map(row => row.precipitation),
          yAxisID: 'y-axis-1',
        },
        {
          id: 2,
          type: 'line',
          label: 'max temperature (°F)',
          data: data.map(row => row.maxTemperature),
          yAxisID: 'y-axis-2',
        },
        {
          id: 3,
          type: 'line',
          label: 'min temperature (°F)',
          data: data.map(row => row.minTemperature),
          yAxisID: 'y-axis-2',
        }
      ],
    };
    setChartData(formattedData);
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [data]);
  
  return (
    <div className='rainfall-chart-container'>
      { chartData && 
      <Bar 
      data={chartData}
      options={options}
      ref={chartRef.current}
      /> }
    </div>
  );
}

export default RainfallChart;