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
  return (
    <AppStyled>
      <div className="appWrapper">
        <Sidebar />
        <div className="rightWrapper">
          <Header onChange={(item) => setstorage(item)} />
          <HeaderBelow />
          <Purchase />
          <MiddleComponent storage={storage} />
          <BottomComponent />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
