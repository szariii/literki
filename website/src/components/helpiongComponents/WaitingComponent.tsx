import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../../style/helpingComponents/_waitnigComponent.scss";

const WaitingComponent = ({header}:WaitingComponent) => {
  return (
    <div className="waitingComponent">
      <div className="waitingComponent__container" >
        <h1 className="waitingComponent__title" >{header}</h1>
        <FontAwesomeIcon className="waitingComponent__icon" icon={faSpinner} spinPulse />
      </div>
    </div>
  );
};

interface WaitingComponent{
    header:string
}

export default WaitingComponent;
