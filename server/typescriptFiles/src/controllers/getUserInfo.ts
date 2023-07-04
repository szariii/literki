import { Request, Response } from "express"
import getUserDataService from "../services/getUserData.service"

const getUserData = async(req:Request,res:Response)=>{
    const databaseData = await getUserDataService(req.body.id)
    console.log(databaseData)
    if(databaseData){
        res.send({success:true,data:databaseData})
    }else{
        res.send({success:false,data:""})
    }
}

export default getUserData