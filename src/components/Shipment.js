import React from "react";
import Box from "./Box";
import { ShipmentStyled } from "../styles/ShipmentStyled";
import filter from "../SidebarIcons/shipment/mi_filter.png";
import Map from "../components/Map";

const ShipmentAnalytics = () => {
  return (
    <ShipmentStyled>
      <div className="shipmentWrapper">
        <div className="leftShipment">
          <div className="topComp">
            <div className="titleShip">Shipment Analytics</div>
            <div className="filter">
              <img
                src={filter}
                alt="filter"
                style={{ height: "16px", width: "16px" }}
              />
              <div className="filterName">FILTERS</div>
            </div>
          </div>
          <div className="bottomComp">
            <div className="shipboxWrapper">
              <Box shipmentId="#003455MNP" />
              <Box shipmentId="#001432LDP" />
            </div>
            <div className="vertical">
              <div className="shortVertical"></div>
            </div>
          </div>
        </div>
        <div className="rightShipment">
          <div className="topRight">
            ID: <span>#003455MNP</span>
          </div>
          <div className="middleRight">
            <Map />
          </div>
          <div className="bottomRight">
            <div className="content">
              <div className="key">Shipment ID</div>
              <div className="value">#0124BCD</div>
            </div>
            <div className="verti"></div>
            <div className="content">
              <div className="key">Category</div>
              <div className="value">Electronics</div>
            </div>
            <div className="verti"></div>
            <div className="content">
              <div className="key">Total Weight</div>
              <div className="value">329 kg</div>
            </div>
            <div className="verti"></div>
            <div className="content">
              <div className="key">Destination</div>
              <div className="value">Bangalore</div>
            </div>
            <div className="verti"></div>
            <div className="content">
              <div className="key">Est. Arrival</div>
              <div className="value">2 Hrs</div>
            </div>
          </div>
        </div>
      </div>
    </ShipmentStyled>
  );
};

export default ShipmentAnalytics;
