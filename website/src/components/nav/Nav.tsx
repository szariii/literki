import { RootState } from "../../redux/store";
import "../../style/nav/_nav.scss";

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/slicers/userData";

import useCookies from "react-cookie/cjs/useCookies";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate();
  
  let tempShowLogout = true
  try{
    console.log("no ten")
    if(location.pathname.split("/")[1]==="game"){
      console.log("check")
      tempShowLogout=false
    }
  }catch{

  }

  const [showLogout, setShowLogout] = useState(tempShowLogout)
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userData);

  const buttonClickhandler = () => {
    removeCookie("user");
    dispatch(remove());
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1 onClick={showLogout?()=>{navigate("/main")}:()=>{} } className="navbar__title">Literki</h1>
      {user._id === "0" && !showLogout ? (
        ""
      ) : (
        <button className="navbar__button" onClick={buttonClickhandler}>
          Wyloguj
        </button>
      )}

      {/* <div className="navbar__container">
        <button className="navbar__button"></button>
        <button className="navbar__button"></button>
        <button className="navbar__button"></button>
      </div> */}
    </div>
  );
};

export default Nav;
