import { LoginUserData } from "../interfaces"
import query from "./db.service";
import { WithId } from "mongodb";

const loginService=async(data:LoginUserData)=>{
    const findNick={
        nick:data.nick
    }
    const databaseUser = await query("users","find",findNick) as WithId<Document>|null
    return databaseUser
}

export default loginService