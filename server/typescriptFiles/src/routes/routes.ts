import { Request, Response, NextFunction } from "express";

//controllers
import createAccountPost from "../controllers/createAccount";

const routes = async(req: Request, res: Response, next: NextFunction) => {
  console.log(req.url)
  switch(req.method){
    case "GET":
      break;
    case "POST":
      if(req.url==="/createAccount"){
        await createAccountPost(req,res)
      }
      break
  }
  next();
};
export default routes;
