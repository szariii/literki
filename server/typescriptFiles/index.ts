import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import routes from "./src/routes/routes";
import cors from "cors";
import { Server } from "socket.io";

import creatingGames from "./src/helpingFunctions/creatingGames";
import mainSocketIo from "./src/socketIo/mainSocketIo";

const app = express();
const port = 3000;
const socketIo = new Server(3001,{
  cors:{
    origin:"*"
  }
})

setInterval(creatingGames,1000)

 

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

socketIo.on("connection",(socket)=>mainSocketIo(socket,socketIo))

app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
