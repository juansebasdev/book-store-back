import * as mongoose from "mongoose";
import { config } from "../config";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(config.MONGODB_URI);
    console.info("Database connected");
  } catch (error) {
    return console.log({
      stringConnection: config.MONGODB_URI,
      error,
    });
  }
};

export { connectDb };
