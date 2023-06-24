import "../../style/mainPage/componentSizesVariables.scss";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FriendsComponent = () => {
  return (
    <div className="mainPageComponent">
      <FontAwesomeIcon
        className="mainPageComponent__icon"
        icon={faUserGroup}
      />

      <button className="mainPageComponent__button">Znajomi</button>
    </div>
  );
};

export default FriendsComponent;
