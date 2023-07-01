import { Request, Response } from "express";
import { LoginUserData } from "../interfaces";
import loginService from "../services/login.service";
import bycrypt from "bcryptjs";
import { UserData } from "../interfaces";

const login=async(req:Request,res:Response)=>{
    const checkData:LoginUserData = {
        nick:req.body.nick,
        password:req.body.password
    }
    const returnData = await loginService(checkData) as UserData|null
    if (returnData){
        const success = bycrypt.compareSync(req.body.password,returnData.password)
        console.log(success)
        if(success){
            res.send({success:true,data:returnData})
            return
        }
        
    }

    res.send({success:false,data:"Błędne dane"})
    
}

export default login