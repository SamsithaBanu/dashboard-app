import React from "react";
import { MiddleComponentStyled } from "../styles/MiddleComponentStyled";
import ProgressBar from "./ProgressBar";
import Shipment from "./Shipment";

const MiddleComponent = () => {
  return (
    <MiddleComponentStyled>
      <div className="middle-wrapper">
        <ProgressBar />
        <Shipment />
      </div>
    </MiddleComponentStyled>
  );
};

export default MiddleComponent;
