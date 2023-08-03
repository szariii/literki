import { ObjectId } from "mongodb"
import query from "./db.service"


const changePasswordService=async(id:string,newPassword:string)=>{
    console.log(id)
    const success = await query("users","update",{$set:{password:newPassword}}, {_id:new ObjectId(id)})
    return success
}

export default changePasswordService