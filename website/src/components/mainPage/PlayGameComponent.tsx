import "../../style/mainPage/componentSizesVariables.scss";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayGameComponent = () => {
  return (
    <div className="mainPageComponent">
      <FontAwesomeIcon
        className="mainPageComponent__icon"
        icon={faChessBoard}
      />

      <button className="mainPageComponent__button">Graj</button>
    </div>
  );
};

export default PlayGameComponent;
