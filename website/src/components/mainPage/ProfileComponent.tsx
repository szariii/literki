import "../../style/mainPage/_componentSizesVariables.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="mainPageComponent" onClick={()=>{navigate("/profile")}} >
      <FontAwesomeIcon className="mainPageComponent__icon" icon={faUser} />

      <button className="mainPageComponent__button">Profil</button>
    </div>
  );
};

export default ProfileComponent;
