import { Request, Response } from "express";
import { tableWithPlayers } from "../data/data";
import { tableWithPlayingRooms } from "../data/data";

const findGame = async (req: Request, res: Response) => {
  console.log(req.body);
  tableWithPlayers.push({id:req.body.id,nick:req.body.nick});
  console.log(tableWithPlayers);
  res.send({ success: true });
  console.log(tableWithPlayingRooms)
};

export default findGame;
