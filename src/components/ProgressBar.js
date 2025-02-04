import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import { Bar } from "react-chartjs-2";
import { chartData, options } from "./data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressBar = ({ storage, themeColor }) => {
  const [modifyChartData, setModifyChartData] = useState(chartData);

  useEffect(() => {
    if (storage === "Dark") {
      setModifyChartData((prevChartData) => {
        const updatedChartData = {
          ...prevChartData,
          datasets: prevChartData.datasets.map((dataset, index) => ({
            ...dataset,
            backgroundColor: index === 0 ? "grey" : "white",
          })),
        };
        return updatedChartData;
      });
    } else if (storage === "Light") {
      if (themeColor === "green") {
        setModifyChartData((prevChartData) => {
          const updatedChartData = {
            ...prevChartData,
            datasets: prevChartData.datasets.map((dataset, index) => ({
              ...dataset,
              backgroundColor:
                index === 0 ? "rgba(0, 128, 0, 1)" : "rgba(0, 128, 0, 0.3)",
            })),
          };
          return updatedChartData;
        });
      } else if (themeColor === "orange") {
        setModifyChartData((prevChartData) => {
          const updatedChartData = {
            ...prevChartData,
            datasets: prevChartData.datasets.map((dataset, index) => ({
              ...dataset,
              backgroundColor:
                index === 0 ? "rgba(255, 165, 0, 1)" : "rgba(255, 165, 0, 0.3)",
            })),
          };
          return updatedChartData;
        });
      } else {
        setModifyChartData((prevChartData) => {
          const updatedChartData = {
            ...prevChartData,
            datasets: prevChartData.datasets.map((dataset, index) => ({
              ...dataset,
              backgroundColor:
                index === 0 ? "rgba(58, 53, 221, 1)" : "rgba(58, 53, 221, 0.3)",
            })),
          };
          return updatedChartData;
        });
      }
    }
  }, [chartData, storage, themeColor]);

  return (
    <div className="middleWrapper">
      <div className="topWrapper">
        <div className="progressLeft">
          <div className="title">Inventory Overview</div>
          <div className="subTitle">
            In-Stock Products: <b>3,200 Units</b>
          </div>
        </div>
        <div className="progressRight">
          <Toggle item1="DAILY" item2="WEEKLY" themeColor={themeColor} />
        </div>
      </div>
      <div className="middle">
        <div className="total">Total Items (in 1000s)</div>
        <div className="chartContainer">
          <Bar data={modifyChartData} options={options} />
        </div>
      </div>
      <div className="bottomWrap">
        <div className="items">
          <div className="circle"></div>
          <div className="titleCir">Sales</div>
        </div>
        <div className="items">
          <div className="circle1"></div>
          <div className="titleCir">Purchases</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
