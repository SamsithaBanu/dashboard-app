import "./App.css";
import BottomComponent from "./components/BottomComponent";
import Header from "./components/Header";
import HeaderBelow from "./components/HeaderBelow";
import MiddleComponent from "./components/MiddleComponent";
import Purchase from "./components/Purchase";
import Sidebar from "./components/Sidebar";
import { AppStyled } from "./styles/AppStyled";

function App() {
  return (
    <AppStyled>
      <div className="appWrapper">
        <Sidebar />
        <div className="rightWrapper">
          <Header />
          <HeaderBelow />
          <Purchase />
          <MiddleComponent />
          <BottomComponent />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
