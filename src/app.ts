import express from "express";
import { config } from "./config";
import { connectDb } from "./database";

const app = express();

app.set("port", config.port);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

connectDb().then(() =>
  app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
  })
);
