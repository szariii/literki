import "../../../.env"
import { ServerApiVersion,MongoClient  } from "mongodb"
require('dotenv').config()

const client = new MongoClient(process.env.URL as string)

export default client