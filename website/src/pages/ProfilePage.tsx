import "../style/profilePage/_profilePage.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store";
import { useState } from "react";
import axios from "axios";
import settings from "../settings.json"

import WaitingComponent from "../components/helpiongComponents/WaitingComponent";
import SuccessComponent from "../components/helpiongComponents/SuccessComponent";
import ErrorComponent from "../components/helpiongComponents/ErrorComponent";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.userData);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [color,setColor] = useState("red")
  const [showSuccessMessage,setShowSuccessMessage] = useState(false)
  const [showWaitingComponent,setShowWaitingComponent]=useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const checkCorrect = (type:string,value:string) => {

    let repeat = passwordRepeat
    let passwordTemporary = password
    if(type==="password"){
      passwordTemporary=value
    }else{
      repeat=value
    }

      if (passwordTemporary !== "" && repeat === passwordTemporary) {
        setColor("green")
      } else {
        setColor("red")
      }
    }
  const sendData = async() => {
    if(color==="green"){
      console.log(password)
      console.log(passwordRepeat)
      setShowWaitingComponent(true)
      const data = await axios.put(`${settings.address}/changePassword`,{id:user._id, newPassword:password})
      setShowWaitingComponent(false)
      if(data.data){
        setShowSuccessMessage(true)
      }else{
        setShowErrorMessage(true)
      }
      
      console.log(data)
    }

  };

  return (
    <div className="profile">
      <h1 style={{ textAlign: "center" }}>Twój profil</h1>
      <div className="profile__mainContent">
        <div className="profile__baseInfoContainer">
          <div className="profile__infoContainer">
            <h3 style={{ textAlign: "center" }}>Nick</h3>
            <h3 style={{ textAlign: "center" }}>{user.nick}</h3>
          </div>
          <div className="profile__infoContainer">
            <h3 style={{ textAlign: "center" }}>points</h3>
            <h3 style={{ textAlign: "center" }}>{user.points}</h3>
          </div>
          <div className="profile__infoContainer">
            <h3 style={{ textAlign: "center" }}>Email</h3>
            <h3 style={{ textAlign: "center" }}>{user.email}</h3>
          </div>
        </div>
        <div className="profile__changePasswordForm">
          <div>
            <p style={{ textAlign: "center" }}>Zmień hasło</p>
            <input
              className="profile__input"
              type="password"
              value={password}
              onChange={(ele) => {
                setPassword(ele.target.value);
                checkCorrect("password",ele.target.value);
              }}
            />
          </div>
          <div>
            <p style={{ textAlign: "center" }}>Powtórz hasło</p>
            <input
              className="profile__input"
              type="password"
              value={passwordRepeat}
              onChange={(ele) => {
                setPasswordRepeat(ele.target.value);
                checkCorrect("repeat",ele.target.value);
              }}
            />
          </div>
          <button
            style={{backgroundColor:color}}
            onClick={sendData}
            className="profile__button"
          >
            Zmień
          </button>
        </div>
      </div>
      {showWaitingComponent?<WaitingComponent header="Zmienianie hasła..." />:""}
      {showSuccessMessage?<SuccessComponent header="Sukces" onClickHandler={()=>{setShowSuccessMessage(false)}} />:""}
      {showErrorMessage?<ErrorComponent header="Błąd" onClickHandler={()=>{setShowErrorMessage(false)}} />:""}
    </div>
  );
};

export default ProfilePage;
