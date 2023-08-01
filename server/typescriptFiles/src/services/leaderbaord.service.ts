import { WithId } from "mongodb";
import query from "./db.service";

const leaderboardService=async()=>{
  const data = await query("users","sort",{},{points:-1},10) as WithId<Document>[]
  return data
}

export default leaderboardService