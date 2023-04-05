import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.listen(port, () => {
  console.log("now listening on port " + port);
});
