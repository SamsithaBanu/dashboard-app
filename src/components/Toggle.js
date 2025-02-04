import React, { useState } from "react";
import { ToggleStyled } from "../styles/ToggleStyled";
import { getThemeColor } from "./data";

const Toggle = ({ item1, item2, themeColor }) => {
  const [selected, setSelected] = useState(item1);

  return (
    <ToggleStyled themeColor={() => getThemeColor(themeColor)}>
      <div className="toggle-switch">
        <button
          className={`toggle-option ${selected === item1 ? "active" : ""}`}
          onClick={() => setSelected(item1)}
        >
          {item1}
        </button>
        <button
          className={`toggle-option ${selected === item2 ? "active" : ""}`}
          onClick={() => setSelected(item2)}
        >
          {item2}
        </button>
      </div>
    </ToggleStyled>
  );
};

export default Toggle;
