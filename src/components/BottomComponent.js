import React from "react";
import { BottomComponentStyled } from "../styles/BottomComponentStyled";
import ItemsWrapper from "./ItemsWrapper";
import Toggle from "./Toggle";
import map from "../SidebarIcons/shipment/image 9.png";
import { purchasedItems, soldItems } from "./data";

const BottomComponent = () => {
  return (
    <BottomComponentStyled>
      <div className="leftComponent">
        <div className="topSpot">
          <div className="spotlightTitle">Spotlight</div>
          <div className="region">ALL REGIONS</div>
        </div>
        <div className="bottomSpot">
          <img
            src={map}
            alt="map"
            style={{ height: "270px", width: "629px", margin: "5px" }}
          />
          <Toggle item1="SUPPLIERS" item2="CLIENTS" />
        </div>
      </div>
      <ItemsWrapper title="Top Items Sold" items={soldItems} isFromSold />
      <ItemsWrapper title="Top Items Purchased" items={purchasedItems} />
    </BottomComponentStyled>
  );
};

export default BottomComponent;
