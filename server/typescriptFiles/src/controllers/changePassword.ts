import { Request, Response } from "express"
import changePasswordService from "../services/changePassword.service"
import bycrypt from "bcryptjs";
import { UpdateResult } from "mongodb";


const changePassword = async(req:Request, res:Response)=>{
    console.log(req.body)
    const hashedPassword = bycrypt.hashSync(req.body.newPassword,10)
    const success=await changePasswordService(req.body.id, hashedPassword) as UpdateResult<Document>
    console.log(success)
    res.send(success.acknowledged)
}

export default changePassword