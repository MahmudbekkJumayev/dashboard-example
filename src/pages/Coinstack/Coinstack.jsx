// src/Coinstack.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Coinstack = () => {
  const data = {
    datasets: [
      {
        data: [15, 85],
        backgroundColor: ["rgb(173, 225, 232)", "rgb(130, 17, 149 )"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "white", // Matn rangi
        font: {
          weight: "bold", // Matnning shrift o'lchami
        },
        formatter: (value, ctx) => {
          // JSX elementlarini qaytarish
          return (
            <>
              <h2 style={{ marginBottom: 5 }}>Users</h2>
              <span>{value}%</span>
            </>
          );
        },
      },
    },
  };

  return (
    <div className="w-[100%] h-[] flex justify-evenly items-center">
      {/* //   <div className="p-10 drop-shadow-md bg-white">
    //     <h4 className="text-[40px] text-gray-600 font-bold">5,461</h4>
    //     <p className="text-[30px] text-gray-500 font-medium">Today</p>
    //   </div> */}
      <Doughnut data={data} options={options} />
      {/* <div className="p-10 drop-shadow-md bg-white">
        <h4 className="text-[40px] text-gray-600 font-bold">8,085</h4>
        <p className="text-[30px] text-gray-500 font-medium">Expected</p>
      </div> */}
    </div>
  );
};

export default Coinstack;
