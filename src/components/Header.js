import React from "react";
import { HeaderStyled } from "../styles/HeaderStyled";
import bookmark from "../SidebarIcons/HeaderIcons/IconSet.png";
import search from "../SidebarIcons/HeaderIcons/Search.png";
import setting from "../SidebarIcons/HeaderIcons/headerSetting.png";
import book from "../SidebarIcons/HeaderIcons/Vector.png";
import bell from "../SidebarIcons/HeaderIcons/Bell.png";
import user from "../SidebarIcons/HeaderIcons/user.png";

const Header = () => {
  return (
    <HeaderStyled>
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
        <div className="iconWrapper">
          <img
            src={book}
            alt="booking"
            style={{ width: "25px", height: "25px" }}
          />
          <img
            src={bell}
            alt="notification"
            style={{ width: "25px", height: "25px" }}
          />
          <img
            src={setting}
            alt="settings"
            style={{ width: "25px", height: "25px" }}
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
