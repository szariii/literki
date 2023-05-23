//Pages
import LoginPage from "./pages/LoginPage";

//Components
import Nav from "./components/nav/Nav";

//Style
import "./style/app/_app.scss"

const App = () => {
  return (
    <div className="appContainer">
      <Nav />
      <LoginPage />
    </div>
  );
};

export default App;
