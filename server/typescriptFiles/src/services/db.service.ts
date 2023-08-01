import { Filter } from "mongodb";
import client from "../config/db.config";
import { UserData } from "../interfaces";

const query = async (
  collection: string,
  operation: string,
  listing: Object,
  firstAdditionalValue?:any,
  secondAdditionaValue?:any
) => {


  try {
    if (operation === "insert") {
      const test = await client.db("scrabble").collection(collection).insertOne(listing);
      return test
    }else if(operation==="find"){
      const test =await client.db("scrabble").collection(collection).findOne(listing)
      return test
    }else if(operation==="update"){
      const test =await client.db("scrabble").collection(collection).updateOne(firstAdditionalValue,listing)
      return test
    }else if(operation==="sort"){
      const test =await client.db("scrabble").collection(collection).find({},{projection:{password:0,email:0}}).sort(firstAdditionalValue).limit(secondAdditionaValue).toArray()
      return test
    }

  } catch {
    return false;
  } finally {
    //await client.close();
  }
};

export default query;
