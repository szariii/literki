import {
  FieldInfo,
  GameSendInformation,
  LetterInHandInterface,
} from "../../interfaces";
import "../../style/gamePage/field.scss";
import pointsForData from "../../data/pointsForData";

import {useState,useEffect} from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Field = ({
  fieldInfo,
  i,
  j,
  gameLogic,
  gameSendInformation,
  setGameSendInformation,
  selectedLetter,
  lettersInHand,
  setLettersInHand,
  setSelectedLetter,
  yourTurn
}: Field) => {
  const game = useSelector((state: RootState) => state.gameData);
  let point = ""
  pointsForData.map(ele=>{
    if(ele.letters.includes(fieldInfo.letter)){
      point= ele.points.toString()
    }
  })
  const [points,setPoints] = useState(point)

  useEffect(()=>{
    let point = ""
    pointsForData.map(ele=>{
      if(ele.letters.includes(fieldInfo.letter)){
        point= ele.points.toString()
      }
    })
    setPoints(point)
  },[gameSendInformation])


  let className = "";
  game.bonusPlaces.map((ele) => {
    if (ele.i === i && ele.j === j) {
      className = `--${ele.type}`;
    }
  });

  if (i === 7 && j === 7) {
    className = "--start";
  }

  const clickHandler = () => {
    if (fieldInfo.letter === "") {
      if (selectedLetter !== -1) {
        let boardTemporary = gameSendInformation.board;
        let letter = "";
        lettersInHand.map((ele) =>
          ele.id === selectedLetter ? (letter = ele.letter) : ""
        );
        boardTemporary[i][j] = {
          ...gameSendInformation.board[i][j],
          letter: letter,
        };

        setLettersInHand(
          lettersInHand.filter((ele) => ele.id !== selectedLetter)
        );
        setSelectedLetter(-1);
        setGameSendInformation({
          ...gameSendInformation,
          board: [...gameSendInformation.board],
        });
      }
    } else {
      let maxIndex = 0;
      lettersInHand.map((ele) =>
        ele.id >= maxIndex ? (maxIndex = ele.id + 1) : ""
      );
      console.log(maxIndex);
      console.log(fieldInfo.letter);
      setLettersInHand([
        ...lettersInHand,
        { id: maxIndex, letter: fieldInfo.letter },
      ]);

      let boardTemporary = gameSendInformation.board;
      boardTemporary[i][j] = {...gameSendInformation.board[i][j], letter: "" };

      setGameSendInformation({
        ...gameSendInformation,
        board: boardTemporary,
      });
    }
    gameLogic();
  };

  return (
    <div
      onClick={gameSendInformation.board[i][j].empty && yourTurn ? clickHandler : () => {}}
      className={`field${className}`}
    >
      <h4
        style={gameSendInformation.board[i][j].empty ? { color: "green" } : {}}
      >
        {fieldInfo.letter}<sub >{points}</sub>
      </h4>
    </div>
  );
};
export default Field;

interface Field {
  fieldInfo: FieldInfo;
  i: number;
  j: number;
  gameLogic: Function;
  gameSendInformation: GameSendInformation;
  playLetters: boolean;
  setGameSendInformation: React.Dispatch<React.SetStateAction<GameSendInformation>>
  selectedLetter: number;
  lettersInHand: LetterInHandInterface[];
  setLettersInHand: React.Dispatch<
    React.SetStateAction<LetterInHandInterface[]>
  >;
  setSelectedLetter: React.Dispatch<React.SetStateAction<number>>;
  yourTurn:boolean
}
