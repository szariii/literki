import client from "../config/db.config";

const query = async () => {
  try {
    await client.connect();
    //await client.db("scrabble").command({ping:1})
    console.log("test");
  } finally {
    await client.close();
  }
};

export default query;
