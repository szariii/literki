//Pages
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

//Components
import Nav from "./components/nav/Nav";

//Style
import "./style/app/_app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="appContainer">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
