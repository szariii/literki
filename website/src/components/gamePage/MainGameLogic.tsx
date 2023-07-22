import axios from "axios";
import { GameSendInformation } from "../../interfaces";
import settings from "../../settings.json";

const MainGameLogic = () => {
  const findWordVertically = (
    gameSendInformation: GameSendInformation,
    i: number,
    j: number,
    firstMove: boolean
  ) => {
    let word = gameSendInformation.board[i][j].letter;
    let iIndexTemporary = i - 1;
    let condition = false;
    if(i===7 && j===7){
      condition=true
    }
    while (iIndexTemporary >= 0) {
      if (gameSendInformation.board[iIndexTemporary][j].letter !== "") {
        word = gameSendInformation.board[iIndexTemporary][j].letter + word;
        if(firstMove){
          if (iIndexTemporary === 7 && j === 7) {
            condition = true;
          }
        }else{
          if(!gameSendInformation.board[iIndexTemporary][j].empty){
            condition=true
          }
        }

      } else {
        break;
      }
      iIndexTemporary--;
    }

    const startIndex = {
      i: iIndexTemporary,
      j: j,
    };

    iIndexTemporary = i + 1;
    while (iIndexTemporary < 15) {
      if (gameSendInformation.board[iIndexTemporary][j].letter !== "") {
        word = word + gameSendInformation.board[iIndexTemporary][j].letter;
        if(firstMove){
          if (iIndexTemporary === 7 && j === 7) {
            condition = true;
          }
        }else{
          if(!gameSendInformation.board[iIndexTemporary][j].empty){
            condition=true
          }
        }
      } else {
        break;
      }
      iIndexTemporary++;
    }

    const endIndex = {
      i: iIndexTemporary,
      j: j,
    };

    const wordToArray: CheckWord = {
      word: word,
      start: startIndex,
      end: endIndex,
      condition: condition,
    };

    return wordToArray;
  };

  const mainStartGame = async (
    gameSendInformation: GameSendInformation,
    setPlayLetters: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    console.log(gameSendInformation.board);
    let firstMove = true;
    gameSendInformation.board.map((row) => {
      row.map((field) => {
        if (!field.empty) {
          console.log("hmm");
          firstMove = false;
        }
      });
    });
    console.log(firstMove);
    if (firstMove) {
      if (gameSendInformation.board[7][7].letter === "") return;
    }

    const wordsArray: Array<WordToArray> = [];

    gameSendInformation.board.map((row, i) =>
      row.map((field, j) => {
        if (field.empty && field.letter !== "") {
          const wordVertically = findWordVertically(
            gameSendInformation,
            i,
            j,
            firstMove
          );

          if (!wordVertically.condition) {
            //setPlayLetters(false);
            console.log("warunek not")
            return;
          }

          let wordExist = false;

          wordsArray.map((word) => {
            if (
              JSON.stringify(word.start) ===
                JSON.stringify(wordVertically.start) &&
              JSON.stringify(word.end) === JSON.stringify(wordVertically.end)
            ) {
              wordExist = true;
            }
          });

          if (!wordExist) {
            wordsArray.push(wordVertically);
          }

          //const WordVertically;
        }
      })
    );

    console.log(wordsArray);

    const data = await axios.get(`${settings.address}/checkWords`);
    console.log(data);
    setPlayLetters(true);
  };

  return { mainStartGame };
};

interface WordToArray {
  word: string;
  start: {
    i: number;
    j: number;
  };
  end: {
    i: number;
    j: number;
  };
}

interface CheckWord {
  word: string;
  start: {
    i: number;
    j: number;
  };
  end: {
    i: number;
    j: number;
  };
  condition: boolean;
}

export default MainGameLogic;
