import React from "react";
import { MiddleComponentStyled } from "../styles/MiddleComponentStyled";
import ProgressBar from "./ProgressBar";
import Shipment from "./Shipment";

const MiddleComponent = ({storage}) => {
  return (
    <MiddleComponentStyled>
      <div className="middle-wrapper">
        <ProgressBar storage={storage}/>
        <Shipment />
      </div>
    </MiddleComponentStyled>
  );
};

export default MiddleComponent;
