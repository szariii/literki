import { RootState } from "../../redux/store";
import "../../style/nav/_nav.scss";

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/slicers/userData";

import useCookies from "react-cookie/cjs/useCookies";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
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
      <h1 className="navbar__title">Literki</h1>
      {user._id === "0" ? (
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
