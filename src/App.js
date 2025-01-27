import "./App.css";
import Header from "./components/Header";
import HeaderBelow from "./components/HeaderBelow";
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
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
