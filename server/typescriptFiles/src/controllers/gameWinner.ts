import { GameSendInformation } from "../interfaces"
import { tableWithPlayingRooms } from "../data/data"

const gameWinner = (data:{room:string, data:GameSendInformation, msg:string})=>{
    const roomInfo = tableWithPlayingRooms.filter(ele=>ele.id===data.room)[0]
    
}

export default gameWinner