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
    <div className="container mx-auto mb-[30px] p-4 lg:p-0">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main 1 container */}
        <div className="flex flex-col gap-10 lg:w-2/3">
          {/* Performance */}
          <div>
            <h4 className="text-[24px] lg:text-[30px] font-medium text-gray-500">
              Performance
            </h4>
            <div className="xs:w-[100%] sm:w-[100%] md:w-[100%] h-[320px] bg-white rounded-md drop-shadow-md">
              <LineChart />
            </div>
          </div>

          {/* Session */}
          <div className="mt-5 flex  sm:grid-cols-2 justify-between items-center gap-3">
            {[sessionImg1, sessionImg2, sessionImg3, sessionImg4].map(
              (img, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-[24%] bg-white rounded-md drop-shadow-md p-5 lg:p-10 flex flex-col items-center"
                >
                  <span className="bg-blue-100 rounded-md w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex justify-center items-center cursor-pointer">
                    <img
                      className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                      src={img}
                      alt="Users icons"
                    />
                  </span>
                  <span className="flex flex-col gap-3 mt-2 items-center">
                    <p className="text-[16px] lg:text-[20px] font-medium text-gray-500">
                      {["Bounce Rate", "Users", "Sessions", "Duration"][index]}
                    </p>
                    <h5 className="text-[20px] lg:text-[25px] font-bold">
                      {["26.3%", "72.6k", "26.3%", "2m 18s"][index]}
                    </h5>
                    <p className="text-[13px] lg:text-[15px]">
                      {["-28%", "+25%", "-28%", "+13%"][index]}
                    </p>
                  </span>
                </div>
              )
            )}
          </div>

          {/* Daily Overview */}
          <div>
            <div className="flex justify-between items-center">
              <h4 className="text-[24px] lg:text-[30px] font-medium text-gray-500">
                Daily Overview
              </h4>
              <button className="bg-violet-700 px-4 lg:px-5 py-2 rounded-md text-[16px] lg:text-[18px] text-white hover:bg-violet-900">
                Export
              </button>
            </div>
            <div className="flex flex-wrap justify-between mt-5 gap-3 lg:gap-5 items-center">
              {/* Daily container 1 */}
              <div className="xs:w-[100%] sm:w-[300px] lg:w-[430px] h-[170px] bg-white drop-shadow-md gap-2 flex lg:flex-row justify-between items-center p-5 lg:p-10">
                <div>
                  <h4 className="text-[15px] text-gray-600 font-bold">5,461</h4>
                  <p className="text-[13px] text-gray-500 font-medium">Today</p>
                </div>
                <div className="xs:w-[60px] xs:h-[60px] sm:w-[100px] sm:h-[100px] flex justify-center gap-4 items-center">
                  <Coinstack />
                  <h4 className="text-center text-[14px] lg:text-[17px] text-violet-700 font-medium">
                    Users
                  </h4>
                </div>
                <div>
                  <h4 className="text-[15px] text-gray-600 font-bold">8,085</h4>
                  <p className="text-[13px] text-gray-500 font-medium">
                    Expected
                  </p>
                </div>
              </div>
              {/* Daily container 2 */}
              <div className="xs:w-[100%] sm:w-[300px] lg:w-[430px] h-[170px] bg-white drop-shadow-md gap-2 flex justify-between items-center p-5 lg:p-10">
                <div>
                  <h4 className="text-[15px] text-gray-600 font-bold">140</h4>
                  <p className="text-[13px] text-gray-500 font-medium">Today</p>
                </div>
                <div className="xs:w-[70px] xs:h-[70px] sm:w-[100px] sm:h-[100px] flex justify-center gap-4 items-center">
                  <Circle />
                  <h4 className="text-center text-[14px] lg:text-[17px] text-yellow-600 font-medium">
                    Goals
                  </h4>
                </div>
                <div>
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
        <div className="flex flex-col gap-10 lg:w-1/3">
          <div>
            <span className="flex justify-between items-center">
              <h4 className="text-[24px] lg:text-[30px] font-medium text-gray-500">
                Sessions By Device
              </h4>
              <p className="text-[16px] lg:text-[18px] font-medium text-gray-500">
                Year
              </p>
            </span>
            <div className="w-full h-[320px] flex lg:flex-row justify-evenly items-center gap-5 bg-white rounded-md drop-shadow-md">
              <span className="xs:w-[200px] sm:w-[250px] lg:w-[300px] xs:h-[200px] sm:h-[250px] lg:h-[250px]">
                <Pulse />
              </span>
              <div className="flex flex-col gap-3">
                {["Desktop", "Mobile", "Tablets"].map((device, index) => (
                  <span key={index}>
                    <p className="text-[13px] lg:text-[15px] font-medium text-gray-500">
                      {device}
                    </p>
                    <span className="flex justify-center lg:justify-start">
                      <p className="text-[12px] lg:text-[14px] font-medium text-gray-600">
                        8,085
                      </p>
                      <p className="text-[10px]">
                        {["13%", "30%", "25%"][index]}
                      </p>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[250px]">
            <h4 className="text-[24px] lg:text-[30px] font-medium text-gray-500">
              Sessions By Device
            </h4>
            <span className="flex justify-between items-center mt-3">
              <span className="flex justify-center items-center gap-2">
                <p className="text-[15px] lg:text-[17px] font-medium text-gray-700">
                  Channel
                </p>
                <p className="text-[15px] lg:text-[17px] font-medium text-gray-700">
                  Traffic %
                </p>
              </span>
              <p className="text-[15px] lg:text-[17px] font-medium text-gray-700">
                Value
              </p>
            </span>
            <iframe
              className="mt-3 w-[100%] h-[100%]"
              src="https://quickchart.io/chart-maker/view/zm-a209a99d-e5ac-4b11-af49-f2ba80aa6931"
            ></iframe>
          </div>

          <div className="bg-white drop-shadow-md flex justify-between lg:justify-around items-start mt-24 p-8">
            <div>
              <h4 className="text-[18px] lg:text-[20px] font-medium text-gray-500">
                Sessions By Device
              </h4>
              <p className="text-[13px] lg:text-[15px] font-medium text-gray-500">
                Top Region & session
              </p>
            </div>
            <button className="bg-violet-700 px-4 lg:px-5 py-2 rounded-md text-[16px] lg:text-[18px] text-white hover:bg-violet-900">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
