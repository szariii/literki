import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../../style/mainPage/lookingForGameComponent.scss";
import { useEffect } from "react";
import axios from "axios";
import settings from "../../settings.json";

import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slicers/gameData";
import { useNavigate } from "react-router-dom";

const LookigForGameComponent = ({
  header,
  setShowWaitingComponent,
}: LookigForGameComponent) => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const player = useSelector((state: RootState) => state.userData);

  useEffect(()=>{
    const findGameInterval = setInterval(async () => {
      console.log("leci");
      const findedPlayer = await axios.get(`${settings.address}/checkForGame`, {
        params: { id: player._id },
      });
      if(findedPlayer.data.findedGame){
        console.log(findedPlayer.data)
        navigate(`/game/${findedPlayer.data.rooms[0].id}`)
        dispatch(add(findedPlayer.data.rooms[0]))
        setShowWaitingComponent(false)
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
