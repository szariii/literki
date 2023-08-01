import "../../style/mainPage/_componentSizesVariables.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const ProfileComponent=()=>{
    return(
        <div className="mainPageComponent">
        <FontAwesomeIcon
          className="mainPageComponent__icon"
          icon={faUser}
        />
  
        <button className="mainPageComponent__button">Profil</button>
      </div>
    )
}

export default ProfileComponent