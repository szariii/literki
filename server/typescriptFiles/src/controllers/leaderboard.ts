import { Request,Response } from "express"
import leaderboardService from "../services/leaderbaord.service"
import { WithId } from "mongodb"

const leaderboard=async(req:Request,res:Response)=>{
    const data =await leaderboardService() as WithId<Document>[]
    console.log(data)
    res.send(data)
}

export default leaderboard