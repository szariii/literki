import client from "../config/db.config";

const query = async (
  collection: string,
  operation: string,
  listing: Object,
  updateField?:Object,
) => {


  try {
    if (operation === "insert") {
      const test = await client.db("scrabble").collection(collection).insertOne(listing);
      return test
    }else if(operation==="find"){
      const test =await client.db("scrabble").collection(collection).findOne(listing)
      return test
    }else if(operation==="update" && updateField){
      const test =await client.db("scrabble").collection(collection).updateOne(updateField,listing)
      return test
    }

  } catch {
    return false;
  } finally {
    //await client.close();
  }
};

export default query;
