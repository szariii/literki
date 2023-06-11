import { Request, Response } from "express";
import createUserService from "../services/createAccount.service";
import bycrypt from "bcryptjs";
import { CreateUserData } from "../interfaces";

const createAccountPost = async (req: Request, res: Response) => {
  const passwd = bycrypt.hashSync(req.body.email);
  const newListing:CreateUserData = {
    nick: req.body.nick,
    email: req.body.email,
    password: passwd,
    points: 1000,
  };
  const succeess = await createUserService(newListing);
  res.send(succeess);
  console.log("wysłano");
};


export default createAccountPost;
