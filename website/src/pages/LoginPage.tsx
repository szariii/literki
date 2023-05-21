import "../style/loginPage/loginPage.scss";
import { useState } from "react";
import LoginComponent from "../components/loginPage/LoginComponent";
import RegisterComponent from "../components/loginPage/RegisterComponent";

const LoginPage = () => {
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);

  return (
    <div>
      <div>
        {showLoginPage === true ? <LoginComponent /> : <RegisterComponent />}
      </div>
      <div>
        {showLoginPage === true ? (
          <button>Stwórz nowe konto</button>
        ) : (
          <button>Masz już konto? Zaloguj się</button>
        )}
      </div>
      <p>Login</p>
    </div>
  );
};

export default LoginPage;
