import express from "express";
import { config } from "./config";
import { connectDb } from "./database";
import { booksRouter } from "./routes";

const app = express();

app.set("port", config.port);

app.use("/", booksRouter);

connectDb().then(() =>
  app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
  })
);
