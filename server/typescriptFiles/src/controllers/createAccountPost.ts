import { Request, Response } from "express";

const createAccountPost = (req: Request, res: Response) => {
  console.log(req.body);
  console.log("createAccount");
  res.send({ name: "name" });
};

export default createAccountPost;
