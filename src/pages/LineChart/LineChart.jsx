import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        data: [40, 60, 30, 65, 33, 55, 20],
        fill: false,
        backgroundColor: "rgba(139, 31, 158 )",
        borderColor: "violet",
        tension: 0.4,
      },
    ],
  };

  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          display: false, // Grid chiziqlarini olib tashlash
        },
      },
      x: {
        grid: {
          display: false, // X aksidagi grid chiziqlarini olib tashlash
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
