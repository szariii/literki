import { useState, ChangeEvent } from "react";
import settings from "../../settings.json";
import axios from "axios";

const RegisterComponent = () => {
  const [registerData, setRegisterData] = useState<RegsiterData>({
    nick: "",
    password: "",
    email: "",
  });

  const createAccountHandler = async () => {
    const data = await axios.post(
      `${settings.address}/createAccount`,
      registerData
    );
    console.log(data);
  };

  return (
    <>
      <div className="inputsContainer">
        <div className="inputsContainer__inputContainer">
          <h2>Nick</h2>
          <input
            value={registerData.nick}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const inpEvent = e.nativeEvent as InputEvent;
              setRegisterData({
                ...registerData,
                nick: `${registerData.nick}${inpEvent.data}`,
              });
            }}
            className="inputsContainer__input"
            type="text"
          />
        </div>
        <div className="inputsContainer__inputContainer">
          <h2>Email</h2>
          <input
            value={registerData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const inpEvent = e.nativeEvent as InputEvent;
              setRegisterData({
                ...registerData,
                email: `${registerData.email}${inpEvent.data}`,
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
            value={registerData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const inpEvent = e.nativeEvent as InputEvent;
              setRegisterData({
                ...registerData,
                password: `${registerData.password}${inpEvent.data}`,
              });
            }}
          />
        </div>
      </div>
      <button className="loginButton" onClick={createAccountHandler}>
        Zarejestruj się
      </button>
    </>
  );
};

interface RegsiterData {
  nick: string;
  password: string;
  email: string;
}

export default RegisterComponent;
