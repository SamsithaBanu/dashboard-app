import React from "react";
import { PurchaseStyled } from "../styles/PurchaseStyled";
import { getThemeColor, purchaseData } from "./data";

const Purchase = ({ themeColor }) => {
  return (
    <PurchaseStyled themeColor={() => getThemeColor(themeColor)}>
      <div className="purchaseWrapper">
        {purchaseData.map((item) => {
          return (
            <div className="wrapper">
              <div className="topContent">
                <div className="leftContent">
                  <div className="title">{item?.title}</div>
                  <div className="amount">
                    {item?.amount}
                    {item?.increment && (
                      <img
                        src={item?.increment}
                        alt="amount"
                        style={{
                          width: "47px",
                          height: "17px",
                          marginLeft: "5px",
                          marginBottom: "-4px",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="rightContent">
                  <img
                    src={item?.icon}
                    alt={item?.title}
                    style={{ width: "34px", height: "34px" }}
                  />
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
