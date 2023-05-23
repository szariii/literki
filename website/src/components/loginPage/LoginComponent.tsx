import { useState } from "react";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    nick: "",
    password: "",
  });

  return (
    <div className="loginComponent" >
      <p>LoginComponent</p>
      {/* <h1>Sad</h1>
      <h2>Sad</h2>
      <h3>Sad</h3>
      <h4>Sad</h4>
      <h5>Sad</h5>
      <h6>Sad</h6>
      <p>Sad</p> */}
      <div className="loginComponent__inputs" >
        <div>
          <h2>nick</h2>
          <input type="text" />
        </div>
      </div>
      <button>Zaloguj się</button>
    </div>
  );
};

export default LoginComponent;

interface LoginData {
  nick: string;
  password: string;
}
