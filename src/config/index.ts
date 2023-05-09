import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

export const config = {
  port,
};
