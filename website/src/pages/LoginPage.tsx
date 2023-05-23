import "../style/loginPage/_loginPage.scss";
import { useState } from "react";
import LoginComponent from "../components/loginPage/LoginComponent";
import RegisterComponent from "../components/loginPage/RegisterComponent";

const LoginPage = () => {
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);

  return (
    <div className="loginPage">
      <div className="loginPage__component">
        {showLoginPage === true ? <LoginComponent /> : <RegisterComponent />}
      </div>
      <div className="loginPage__buttons">
        {showLoginPage === true ? (
          <button
            className="loginPage__button"
            onClick={() => {
              setShowLoginPage(!showLoginPage);
            }}
          >
            Stwórz nowe konto
          </button>
        ) : (
          <button
            className="loginPage__button"
            onClick={() => {
              setShowLoginPage(!showLoginPage);
            }}
          >
            Masz już konto? Zaloguj się
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
