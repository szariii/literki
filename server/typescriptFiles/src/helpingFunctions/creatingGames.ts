import { tableWithPlayers, tableWithPlayingRooms } from "../data/data";
import { v4 as uuid } from "uuid";
import { LookingForGameUser } from "../interfaces";

import { BonusPlace } from "../interfaces";

const creatingGames = () => {
  while (tableWithPlayers.length > 1) {
    const id = uuid();
    //console.log(tableWithPlayers.unshift())
    const player1 = tableWithPlayers.shift() as LookingForGameUser;
    const player2 = tableWithPlayers.shift() as LookingForGameUser;

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
      player1:{ id: player1.id,nick:player1.nick },
      player2:{ id: player2.id,nick:player2.nick },
      bonusPlaces:bonusPlaces
    });
    console.log(tableWithPlayingRooms)
  }

  
};

export default creatingGames;
