import { Request, Response } from "express"
import arrayWithWords from "../data/arrayWithWords"

const checkWords=async(req:Request,res:Response)=>{
    const words:string[]= req.query.words as string []
    console.log(req.query)
    console.log(words)
    let flag=true
    words.map(ele=>{
        if(!arrayWithWords.includes(ele)){
            flag=false
        }
    })

    res.send({success:flag})

}

export default checkWords