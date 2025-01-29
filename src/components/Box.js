import React from "react";
import truck from "../SidebarIcons/shipment/truck.png";
import address1 from "../SidebarIcons/shipment/arrow1.png";
import address2 from "../SidebarIcons/shipment/arrow2.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Box = ({ shipmentId }) => {
  return (
    <div className="boxWrapper">
      <div className="topBox">
        <div className="leftBox">
          <div className="shipIdTitle">Shipment ID</div>
          <div className="value">{shipmentId}</div>
        </div>
        <div className="rightBox">
          <img
            src={truck}
            alt="truck"
            style={{ height: "52px", width: "112px" }}
          />
        </div>
      </div>
      <div className="bottomBox">
        <div className="addressWrap">
          <div className="icon">
            <img src={address2} style={{ height: "12px", width: "12px" }} />
          </div>
          <div className="iconVal">87 Some Address</div>
        </div>
        <div className="arrow" style={{ width: "20px" }}>
          <HiOutlineArrowNarrowRight />
        </div>
        <div className="addressWrap">
          <div className="icon">
            <img src={address1} style={{ height: "12px", width: "12px" }} />
          </div>
          <div className="iconVal">87 Some Address</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
