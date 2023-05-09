import express from "express";
import { config } from "./config";
import { connectDb } from "./database";
import { booksRouter } from "./routes";
import cors from "cors";

const app = express();

app.set("port", config.port);
app.use(cors());
app.use("/book", booksRouter);

connectDb().then(() =>
  app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
  })
);
