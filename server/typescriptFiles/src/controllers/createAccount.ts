import { Request, Response } from "express";
import createUserService from "../services/createAccount.service";

const createAccountPost = async(req: Request, res: Response) => {
  console.log("createAccount");
  await createUserService()
  res.send({ name: "name" });
  
};

export default createAccountPost;
