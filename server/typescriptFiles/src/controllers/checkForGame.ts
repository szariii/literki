
import { Request, Response, response } from "express"
import { tableWithPlayers,tableWithPlayingRooms } from "../data/data"

const checkForGame=async(req:Request,res:Response)=>{
    const id = req.query.id as string
    if(tableWithPlayers.includes(id)){
        res.send({findedGame:false})
    }else{
        tableWithPlayingRooms.map(room=>{
            room.players.map(player=>{
                if(player.id==id){
                    res.send({findedGame:true, room:room})
                }
            })
        })
    }
}

export default checkForGame