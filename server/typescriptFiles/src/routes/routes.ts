import { Request, Response, NextFunction } from "express";

//controllers
import createAccountPost from "../controllers/createAccount";
import login from "../controllers/login";

const routes = async(req: Request, res: Response, next: NextFunction) => {
  console.log(req.url)
  switch(req.method){
    case "GET":
      break;
    case "POST":
      if(req.url==="/createAccount"){
        await createAccountPost(req,res)
      }else if (req.url==="/login"){
        await login(req,res)
      }
      break
  }
  next();
};
export default routes;
