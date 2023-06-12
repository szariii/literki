import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "../../style/helpingComponents/errorComponent.scss";
import { MouseEventHandler } from "react";

const ErrorComponent = ({header,onClickHandler}:ErrorComponent) => {
  return (
    <div className="errorComponent">
      <div className="errorComponent__container" >
        <h2 className="errorComponent__title" >{header}</h2>
        <FontAwesomeIcon className="errorComponent__icon" icon={faX} />
        <button onClick={onClickHandler} className="errorComponent__button" >Kontynuuj</button>
      </div>
    </div>
  );
};

interface ErrorComponent{
    header:string
    onClickHandler:MouseEventHandler<HTMLButtonElement>
}

export default ErrorComponent;
