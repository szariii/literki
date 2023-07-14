
import { Request, Response, response } from "express"
import { tableWithPlayers,tableWithPlayingRooms } from "../data/data"
import { RoomInformation } from "../interfaces"

const checkForGame=async(req:Request,res:Response)=>{
    const id = req.query.id as string
    let flag = false
    tableWithPlayers.map(ele=>{
        if(ele.id===id){
            flag=true
        }
    })
    
    if(flag){
        res.send({findedGame:false})
    }else{
        console.log("no czesc")
        const sendTable:Array<RoomInformation>=[]
        tableWithPlayingRooms.map(room=>{
            if(room.player1.id===id ||room.player2.id===id){
                sendTable.push(room)
            }
            // room.players.map(player=>{
            //     if(player.id==id){
            //         //res.send({findedGame:true, room:room})
            //         sendTable.push(room)
            //     }
            // })
        })

        if(sendTable.length>0){
            res.send({findedGame:true, rooms:sendTable})
        }
    }
}

export default checkForGame