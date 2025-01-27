import React from "react";
import { PurchaseStyled } from "../styles/PurchaseStyled";
import { purchaseData } from "./data";

const Purchase = () => {
  return (
    <PurchaseStyled>
      <div className="purchaseWrapper">
        {purchaseData.map((item) => {
          return (
            <div className="wrapper">
              <div className="topContent">
                <div className="leftContent">
                  <div className="title">{item?.title}</div>
                  <div className="amount">
                    {item?.amount}
                    <span>{item?.increment}</span>
                  </div>
                </div>
                <div className="rightContent">
                  <img src={item?.icon} alt={item?.title} style={{width: '34px', height:'34px'}}/>
                </div>
              </div>
              <div className="bottomContent">{item?.paymentDue}</div>
            </div>
          );
        })}
      </div>
    </PurchaseStyled>
  );
};

export default Purchase;
