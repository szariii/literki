"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../.env");
const mongodb_1 = require("mongodb");
require("dotenv").config();
const client = new mongodb_1.MongoClient(process.env.URL, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
exports.default = client;
