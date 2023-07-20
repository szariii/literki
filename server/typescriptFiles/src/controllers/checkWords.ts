import { Request, Response } from "express"
import arrayWithWords from "../data/arrayWithWords"

const checkWords=async(req:Request,res:Response)=>{
    const words = req.query.words
    console.log(words)
    console.log(arrayWithWords)
    res.send("no czesc")
}

export default checkWords