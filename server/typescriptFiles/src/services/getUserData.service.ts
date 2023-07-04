import { ObjectId } from "mongodb"
import query from "./db.service"

const getUserDataService = async(id:string) =>{
    const databaseData = await query("users","find",{_id:new ObjectId(id)})
    return databaseData

}

export default getUserDataService