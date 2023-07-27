import { GameSendInformation } from "../interfaces"
import { tableWithPlayingRooms } from "../data/data"
import gameWinnerService from "../services/gameWinner.service"

const gameWinner = (data:{room:string, data:GameSendInformation, msg:string})=>{
    const roomInfo = tableWithPlayingRooms.filter(ele=>ele.id===data.room)[0]
    if(data.msg==="player1"){
        console.log(data.msg)
        let winner=roomInfo.player1.id
        let loser = roomInfo.player2.id
        gameWinnerService(winner,loser)
    }else if(data.msg==="player2"){
        let winner=roomInfo.player2.id
        let loser = roomInfo.player1.id
        gameWinnerService(winner,loser)
    }
    const index = tableWithPlayingRooms.indexOf(roomInfo)
    console.log(index)
    tableWithPlayingRooms.splice(index,1)
    
    console.log("roomInfo", roomInfo)
}

export default gameWinner