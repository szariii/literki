
import { Request, Response, response } from "express"
import { tableWithPlayers,tableWithPlayingRooms } from "../data/data"
import { RoomInformation } from "../interfaces"

const checkForGame=async(req:Request,res:Response)=>{
    const id = req.query.id as string
    if(tableWithPlayers.includes(id)){
        res.send({findedGame:false})
    }else{
        console.log("no czesc")
        const sendTable:Array<RoomInformation>=[]
        tableWithPlayingRooms.map(room=>{
            room.players.map(player=>{
                if(player.id==id){
                    //res.send({findedGame:true, room:room})
                    sendTable.push(room)
                }
            })
        })

        if(sendTable.length>0){
            res.send({findedGame:true, rooms:sendTable})
        }
    }
}

export default checkForGame