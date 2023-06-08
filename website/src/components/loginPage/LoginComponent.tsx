import "../../style/loginPage/_loginComponent.scss";

import { ChangeEvent, useState } from "react";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    nick: "",
    password: "",
  });

  return (
    <>
      <div className="inputsContainer">
        <div className="inputsContainer__inputContainer">
          <h2>Nick</h2>
          <input
            value={loginData.nick}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLoginData({
                ...loginData,
                nick: e.target.value,
              });
            }}
            className="inputsContainer__input"
            type="text"
          />
        </div>
        <div className="inputsContainer__inputContainer">
          <h2>Hasło</h2>
          <input
            className="inputsContainer__input"
            type="password"
            value={loginData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <button className="loginButton">Zaloguj się</button>
    </>
  );
};

export default LoginComponent;

interface LoginData {
  nick: string;
  password: string;
}
