import axios from "axios";
import { GameSendInformation } from "../../interfaces";
import settings from "../../settings.json";
import pointsForData from "../../data/pointsForData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const MainGameLogic = () => {
  const game = useSelector((data: RootState) => data.gameData);
  const findWordHorizontally = (
    gameSendInformation: GameSendInformation,
    i: number,
    j: number,
    firstMove: boolean
  ) => {
    let word = gameSendInformation.board[i][j].letter;
    let jIndexTemporary = j - 1;
    let condition = false;
    const bonusPlaces: BonusPlacesInWord[] = [];
    if (i === 7 && j === 7) {
      condition = true;
    }

    game.bonusPlaces.map((ele) => {
      if (ele.i === i && ele.j === j) {
        bonusPlaces.push({
          letter: gameSendInformation.board[i][j].letter,
          bonus: ele.type,
        });
      }
    });

    while (jIndexTemporary >= 0) {
      if (gameSendInformation.board[i][jIndexTemporary].letter !== "") {
        word = gameSendInformation.board[i][jIndexTemporary].letter + word;
        if (firstMove) {
          if (i === 7 && jIndexTemporary === 7) {
            condition = true;
          }
        } else {
          if (!gameSendInformation.board[i][jIndexTemporary].empty) {
            condition = true;
          }
        }

        game.bonusPlaces.map((ele) => {
          if (ele.i === i && ele.j === jIndexTemporary) {
            bonusPlaces.push({
              letter: gameSendInformation.board[i][jIndexTemporary].letter,
              bonus: ele.type,
            });
          }
        });
      } else {
        break;
      }
      jIndexTemporary--;
    }

    const startIndex = {
      i: i,
      j: jIndexTemporary + 1,
    };

    jIndexTemporary = j + 1;
    while (jIndexTemporary < 15) {
      if (gameSendInformation.board[i][jIndexTemporary].letter !== "") {
        word = word + gameSendInformation.board[i][jIndexTemporary].letter;
        if (firstMove) {
          if (i === 7 && jIndexTemporary === 7) {
            condition = true;
          }
        } else {
          if (!gameSendInformation.board[i][jIndexTemporary].empty) {
            condition = true;
          }
        }

        game.bonusPlaces.map((ele) => {
          if (ele.i === i && ele.j === jIndexTemporary) {
            bonusPlaces.push({
              letter: gameSendInformation.board[i][jIndexTemporary].letter,
              bonus: ele.type,
            });
          }
        });
      } else {
        break;
      }
      jIndexTemporary++;
    }

    const endIndex = {
      i: i,
      j: jIndexTemporary - 1,
    };

    const wordToArray: CheckWord = {
      word: word,
      start: startIndex,
      end: endIndex,
      condition: condition,
      bonusPlaces: bonusPlaces,
    };

    return wordToArray;
  };

  const findWordVertically = (
    gameSendInformation: GameSendInformation,
    i: number,
    j: number,
    firstMove: boolean
  ) => {
    let word = gameSendInformation.board[i][j].letter;
    let iIndexTemporary = i - 1;
    let condition = false;
    const bonusPlaces: BonusPlacesInWord[] = [];
    if (i === 7 && j === 7) {
      condition = true;
    }

    game.bonusPlaces.map((ele) => {
      if (ele.i === i && ele.j === j) {
        bonusPlaces.push({
          letter: gameSendInformation.board[i][j].letter,
          bonus: ele.type,
        });
      }
    });

    while (iIndexTemporary >= 0) {
      if (gameSendInformation.board[iIndexTemporary][j].letter !== "") {
        word = gameSendInformation.board[iIndexTemporary][j].letter + word;
        if (firstMove) {
          if (iIndexTemporary === 7 && j === 7) {
            condition = true;
          }
        } else {
          if (!gameSendInformation.board[iIndexTemporary][j].empty) {
            condition = true;
          }
        }
        console.log(iIndexTemporary, j);
        game.bonusPlaces.map((ele) => {
          if (ele.i === iIndexTemporary && ele.j === j) {
            bonusPlaces.push({
              letter: gameSendInformation.board[iIndexTemporary][j].letter,
              bonus: ele.type,
            });
          }
        });
      } else {
        break;
      }
      iIndexTemporary--;
    }

    const startIndex = {
      i: iIndexTemporary + 1,
      j: j,
    };

    iIndexTemporary = i + 1;
    while (iIndexTemporary < 15) {
      if (gameSendInformation.board[iIndexTemporary][j].letter !== "") {
        word = word + gameSendInformation.board[iIndexTemporary][j].letter;
        if (firstMove) {
          if (iIndexTemporary === 7 && j === 7) {
            condition = true;
          }
        } else {
          if (!gameSendInformation.board[iIndexTemporary][j].empty) {
            condition = true;
          }
        }

        game.bonusPlaces.map((ele) => {
          if (ele.i === iIndexTemporary && ele.j === j) {
            bonusPlaces.push({
              letter: gameSendInformation.board[iIndexTemporary][j].letter,
              bonus: ele.type,
            });
          }
        });
      } else {
        break;
      }
      iIndexTemporary++;
    }

    const endIndex = {
      i: iIndexTemporary - 1,
      j: j,
    };

    const wordToArray: CheckWord = {
      word: word,
      start: startIndex,
      end: endIndex,
      condition: condition,
      bonusPlaces: bonusPlaces,
    };

    return wordToArray;
  };

  const mainStartGame = async (
    gameSendInformation: GameSendInformation,
    setPlayLetters: React.Dispatch<React.SetStateAction<boolean>>,
    setAddPoints: React.Dispatch<React.SetStateAction<number>>,
    setPutedLettersOnBoard:React.Dispatch<React.SetStateAction<boolean>>
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


    let wordsCreatedSuccessfully = true;

    const wordsArray: Array<CheckWord> = [];
    let putedLetterOnBoardFlag = false
    console.log(gameSendInformation.board)
    gameSendInformation.board.map((row, i) =>
      row.map((field, j) => {
        if (field.empty && field.letter !== "") {
          let createdWord = false;
          console.log("wartość flaga zmianma")
          putedLetterOnBoardFlag=true

          const wordVertically = findWordVertically(
            gameSendInformation,
            i,
            j,
            firstMove
          );

          if (wordVertically.condition && wordVertically.word.length > 1) {
            createdWord = true;
            //setPlayLetters(false);
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
          }
          const wordHorizontally = findWordHorizontally(
            gameSendInformation,
            i,
            j,
            firstMove
          );

          console.log(wordHorizontally);

          if (wordHorizontally.condition && wordHorizontally.word.length > 1) {
            createdWord = true;
            let wordExist = false;

            wordsArray.map((word) => {
              if (
                JSON.stringify(word.start) ===
                  JSON.stringify(wordHorizontally.start) &&
                JSON.stringify(word.end) ===
                  JSON.stringify(wordHorizontally.end)
              ) {
                wordExist = true;
              }
            });

            if (!wordExist) {
              wordsArray.push(wordHorizontally);
            }
          }
          if (!createdWord) {
            wordsCreatedSuccessfully = false;
          }
        }
      })
    );
      console.log("puteed", putedLetterOnBoardFlag)
    setPutedLettersOnBoard(putedLetterOnBoardFlag)
    if (firstMove) {
      if (gameSendInformation.board[7][7].letter === "") return;
    }

    if (wordsCreatedSuccessfully && wordsArray.length > 0) {
      console.log("DOBRZE");
      const onlyWords: string[] = [];
      wordsArray.map((ele) => {
        onlyWords.push(ele.word);
      });
      const unicArray = [...new Set(onlyWords)];
      console.log(unicArray);

      const data = await axios.get(`${settings.address}/checkWords`, {
        params: { words: unicArray },
      });
      console.log(data);
      //data.data.success
      if (data.data.success) {
        console.log("dziala");
        let movePoints = 0;
        wordsArray.map((word) => {
          let basePoints = 0;
          let arrWithChar = word.word.split("");
          arrWithChar.map((char) => {
            pointsForData.map((points) => {
              if (points.letters.includes(char)) {
                basePoints += points.points;
              }
            });
          });
          movePoints+=basePoints
          word.bonusPlaces.map((bonusPlace) => {
            if (bonusPlace.bonus === "3xWord") {
              movePoints+=basePoints*2
            } else if (bonusPlace.bonus === "2xWord") {
              movePoints+=basePoints
            } else if (bonusPlace.bonus === "3xLetter") {
              pointsForData.map(points=>{
                if(points.letters.includes(bonusPlace.letter)){
                  movePoints+=points.points*2
                }
              })
            } else if (bonusPlace.bonus === "2xLetter") {
              pointsForData.map(points=>{
                if(points.letters.includes(bonusPlace.letter)){
                  movePoints+=points.points
                }
              })
            }
          });
        });

        setAddPoints(movePoints);

        setPlayLetters(true);
      } else {
        console.log("nie dziala");
      }
    }

    console.log(wordsArray);
  };

  return { mainStartGame };
};

// interface WordToArray {
//   word: string;
//   start: {
//     i: number;
//     j: number;
//   };
//   end: {
//     i: number;
//     j: number;
//   };
// }

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
  bonusPlaces: BonusPlacesInWord[];
}

interface BonusPlacesInWord {
  letter: string;
  bonus: string;
}

export default MainGameLogic;
