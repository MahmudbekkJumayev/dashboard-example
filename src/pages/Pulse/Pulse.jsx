import React from "react";
import { Doughnut } from "react-chartjs-2"; // Doughnut komponentini import qiling
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // ArcElement komponentini qo'shing
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // ArcElement komponentini qo'shing
  Title,
  Tooltip,
  Legend
);

const Pulse = () => {
  const data = {
    labels: ["Mobile", "Desctop", "Tablets"],
    datasets: [
      {
        label: "My First Dataset",
        data: [120, 60, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart Example",
      },
    },
  };

  return <Doughnut data={data} options={options} width={500} height={500} />;
};

export default Pulse;
