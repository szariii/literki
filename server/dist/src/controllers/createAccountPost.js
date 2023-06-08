"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_service_1 = __importDefault(require("../services/db.service"));
const createAccountPost = (req, res) => {
    console.log("createAccount");
    (0, db_service_1.default)();
    res.send({ name: "name" });
};
exports.default = createAccountPost;
