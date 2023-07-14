import { useEffect, useState } from "react";
import "../style/gamePage/gamePage.scss";
import Field from "../components/gamePage/Field";
import { FieldInfo } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { io } from 'socket.io-client';
import settings from "../settings.json"

const GamePage = () => {
  const game = useSelector((state:RootState)=>state.gameData)
  
  const URL =settings.socketAddress
  const socket = io(URL,{query:{
    roomName:game.id
  }})

  useEffect(() => {

    function data(value: string) {
      console.log(value);
    }

    socket.on("send", data);

    return () => {
      socket.off("send", data);
    };
  }, []);

  const sendData = () => {
    console.log("emit");
    socket.emit("send", {room:game.id,data:"bla"});
  };

  const [yourTurn, setYourTurn] = useState({});

  const tab: FieldInfo[][] = [];
  for (let i = 0; i < 15; i++) {
    const row = [];
    for (let j = 0; j < 15; j++) {
      row.push({i:i,j:j, letter: "", status: "empty" });
    }
    tab.push(row);
  }

  const [gameSendInformation,setGameSendInformation]=useState({board:tab,player1:0,player2:0})

  return (
    <div className="gamePage">
      <div className="gamePage__header">
        <div className="gamePage__player"><h3>{game.player1.nick}</h3></div>
        <div className="gamePage__gameInformation">
          {yourTurn ? <h3>Twoja kolej</h3> : <h3>Przeciwnika kolej</h3>}
          <h4>Zostało literek:</h4>
        </div>
        <div className="gamePage__player"><h3>{game.player2.nick}</h3><h4></h4></div>
      </div>
      <button onClick={sendData}>Zagraj to słowo</button>
      <div className="gamePage__board">
        {gameSendInformation.board.map((row, i) =>
          row.map((ele, j) => {
            return <Field i={i} j={j} fieldInfo={ele} />;
          })
        )}
      </div>
      <div className="gamePage_hand">
        <div
          className="field"
          style={{ width: "1.25rem", height: "1.25rem" }}
        ></div>
      </div>
    </div>
  );
};

export default GamePage;
