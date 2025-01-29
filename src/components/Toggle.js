import React, { useState } from "react";
import { ToggleStyled } from "../styles/ToggleStyled";

const Toggle = ({ item1, item2 }) => {
  const [selected, setSelected] = useState(item1);

  return (
    <ToggleStyled>
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
