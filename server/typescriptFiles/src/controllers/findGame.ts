import { Request, Response } from "express";
import { tableWithPlayers } from "../data/data";

const findGame = async (req: Request, res: Response) => {
  console.log(req.body);
  tableWithPlayers.push(req.body.id);
  console.log(tableWithPlayers);
  res.send({ success: true });
};

export default findGame;