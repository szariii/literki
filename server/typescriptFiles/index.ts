import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import routes from "./src/routes/routes";
import cors from "cors";

const app = express();
const port = 3000;

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

app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
