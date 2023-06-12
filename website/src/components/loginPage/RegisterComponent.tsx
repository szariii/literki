import { useState, ChangeEvent, useRef } from "react";
import settings from "../../settings.json";
import axios from "axios";

//Components
import WaitingComponent from "../helpiongComponents/WaitingComponent";
import SuccessComponent from "../helpiongComponents/SuccessComponent";
import ErrorComponent from "../helpiongComponents/ErrorComponent";

const RegisterComponent = ({ setShowLoginPage }: RegisterComponent) => {
  const [showWaitnigComponent, setShowWaitingComponent] = useState(false);
  const [showSuccessComponent, setShowSuccessComponent] = useState(false);
  const [showErrorComponent, setShowErrorComponent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const nickRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [registerData, setRegisterData] = useState<RegsiterData>({
    nick: "",
    password: "",
    email: "",
  });

  const CreateAccountSuccesssfully = () => {
    setShowSuccessComponent(false);
    setShowLoginPage(true);
  };

  const CreateAccountError = () => {
    setShowErrorComponent(false);
  };

  const createAccountHandler = async () => {
    const tab = [
      emailRef.current as HTMLInputElement,
      nickRef.current as HTMLInputElement,
      passwordRef.current as HTMLInputElement,
    ];
    tab.forEach((ele) => {
      ele.style.borderColor = "black";
    });

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = registerData.email.match(regex);

    console.log(result);
    if (registerData.nick !== "" && registerData.password !== "" && result) {
      setShowWaitingComponent(true);
      //fetch data
      const data = await axios.post(
        `${settings.address}/createAccount`,
        registerData
      );

      const sendedData: ReceivedData = data.data;
      setShowWaitingComponent(false);

      if (sendedData.success) {
        setShowSuccessComponent(true);
      } else {
        setShowErrorComponent(true);
        setErrorMessage(sendedData.message);
      }

      console.log(data);
    } else {
      if (registerData.password === "") {
        const inpRef = passwordRef.current as HTMLInputElement;
        inpRef.style.borderColor = "red";
        inpRef.focus();
      }

      if (!result) {
        const inpRef = emailRef.current as HTMLInputElement;
        inpRef.style.borderColor = "red";
        inpRef.focus();
      }

      if (registerData.nick === "") {
        const inpRef = nickRef.current as HTMLInputElement;
        inpRef.style.borderColor = "red";
        inpRef.focus();
      }
    }
  };

  return (
    <>
      <div className="inputsContainer">
        <div className="inputsContainer__inputContainer">
          <h2>Nick</h2>
          <input
            value={registerData.nick}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setRegisterData({
                ...registerData,
                nick: e.target.value,
              });
            }}
            ref={nickRef}
            className="inputsContainer__input"
            type="text"
          />
        </div>
        <div className="inputsContainer__inputContainer">
          <h2>Email</h2>
          <input
            ref={emailRef}
            value={registerData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setRegisterData({
                ...registerData,
                email: e.target.value,
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
            ref={passwordRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setRegisterData({
                ...registerData,
                password: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <button className="loginButton" onClick={createAccountHandler}>
        Zarejestruj się
      </button>
      {showWaitnigComponent ? (
        <WaitingComponent header="Tworzenie konta" />
      ) : (
        ""
      )}
      {showSuccessComponent ? (
        <SuccessComponent
          header="Konto zostało stworzone"
          onClickHandler={CreateAccountSuccesssfully}
        />
      ) : (
        ""
      )}
      {showErrorComponent ? (
        <ErrorComponent
          header={errorMessage}
          onClickHandler={CreateAccountError}
        />
      ) : (
        ""
      )}
    </>
  );
};

interface RegisterComponent {
  setShowLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ReceivedData {
  success: boolean;
  message: string;
}

interface RegsiterData {
  nick: string;
  password: string;
  email: string;
}

export default RegisterComponent;
