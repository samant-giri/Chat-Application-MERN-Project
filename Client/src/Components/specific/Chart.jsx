import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { purple } from "../../constants/color";

ChartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },

  scale: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    datasets: [
      {
        data: [1, 2, 34, 10, 7, 40, 34, 70, 21, 88, 23, 11],
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: purple,
      },
      
    ],
  };
    
    return <Line data={data} options={lineChartOptions}/>
};

const DoughnutChart = () => {
  return <div>Chart</div>;
};

export { LineChart, DoughnutChart };
