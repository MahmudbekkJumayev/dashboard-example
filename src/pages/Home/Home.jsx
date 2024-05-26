import React from "react";
import LineChart from "../LineChart/LineChart";
import Pulse from "../Pulse/Pulse";
import sessionImg1 from "../../assets/icons/session1.svg";
import sessionImg2 from "../../assets/icons/session2.svg";
import sessionImg3 from "../../assets/icons/session3.svg";
import sessionImg4 from "../../assets/icons/session4.svg";
import Coinstack from "../Coinstack/Coinstack";
import Circle from "../Circle/Circle";

const Home = () => {
  return (
    <div className="flex container mt-[80px] mb-[30px] gap-10">
      {/* Main 1 container */}
      <div className="flex flex-col justify-start gap-10">
        {/* Performans */}
        <div>
          <h4 className="text-[30px] font-medium text-gray-500">Performance</h4>
          <div className="w-[700px] h-[320px] bg-white rounded-md drop-shadow-md ">
            <LineChart />
          </div>
        </div>

        {/* Session */}
        <div className="mt-5 flex justify-between items-center gap-3">
          <div className="bg-white rounded-md drop-shadow-md p-10">
            <span className="bg-blue-100 rounded-md w-[70px] h-[70px] flex justify-center items-center  cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src={sessionImg1}
                alt="Users icons"
              />
            </span>
            <span className="flex flex-col gap-3 mt-2">
              <p className="text-[20px] font-medium text-gray-500">
                Bounce Rate
              </p>
              <h5 className="text-[25px] font-bold ">26.3%</h5>
              <p className="text-[15px]">-28%</p>
            </span>
          </div>
          <div className="bg-white rounded-md drop-shadow-md p-10">
            <span className="bg-blue-100 rounded-md w-[70px] h-[70px] flex justify-center items-center  cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src={sessionImg2}
                alt="Users icons"
              />
            </span>
            <span className="flex flex-col gap-3 mt-2">
              <p className="text-[20px] font-medium text-gray-500">Users</p>
              <h5 className="text-[25px] font-bold ">72.6k</h5>
              <p className="text-[15px]">+25%</p>
            </span>
          </div>
          <div className="bg-white rounded-md drop-shadow-md p-10">
            <span className="bg-blue-100 rounded-md w-[70px] h-[70px] flex justify-center items-center  cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src={sessionImg3}
                alt="Users icons"
              />
            </span>
            <span className="flex flex-col gap-3 mt-2">
              <p className="text-[20px] font-medium text-gray-500">Sessions</p>
              <h5 className="text-[25px] font-bold ">26.3%</h5>
              <p className="text-[15px]">-28%</p>
            </span>
          </div>
          <div className="bg-white rounded-md drop-shadow-md p-10">
            <span className="bg-blue-100 rounded-md w-[70px] h-[70px] flex justify-center items-center  cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src={sessionImg4}
                alt="Users icons"
              />
            </span>
            <span className="flex flex-col gap-3 mt-2">
              <p className="text-[20px] font-medium text-gray-500">
                Session Duration
              </p>
              <h5 className="text-[25px] font-bold ">2m 18s</h5>
              <p className="text-[15px]">+13%</p>
            </span>
          </div>
        </div>
        {/* dialy Owerwiev */}
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-[30px] font-medium text-gray-500">
              Daily Overview
            </h4>
            <button className="bg-violet-700 px-5 py-2 rounded-md text-[18px] text-white hover:bg-violet-900">
              export
            </button>
          </div>
          <div className="flex justify-between mt-5 items-center">
            {/* dialy container 1 */}
            <div className="w-[330px] h-[170px] bg-white drop-shadow-md gap-2 flex justify-between items-center">
              <div className="p-10 drop-shadow-md rounded-md ">
                <h4 className="text-[15px] text-gray-600 font-bold">5,461</h4>
                <p className="text-[13px] text-gray-500 font-medium">Today</p>
              </div>
              <div className="w-[100px] h-[100px]">
                <Coinstack />
                <h4 className=" text-center text-[17px] text-violet-700 font-medium">
                  Users
                </h4>
              </div>
              <div className="p-10 drop-shadow-md rounded-md ">
                <h4 className="text-[15px] text-gray-600 font-bold">8,085</h4>
                <p className="text-[13px] text-gray-500 font-medium">
                  Expected
                </p>
              </div>
            </div>
            {/* dialy container 2 */}
            <div className="w-[330px] h-[170px] bg-white drop-shadow-md gap-2 flex justify-between items-center">
              <div className="p-10 drop-shadow-md rounded-md ">
                <h4 className="text-[15px] text-gray-600 font-bold">140</h4>
                <p className="text-[13px] text-gray-500 font-medium">Today</p>
              </div>
              <div className="w-[100px] h-[100px]">
                <Circle />
                <h4 className=" text-center text-[17px] text-yellow-600 font-medium">
                  Goals
                </h4>
              </div>
              <div className="p-10 drop-shadow-md rounded-md ">
                <h4 className="text-[15px] text-gray-600 font-bold">120</h4>
                <p className="text-[13px] text-gray-500 font-medium">
                  Expected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main 2 container */}
      <div className="flex flex-col gap-10">
        <div>
          <span className="flex justify-between items-center">
            <h4 className="text-[30px] font-medium text-gray-500">
              Sessions By Device
            </h4>
            <p className="text-[18px] font-medium text-gray-500">Year</p>
          </span>
          <div className="w-[600px] h-[320px] flex justify-evenly items-center gap-5 bg-white rounded-md drop-shadow-md ">
            <span className="w-[300px] h-[250px]">
              <Pulse />
            </span>
            <div className="flex flex-col gap-3">
              <span>
                <p className="text-[15px] font-medium text-gray-500">Desctop</p>
                <span className="flex justify-center">
                  <p className="text-[14px] font-medium text-gray-600">8,085</p>
                  <p className="text-[10px]">13%</p>
                </span>
              </span>
              <span>
                <p className="text-[15px] font-medium text-gray-500">Mobile</p>
                <span className="flex">
                  <p className="text-[14px] font-medium text-gray-600">8,085</p>
                  <p className="text-[10px]">30%</p>
                </span>
              </span>
              <span>
                <p className="text-[15px] font-medium text-gray-500">Tablets</p>
                <span className="flex">
                  <p className="text-[14px] font-medium text-gray-600">8,085</p>
                  <p className="text-[10px]">25%</p>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[30px] font-medium text-gray-500">
            Sessions By Device
          </h4>
          <span className="flex justify-between items-center mt-3">
            <span className="flex justify-center items-center gap-2">
              <p className="text-[17px] font-medium text-gray-700">Channel</p>
              <p className="text-[17px] font-medium text-gray-700">Traffic %</p>
            </span>
            <p className="text-[17px] font-medium text-gray-700">Value</p>
          </span>
          <iframe
            className="mt-3"
            src="https://quickchart.io/chart-maker/view/zm-a209a99d-e5ac-4b11-af49-f2ba80aa6931"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
        {/* nne */}
        <div className="bg-white drop-shadow-md flex justify-around items-start p-8">
          <div>
            <h4 className="text-[20px] font-medium text-gray-500">
              Sessions By Device
            </h4>
            <p className="text-[15px] font-medium text-gray-500">
              Top Region & session
            </p>
          </div>
          <button className="bg-violet-700 px-5 py-2 rounded-md text-[18px] text-white hover:bg-violet-900">
            Wiew
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
