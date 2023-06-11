import "../../../.env";
import { ServerApiVersion, MongoClient } from "mongodb";

require("dotenv").config();

const client = new MongoClient(process.env.URL as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
