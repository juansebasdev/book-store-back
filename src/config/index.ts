import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI as string;

export const config = {
  port,
  MONGODB_URI,
};
