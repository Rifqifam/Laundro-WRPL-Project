import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const port = process.env.APP_PORT;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.listen(port, () => {
  console.log("now listening on port " + port);
});
