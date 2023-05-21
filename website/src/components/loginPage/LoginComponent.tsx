import { useState } from "react";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    nick: "",
    password: "",
  });

  return (
    <div>
      <p>LoginComponent</p>
    </div>
  );
};

export default LoginComponent;

interface LoginData {
  nick: string;
  password: string;
}
