import React from "react";
import { MiddleComponentStyled } from "../styles/MiddleComponentStyled";
import ProgressBar from "./ProgressBar";
import Shipment from "./Shipment";
import { getThemeColor } from "./data";

const MiddleComponent = ({ storage, themeColor }) => {
  return (
    <MiddleComponentStyled themeColor={() => getThemeColor(themeColor)}>
      <div className="middle-wrapper">
        <ProgressBar storage={storage} themeColor={themeColor} />
        <Shipment themeColor={themeColor} />
      </div>
    </MiddleComponentStyled>
  );
};

export default MiddleComponent;
