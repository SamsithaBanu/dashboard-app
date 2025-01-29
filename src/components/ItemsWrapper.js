import React from "react";
import Toggle from "./Toggle";

const ItemsWrapper = ({ title, items, isFromSold }) => {
  return (
    <div className="itemsWrapper">
      <div className="topItems">
        <div className="titleItem">{title}</div>
        <Toggle
          item1={isFromSold ? "VALUE" : "VOL"}
          item2={isFromSold ? "VOL" : "VALUE"}
        />
      </div>
      <div className="bottomItems">
        {items.map((item) => {
          return (
            <div className="items">
              <div className="d-flex">
                <div className="id">#{item?.id}</div>
                <div className="name">{item?.item}</div>
              </div>
              <div className={isFromSold ? "units" : "purchase"}>
                {item?.units}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsWrapper;
