//Pages
import LoginPage from "./pages/LoginPage";

//Components
import Nav from "./components/nav/Nav";

//Style
import "./style/app/app.scss"

const App = () => {
  return (
    <>
      <Nav />
      <LoginPage />
    </>
  );
};

export default App;
