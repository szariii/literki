import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../../style/mainPage/lookingForGameComponent.scss";
import { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import settings from "../../settings.json";

import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

const LookigForGameComponent = ({
  header,
  setShowWaitingComponent,
}: LookigForGameComponent) => {
  const player = useSelector((state: RootState) => state.userData);

  useEffect(()=>{
    const findGameInterval = setInterval(async () => {
      console.log("leci");
      const findedPlayer = await axios.get(`${settings.address}/checkForGame`, {
        params: { id: player._id },
      });
      if(findedPlayer.data.success){

      }
    }, 500);

    return () => {
      console.log("clean")
      clearInterval(findGameInterval);

      axios.post(`${settings.address}/cancelFindGame`, { id: player._id });
    };
  },[])


  const onClickHandler = () => {
    console.log("bla");
    setShowWaitingComponent(false);
  };

  return (
    <div className="lookingForGameComponent">
      <div className="lookingForGameComponent__container">
        <h1 className="lookingForGameComponent__title">{header}</h1>
        <FontAwesomeIcon
          className="lookingForGameComponent__icon"
          icon={faSpinner}
          spinPulse
        />
        <button
          onClick={onClickHandler}
          className="lookingForGameComponent__button"
        >
          Wyjdź
        </button>
      </div>
    </div>
  );
};

interface LookigForGameComponent {
  header: string;
  setShowWaitingComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default LookigForGameComponent;
