import { useEffect, useState } from "react";
import "../style/gamePage/gamePage.scss";
import Field from "../components/gamePage/Field";
import { FieldInfo,LetterInHandInterface } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { io } from "socket.io-client";
import settings from "../settings.json";
import LetterInHand from "../components/gamePage/LetterInHand";
import axios from "axios";
import letters from "../data/letters";
import MainGameLogic from "../components/gamePage/MainGameLogic";

const GamePage = () => {
  const game = useSelector((state: RootState) => state.gameData);
  const user = useSelector((state: RootState) => state.userData);
  const [playLetters,setPlayLetters]=useState(false)
  const [addPoints,setAddPoints] = useState(0)

  const URL = settings.socketAddress;
  const socket = io(URL, {
    query: {
      roomName: game.id,
    },
  });

  function data(value: string) {
    console.log(value);
  }

  useEffect(() => {
    socket.on("send", data);

    return () => {
      socket.off("disconnect", data);
      socket.off("send", data);
    };
  }, []);

  const sendData = async() => {
    console.log("emit");
    socket.emit("send", { room: game.id, data: "bla" });
  };

  const tab: FieldInfo[][] = [];
  for (let i = 0; i < 15; i++) {
    const row = [];
    for (let j = 0; j < 15; j++) {
      row.push({ i: i, j: j, letter: "", empty: true });
    }
    tab.push(row);
  }

  let startFlag = true;
  if (game.player2.id === user._id) {
    startFlag = false;
  }

  const [yourTurn, setYourTurn] = useState(startFlag);
  const [gameSendInformation, setGameSendInformation] = useState({
    board: tab,
    player1: 0,
    player2: 0,
    letters: 86,
  });

  const getRandomInt=(max:number)=> {
    return Math.floor(Math.random() * max);
  }



  const lettersInHandTemporary:Array<LetterInHandInterface> = []
  for(let i = 0;i<7;i++){
    lettersInHandTemporary.push({letter:letters[getRandomInt(32)],id:i})
  }
  console.log(lettersInHandTemporary)

  const [lettersInHand,setLettersInHand]=useState<Array<LetterInHandInterface>>(lettersInHandTemporary)
  const [selectedLetter,setSelectedLetter] = useState(-1)

  const mainGameLogic = MainGameLogic().mainStartGame

  const gameLogic=()=>{
    console.log("test")
    setAddPoints(0)
    setPlayLetters(false)
    mainGameLogic(gameSendInformation,setPlayLetters,setAddPoints)
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
      <button onClick={playLetters?sendData:()=>{}} style={playLetters?{backgroundColor:"green"}:{backgroundColor:"red"}} >add {addPoints} points</button>
      <div className="gamePage__board">
        {gameSendInformation.board.map((row, i) =>
          row.map((ele, j) => {
            return <Field setSelectedLetter={setSelectedLetter} setLettersInHand={setLettersInHand} lettersInHand={lettersInHand} setGameSendInformation={setGameSendInformation} key={`${i}_${j}`} i={i} j={j} fieldInfo={ele} gameLogic={gameLogic} gameSendInformation={gameSendInformation} playLetters={playLetters} selectedLetter={selectedLetter} />;
          })
        )}
      </div>
      <div className="gamePage__hand">
          {lettersInHand.map(ele=>{
            return <LetterInHand key={ele.id} id={ele.id} letter={ele.letter} selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} />
          })}
      </div>
    </div>
  );
};

export default GamePage;
