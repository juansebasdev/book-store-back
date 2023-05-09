import express from "express";
import { config } from "./config";

const app = express();

app.set("port", config.port);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
