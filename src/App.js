import { useState } from "react";
import "./App.css";
import BottomComponent from "./components/BottomComponent";
import Header from "./components/Header";
import HeaderBelow from "./components/HeaderBelow";
import MiddleComponent from "./components/MiddleComponent";
import Purchase from "./components/Purchase";
import Sidebar from "./components/Sidebar";
import { AppStyled } from "./styles/AppStyled";

function App() {
  const [storage, setstorage] = useState("");
  const [themeColor, setThemeColor] = useState("indigo");
  return (
    <AppStyled>
      <div className="appWrapper">
        <Sidebar themeColor={themeColor} />
        <div className="rightWrapper">
          <Header
            onChange={(item) => setstorage(item)}
            themeColor={themeColor}
          />
          <HeaderBelow onChange={(item) => setThemeColor(item)} />
          <Purchase themeColor={themeColor} />
          <MiddleComponent storage={storage} themeColor={themeColor} />
          <BottomComponent themeColor={themeColor} />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
