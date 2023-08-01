import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import "../../style/gamePage/_endGame.scss";
import { GameSendInformation } from "../../interfaces";
import { endGame } from "../../redux/slicers/gameData";
import { useNavigate} from "react-router-dom"

const EndGameComponent = ({
  result,
  gameSendInformation,
}: EndGameComponent) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.userData);
  const game = useSelector((state: RootState) => state.gameData);

  let dataToShowOnComponent = {
    title: "Wygrałeś!!!",
    mainColor:"#3f6c36",
    fontColor:"#63366C"
  };

  if(result==="lose"){
   dataToShowOnComponent.title="Przegrałeś"
   dataToShowOnComponent.mainColor="#aa4343"
   dataToShowOnComponent.fontColor="#43AAAA"
  }else if(result==="draw"){
   dataToShowOnComponent.title="Remis"
   dataToShowOnComponent.mainColor="#aa8b43"
   dataToShowOnComponent.fontColor="#4362AA"
  }

  const buttonClickHandler=()=>{
   dispatch(endGame())
   navigate("/main")
  }


  return (
    <div className="endGame">
      <div className="endGame__container" style={{backgroundColor:dataToShowOnComponent.mainColor}} >
      <h1 style={{color:dataToShowOnComponent.fontColor}} className="endGame__title">{dataToShowOnComponent.title}</h1>
        <div className="endGame__playersCompare" >
          <div className="endGame__playerContainer" >
            <h3 style={{color:dataToShowOnComponent.fontColor}} >{game.player1.nick}</h3>
            <h4 style={{color:dataToShowOnComponent.fontColor}}>{gameSendInformation.player1}</h4>
          </div>
          <h3 style={{color:dataToShowOnComponent.fontColor}}>VS</h3>
          <div className="endGame__playerContainer" >
            <h3 style={{color:dataToShowOnComponent.fontColor}}>{game.player2.nick}</h3>
            <h4 style={{color:dataToShowOnComponent.fontColor}}>{gameSendInformation.player2}</h4>
          </div>
        </div>
        
        <h3 style={{color:dataToShowOnComponent.fontColor}}>Masz teraz: {user.points} punktów</h3>
        <button onClick={buttonClickHandler} className="endGame__button" style={{backgroundColor:dataToShowOnComponent.fontColor, color:dataToShowOnComponent.mainColor}} >Wróć do głównej strony</button>
      </div>
    </div>
  );
};

export default EndGameComponent;

interface EndGameComponent {
  result: string;
  gameSendInformation: GameSendInformation;
}
