import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "../../style/helpingComponents/successComponent.scss";
import { MouseEventHandler } from "react";

const SuccessComponent = ({header,onClickHandler}:SuccessComponent) => {
  return (
    <div className="successComponent">
      <div className="successComponent__container" >
        <h2 className="successComponent__title" >{header}</h2>
        <FontAwesomeIcon className="successComponent__icon" icon={faCheck} />
        <button onClick={onClickHandler} className="successComponent__button" >Kontynuuj</button>
      </div>
    </div>
  );
};

interface SuccessComponent{
    header:string
    onClickHandler:MouseEventHandler<HTMLButtonElement>
}

export default SuccessComponent;
