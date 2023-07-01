import { Request, Response } from "express";
import { tableWithPlayers } from "../data/data";

const cancelFindGame = async (req: Request, res: Response) => {
  const place = tableWithPlayers.indexOf(req.body.id);
  tableWithPlayers.splice(place, 1);
  res.send({ success: true });
};

export default cancelFindGame;
