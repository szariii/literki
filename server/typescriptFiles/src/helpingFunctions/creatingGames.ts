import { tableWithPlayers, tableWithPlayingRooms } from "../data/data";
import { v4 as uuid } from "uuid";

import { BonusPlace } from "../interfaces";

const creatingGames = () => {
  while (tableWithPlayers.length > 1) {
    const id = uuid();
    //console.log(tableWithPlayers.unshift())
    const player1 = tableWithPlayers.shift() as string;
    const player2 = tableWithPlayers.shift() as string;

    const bonusPlacesToChosse = ["3xWord","3xWord","3xWord","3xWord","2xWord","2xWord","2xWord","2xWord","3xLetter","3xLetter","3xLetter","3xLetter","2xLetter","2xLetter","2xLetter","2xLetter"]
    const bonusPlaces:Array<BonusPlace>=[]

    const getRandomInt=(max:number)=>{
      return Math.floor(Math.random()*max)
    }

    bonusPlacesToChosse.map(placeName=>{
      let flag = false
      while(!flag){
        const i = getRandomInt(15)
        const j = getRandomInt(15)
        if(i!==7 && j!==7){
          flag = true
          bonusPlaces.map(place=>{
            if(place.i===i && place.j===j){
              flag=false
            }
          })
        }

        if(flag){
          bonusPlaces.push({i:i,j:j,type:placeName})
        }
      }

      
    })



    tableWithPlayingRooms.push({
      status: "connecting players",
      id: id,
      players: [
        { id: player1, points: 0, lettersInHand: [] },
        { id: player2, points: 0, lettersInHand: [] },
      ],
      bonusPlaces:bonusPlaces
    });
    console.log(tableWithPlayingRooms)
  }

  
};

export default creatingGames;
