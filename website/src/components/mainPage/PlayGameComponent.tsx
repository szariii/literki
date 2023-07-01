import "../../style/mainPage/componentSizesVariables.scss";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import LookigForGameComponent from "./LookingForGameComponent";
import ErrorComponent from "../helpiongComponents/ErrorComponent";

import { useState } from "react";

import settings from "../../settings.json"

import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PlayGameComponent = () => {
  const player = useSelector((state: RootState) => state.userData);
  const [showErrorComponent, setShowErrorComponent] = useState(false)
  const [showWaitingComponent, setShowWaitingComponent] = useState(false)

  const errorButtonHandler=()=>{
    setShowErrorComponent(!showErrorComponent)
  }

  const playGameButtonClick=async()=>{
    setShowWaitingComponent(true)
    try{
      console.log(player)
      const data = await axios.post(`${settings.address}/findGame`,{id:player._id})
      console.log(data)
      if(data.data.success){
        
      }else{
        setShowWaitingComponent(false)
        setShowErrorComponent(true)
      }
    }catch{
      setShowWaitingComponent(false)
      setShowErrorComponent(true)
    }
    

  }

  return (
    <div className="mainPageComponent">
      <FontAwesomeIcon
        className="mainPageComponent__icon"
        icon={faChessBoard}
      />

      <button onClick={playGameButtonClick} className="mainPageComponent__button">Graj</button>

      {showWaitingComponent?<LookigForGameComponent header="Szukanie gry" setShowWaitingComponent={setShowWaitingComponent}  />:""}
      {showErrorComponent?<ErrorComponent header="Wystąpił błąd" onClickHandler={errorButtonHandler} />:""}
    </div>
  );
};

export default PlayGameComponent;
