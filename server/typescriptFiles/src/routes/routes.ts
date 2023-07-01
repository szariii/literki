import { Request, Response, NextFunction } from "express";

//controllers
import createAccountPost from "../controllers/createAccount";
import login from "../controllers/login";
import findGame from "../controllers/findGame";
import cancelFindGame from "../controllers/cancelFindGame";
import checkForGame from "../controllers/checkForGame";

const routes = async(req: Request, res: Response, next: NextFunction) => {
  //console.log(req.url)
  switch(req.method){
    case "GET":
      //console.log(req.path)

      if(req.path==="/checkForGame"){
        await checkForGame(req,res)
      }
      break;
    case "POST":
      console.log(req.url)
      if(req.url==="/createAccount"){
        await createAccountPost(req,res)
      }else if (req.url==="/login"){
        await login(req,res)
      }else if(req.url==="/findGame"){
        await findGame(req,res)
      }else if(req.url==="/cancelFindGame"){
        await cancelFindGame(req,res)
      }
      break
  }
  next();
};
export default routes;
