import query from "./db.service";
import { CreateUserData } from "../interfaces";
import { InsertOneResult } from "mongodb";

const createUserService = async (newListing: CreateUserData) => {
  const checkEmail = await query("users", "find", { nick: newListing.nick });
  if (checkEmail === null) {
    const operation = (await query(
      "users",
      "insert",
      newListing
    )) as InsertOneResult<Document>;
      if(operation.acknowledged){
        return({
          success:true,
          message:"Account created"
          
        })
      }else{
        return({
          success:false,
          message:"Error"
        })
      }
  } else {
    return {
      success: false,
      message: "Nick jest zajęty",
    };
  }
};
export default createUserService;
