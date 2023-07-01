import { tableWithPlayers, tableWithPlayingRooms } from "../data/data";
import { v4 as uuid } from "uuid";

const creatingGames = () => {
  while (tableWithPlayers.length > 1) {
    const id = uuid();
    //console.log(tableWithPlayers.unshift())
    const player1 = tableWithPlayers.shift() as string;
    const player2 = tableWithPlayers.shift() as string;
    tableWithPlayingRooms.push({
      status: "connecting players",
      id: id,
      players: [
        { id: player1, points: 0, lettersInHand: [] },
        { id: player2, points: 0, lettersInHand: [] },
      ],
    });
  }
};

export default creatingGames;
