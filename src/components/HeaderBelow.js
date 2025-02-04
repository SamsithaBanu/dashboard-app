import React, { useState } from "react";
import { HeaderBelowStyled } from "../styles/HeaderBelowStyled";
import logo from "../SidebarIcons/HeaderIcons/Logo.png";
import Dropdown from "./Dropdown";
import { getThemeColor } from "./data";

const HeaderBelow = ({ onChange }) => {
  const options_days = ["LAST 7 DAYS", "LAST 30 DAYS", "LAST 90 DAYS"];
  const options_theme = ["indigo", "orange", "green"];
  const [themeColor, setThemeColor] = useState("indigo");

  return (
    <HeaderBelowStyled themeColor={() => getThemeColor(themeColor)}>
      <div className="headerBelowWrapper">
        <div className="leftHeader">
          <div className="iconicWrapper">
            <img
              src={logo}
              alt="icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div className="nameWrapper">
            <div className="name">Hello, Rahul</div>
            <div className="company">ORUE PVT. LTD.</div>
          </div>
          <div className="customTag">CUSTOMER</div>
        </div>
        <div className="dropdownWrapper">
          <Dropdown options={options_days} />
          <Dropdown
            options={options_theme}
            onChange={(item) => {
              onChange(item);
              setThemeColor(item);
            }}
          />
        </div>
      </div>
    </HeaderBelowStyled>
  );
};

export default HeaderBelow;
