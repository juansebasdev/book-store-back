import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI as string;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN;

export const config = {
  port,
  MONGODB_URI,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_DEFAULT_REGION,
  AWS_SESSION_TOKEN,
};
