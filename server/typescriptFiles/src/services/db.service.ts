import client from "../config/db.config";

const query = async (
  collection: string,
  operation: string,
  listing: Object
) => {


  try {
    if (operation === "insert") {
      console.log("start");
      const test = await client.db("scrabble").collection(collection).insertOne(listing);
      console.log(test);
      return test
    }else if(operation==="find"){
      const test =await client.db("scrabble").collection(collection).findOne(listing)
      console.log(test)
      return test
    }

  } catch {
    return false;
  } finally {
    //await client.close();
  }
};

export default query;
