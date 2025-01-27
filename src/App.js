import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AppStyled } from "./styles/AppStyled";

function App() {
  return (
    <AppStyled>
      <div className="appWrapper">
        <Sidebar />
        <div className="rightWrapper">
          <Header />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
