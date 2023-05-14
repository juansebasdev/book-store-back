"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv = require("dotenv");
dotenv.config();
var port = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI;
var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
var AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
var AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN;
exports.config = {
    port: port,
    MONGODB_URI: MONGODB_URI,
    AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION: AWS_DEFAULT_REGION,
    AWS_SESSION_TOKEN: AWS_SESSION_TOKEN,
};
