import React, { useState, useEffect } from "react";
import { HeaderStyled } from "../styles/HeaderStyled";
import bookmark from "../SidebarIcons/HeaderIcons/IconSet.png";
import search from "../SidebarIcons/HeaderIcons/Search.png";
import user from "../SidebarIcons/HeaderIcons/user.png";
import { getSubThemeColor, getThemeColor } from "./data";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuNotebook } from "react-icons/lu";

const Header = ({ onChange, themeColor }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    // localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <HeaderStyled
      themeColor={() => getThemeColor(themeColor)}
      subThemeColor={() => getSubThemeColor(themeColor)}
    >
      <div className="leftWrapper">
        <img
          src={bookmark}
          alt="togle"
          style={{ width: "36px", height: "36px" }}
        />
        <div className="searchWrapper">
          <img
            src={search}
            alt="search"
            style={{ height: "20px", width: "20px" }}
          />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          ></input>
        </div>
      </div>
      <div className="rightsideWrapper">
        <button
          className="themeMode"
          onClick={() => {
            localStorage.setItem("theme", theme === "light" ? "dark" : "light");
            setTheme(theme === "light" ? "dark" : "light");
            onChange(theme === "light" ? "Dark" : "Light");
          }}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <div className="iconWrapper">
          <LuNotebook
            style={{ width: "25px", height: "25px", color: "white" }}
          />
          <FaRegBell
            style={{ width: "25px", height: "25px", color: "white" }}
          />
          <IoSettingsOutline
            style={{ width: "25px", height: "25px", color: "white" }}
          />
        </div>
        <div className="userWrapper">
          <div className="detailWrapper">
            <div className="email">rohan@etls.xyz</div>
            <div className="company">ETLS PVT. LTD.</div>
          </div>
          <div className="image">
            <img
              src={user}
              alt="user"
              style={{ width: "28px", height: "28px" }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
