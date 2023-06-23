import axios from "axios";
import "../../style/loginPage/_loginComponent.scss";
import settings from "../../settings.json"

import { ChangeEvent, useState } from "react";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    nick: "",
    password: "",
  });

  const loginButtonHandler=async()=>{
    const data = await axios.post(`${settings.address}/login`, loginData)
    console.log(data)
  }

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
      <button onClick={loginButtonHandler} className="loginButton">Zaloguj się</button>
    </>
  );
};

export default LoginComponent;

interface LoginData {
  nick: string;
  password: string;
}
