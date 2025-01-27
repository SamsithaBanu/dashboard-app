import React from "react";
import logo from "../SidebarIcons/Group 18.png";
import item1 from "../SidebarIcons/lucide_box.png";
import item2 from "../SidebarIcons/ri_contacts-book-2-line.png";
import item3 from "../SidebarIcons/lets-icons_order.png";
import item4 from "../SidebarIcons/icon-park-outline_setting-one.png";
import item5 from "../SidebarIcons/majesticons_document-line.png";
import item6 from "../SidebarIcons/material-symbols-light_finance.png";
import item7 from "../SidebarIcons/icon-park-outline_setting-one.png";
import item8 from "../SidebarIcons/material-symbols_integration-instructions-outline-rounded.png";
import item9 from "../SidebarIcons/icon-park-outline_weixin-market.png";
import question from "../SidebarIcons/material-symbols_help.png";
import setting from "../SidebarIcons/Group 121.png";
import { SidebarStyled } from "../styles/SidebarStyled";

const Sidebar = () => {
  const menuItems = [
    { icon: item1, isActive: true },
    { icon: item2, isActive: false },
    { icon: item3, isActive: false },
    { icon: item4, isActive: false },
    { icon: item5, isActive: false },
    { icon: item6, isActive: false },
    { icon: item7, isActive: false },
    { icon: item8, isActive: false },
    { icon: item9, isActive: false },
  ];
  return (
    <SidebarStyled>
      <div className="sidebarWrapper">
        <div className="logo">
          <img src={logo} style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="iconsWrapper">
          <div className="top">
            {menuItems.map((item) => {
              return (
                <div
                  className="iconWrapper"
                  style={{ background: item?.isActive ? "#4f45e4" : "" }}
                >
                  <img
                    src={item?.icon}
                    alt="icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              );
            })}
          </div>
          <div className="bottom">
            <img
              src={question}
              alt="question"
              style={{ width: "24px", height: "24px", marginLeft: "7px" }}
            />
            <hr className="horizontal" />
            <img
              src={setting}
              alt="settings"
              style={{ width: "38px", height: "38px" }}
            />
          </div>
        </div>
      </div>
    </SidebarStyled>
  );
};
export default Sidebar;
