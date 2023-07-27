import { ObjectId } from "mongodb";
import query from "./db.service";

const gameWinnerService = (winner:string,loser:string)=>{
    query("users", "update",{$inc:{points:10}}, {_id:new ObjectId(winner)})
    query("users", "update",{$inc:{points:-10}}, {_id:new ObjectId(loser)})
    console.log("update value")
}

export default gameWinnerService