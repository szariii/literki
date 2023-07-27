"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_service_1 = __importDefault(require("./db.service"));
const gameWinnerService = (winner, loser) => {
    (0, db_service_1.default)("users", "update", { $inc: { points: 10 } }, { _id: new mongodb_1.ObjectId(winner) });
    (0, db_service_1.default)("users", "update", { $inc: { points: -10 } }, { _id: new mongodb_1.ObjectId(loser) });
    console.log("update value");
};
exports.default = gameWinnerService;
