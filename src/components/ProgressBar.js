import React from "react";
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

const ProgressBar = () => {
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
          <Toggle item1="DAILY" item2="WEEKLY" />
        </div>
      </div>
      <div className="middle">
        <div className="total">Total Items (in 1000s)</div>
        <div className="chartContainer">
          <Bar data={chartData} options={options} />
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
