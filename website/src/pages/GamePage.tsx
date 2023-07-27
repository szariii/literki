import { useEffect, useState } from "react";
import "../style/gamePage/gamePage.scss";
import Field from "../components/gamePage/Field";
import {
  FieldInfo,
  GameSendInformation,
  LetterInHandInterface,
} from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { io } from "socket.io-client";
import settings from "../settings.json";
import LetterInHand from "../components/gamePage/LetterInHand";
import letters from "../data/letters";
import MainGameLogic from "../components/gamePage/MainGameLogic";
import EndGameComponent from "../components/gamePage/EndGameComponent";
import { win, lose } from "../redux/slicers/userData";

const GamePage = () => {
  //console.log('hl')
  const game = useSelector((state: RootState) => state.gameData);
  const user = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch()
  const [changingLetters, setChangingLetters] = useState(false);
  const [putedLettersOnBoard, setPutedLettersOnBoard] = useState(false);
  const [playLetters, setPlayLetters] = useState(false);
  const [addPoints, setAddPoints] = useState(0);
  const [selectedLettersToChange, setSelectedLettersToChange] = useState<
    number[]
  >([]);
  const [enemyMove,setEnemyMove] = useState("")
  const [dataEndGameComponent,setDataEndGameComponent]=useState({show:false, result:""})

  const URL = settings.socketAddress;
  const socket = io(URL, {
    query: {
      roomName: game.id,
    },
  });

  function data(value: string) {
    console.log(value);
  }

  const tab: FieldInfo[][] = [];
  for (let i = 0; i < 15; i++) {
    const row = [];
    for (let j = 0; j < 15; j++) {
      row.push({ i: i, j: j, letter: "", empty: true });
    }
    tab.push(row);
  }

  let startFlag = true;
  let player: "player1" | "player2" = "player1";
  let playerId = game.player1.id;
  if (game.player2.id === user._id) {
    startFlag = false;
    player = "player2";
    playerId = game.player2.id;
  }

  const [yourTurn, setYourTurn] = useState(startFlag);
  const [gameSendInformation, setGameSendInformation] =
    useState<GameSendInformation>({
      board: tab,
      player1: 0,
      player2: 0,
      letters: 86,
      movingSide: playerId,
      players: [game.player1.id, game.player2.id],
    });

  useEffect(() => {
    socket.on("send", (data: { room: string, data: GameSendInformation, msg:string }) => {
      console.log("data", data);
      const newData = data.data;
      setGameSendInformation({
        ...gameSendInformation,
        board: newData.board,
        letters: newData.letters,
        player1: newData.player1,
        player2: newData.player2,
        movingSide: newData.movingSide,
      });


      if(data.msg==="player1"||data.msg==="player2"||data.msg==="draw"){
        if(data.msg!=="draw"){
          const winnerId = game[data.msg].id
          if(winnerId===user._id){
            //win
            dispatch(win)
            setDataEndGameComponent({...dataEndGameComponent, show:true, result:"win"})
          }else{
            //lose
            dispatch(lose)
            setDataEndGameComponent({...dataEndGameComponent, show:true, result:"lose"})
          }
        }else{
          //draw
          setDataEndGameComponent({...dataEndGameComponent, show:true, result:"draw"})
        }
      }else{
        setEnemyMove(data.msg)

        if (newData.movingSide === playerId) {
          setYourTurn(true);
        }
      }


    });

    return () => {
      socket.off("disconnect", data);
      socket.off("send", data);
    };
  }, []);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const lettersInHandTemporary: Array<LetterInHandInterface> = [];
  for (let i = 0; i < 7; i++) {
    lettersInHandTemporary.push({ letter: letters[getRandomInt(32)], id: i });
  }
  console.log(lettersInHandTemporary);

  const [lettersInHand, setLettersInHand] = useState<
    Array<LetterInHandInterface>
  >(lettersInHandTemporary);
  const [selectedLetter, setSelectedLetter] = useState(-1);

  const mainGameLogic = MainGameLogic().mainStartGame;

  const gameLogic = () => {
    console.log("test");
    setAddPoints(0);
    setPlayLetters(false);
    mainGameLogic(
      gameSendInformation,
      setPlayLetters,
      setAddPoints,
      setPutedLettersOnBoard
    );
  };

  const addLettersToHand = (temporarySendInfo: GameSendInformation) => {
    const temporaryLettersInHand = lettersInHand;
    while (temporarySendInfo.letters > 0 && temporaryLettersInHand.length < 7) {
      temporarySendInfo.letters = temporarySendInfo.letters - 1;
      let maxIndex = 0;
      temporaryLettersInHand.map((letter) => {
        if (maxIndex <= letter.id) {
          maxIndex = letter.id + 1;
        }
      });

      temporaryLettersInHand.push({
        letter: letters[getRandomInt(32)],
        id: maxIndex,
      });
    }
    setLettersInHand(temporaryLettersInHand);
    return temporarySendInfo;
  };

  const changeLettersHandler = () => {
    console.log("hehhe");
    setSelectedLetter(-1);
    setChangingLetters(true);
  };

  const cancelChangeLettersHandler = () => {
    setSelectedLettersToChange([]);
    setChangingLetters(false);
  };

  const sendData = async () => {
    let temporarySendInfo = gameSendInformation;
    console.log(gameSendInformation);
    console.log(addPoints);
    temporarySendInfo[player] = gameSendInformation[player] + addPoints;
    temporarySendInfo.board.map((row) => {
      row.map((letter) => {
        if (letter.letter !== "" && letter.empty) {
          letter.empty = false;
        }
      });
    });
    console.log(temporarySendInfo);
    temporarySendInfo = addLettersToHand(temporarySendInfo);
    setGameSendInformation(temporarySendInfo);
    setAddPoints(0);
    setPutedLettersOnBoard(false);
    setYourTurn(false);
    socket.emit("send", { room: game.id, data: temporarySendInfo,msg:"Created word" });
  };

  const changeLetters = () => {
    let temporarylettersInHand = lettersInHand;
    temporarylettersInHand = temporarylettersInHand.filter(
      (ele) => selectedLettersToChange.includes(ele.id) === false
    );
    console.log(temporarylettersInHand);
    while (temporarylettersInHand.length < 7) {
      let maxIndex = 0;
      temporarylettersInHand.map((ele) => {
        if (maxIndex <= ele.id) {
          maxIndex = ele.id + 1;
        }
      });

      temporarylettersInHand.push({
        letter: letters[getRandomInt(32)],
        id: maxIndex,
      });
    }
    console.log(temporarylettersInHand);
    setSelectedLettersToChange([]);
    setLettersInHand(temporarylettersInHand);
    setChangingLetters(false);
    setPutedLettersOnBoard(false);
    setYourTurn(false);
    socket.emit("send", { room: game.id, data: gameSendInformation, msg:"Changed letters" });
  };

  const skipTour=()=>{
    if(enemyMove==="Skiped letters"){
      socket.emit("send", { room: game.id, data: gameSendInformation, msg:"Finish game" });
      setYourTurn(false)
    }else{
      socket.emit("send", { room: game.id, data: gameSendInformation, msg:"Skiped letters" });
      setYourTurn(false)
    }
  }



  return (
    <div className="gamePage">
      <div className="gamePage__header">
        <div className="gamePage__player">
          <h3 className="gamePage__nick">{game.player1.nick}</h3>
          <h4 className="gamePage__points">{gameSendInformation.player1}</h4>
        </div>
        <div className="gamePage__gameInformation">
          {yourTurn ? <h3>Twoja kolej</h3> : <h3>Przeciwnika kolej</h3>}
          <h4 className="gamePage__letters">
            Zostało literek:{gameSendInformation.letters}
          </h4>
        </div>
        <div className="gamePage__player">
          <h3 className="gamePage__nick">{game.player2.nick}</h3>
          <h4 className="gamePage__points">{gameSendInformation.player2}</h4>
        </div>
      </div>
      {putedLettersOnBoard && lettersInHand.length!==0 ? (
        ""
      ) : (
        <button
          onClick={
            yourTurn
              ? !changingLetters
                ? changeLettersHandler
                : changeLetters
              : () => {}
          }
        >
          Wymień literki
        </button>
      )}
      {changingLetters ? (
        <button
          onClick={cancelChangeLettersHandler}
          style={{ backgroundColor: "red" }}
        >
          anuluj
        </button>
      ) : (
        <button
          onClick={playLetters ? sendData : () => {}}
          style={
            addPoints !== 0
              ? { backgroundColor: "green" }
              : { backgroundColor: "red" }
          }
        >
          add {addPoints} points
        </button>
      )}

      {!changingLetters && !putedLettersOnBoard ? <button onClick={skipTour} >Pasuj</button> :""}

      <div className="gamePage__board">
        {gameSendInformation.board.map((row, i) =>
          row.map((ele, j) => {
            return (
              <Field
                setSelectedLetter={setSelectedLetter}
                setLettersInHand={setLettersInHand}
                lettersInHand={lettersInHand}
                setGameSendInformation={setGameSendInformation}
                key={`${i}_${j}`}
                i={i}
                j={j}
                fieldInfo={ele}
                gameLogic={gameLogic}
                gameSendInformation={gameSendInformation}
                playLetters={playLetters}
                selectedLetter={selectedLetter}
              />
            );
          })
        )}
      </div>
      <div className="gamePage__hand">
        {lettersInHand.map((ele) => {
          return (
            <LetterInHand
              key={ele.id}
              id={ele.id}
              letter={ele.letter}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
              selectedLettersToChange={selectedLettersToChange}
              setSelectedLettersToChange={setSelectedLettersToChange}
              changingLetters={changingLetters}
            />
          );
        })}
      </div>
      {dataEndGameComponent.show?<EndGameComponent result={dataEndGameComponent.result} gameSendInformation={gameSendInformation} />:""}
    </div>
  );
};

export default GamePage;
