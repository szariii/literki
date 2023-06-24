import axios from "axios";
import "../../style/loginPage/_loginComponent.scss";
import settings from "../../settings.json"

import { ChangeEvent, useState } from "react";
import { useNavigate} from "react-router-dom"
import ErrorComponent from "../helpiongComponents/ErrorComponent";
import WaitingComponent from "../helpiongComponents/WaitingComponent";

import {useDispatch} from "react-redux"
import { add } from "../../redux/slicers/userData";

const LoginComponent = () => {
  const dispatch = useDispatch()
  
  const [errorMessage,setErrorMessage] = useState(false)
  const [waiting,setWaiting] = useState(false)
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<LoginData>({
    nick: "",
    password: "",
  });

  const loginButtonHandler=async()=>{
    setWaiting(!waiting)
    const data = await axios.post(`${settings.address}/login`, loginData)
    console.log(data.data)
    setWaiting(!waiting)
    if(data.data.success){
      dispatch(add(data.data.data))
      navigate("/main")
    }else{
      setErrorMessage(!errorMessage)
    }
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
      {errorMessage?<ErrorComponent header="Błędne dane" onClickHandler={()=>{setErrorMessage(!errorMessage)}} />:""}
      {waiting?<WaitingComponent header="logowanie..." />:""}
    </>
  );
};

export default LoginComponent;

interface LoginData {
  nick: string;
  password: string;
}
