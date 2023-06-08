"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//controllers
const createAccount_1 = __importDefault(require("../controllers/createAccount"));
const routes = (req, res, next) => {
    console.log(req.url);
    switch (req.method) {
        case "GET":
            break;
        case "POST":
            if (req.url === "/createAccount") {
                (0, createAccount_1.default)(req, res);
            }
            break;
    }
    next();
};
exports.default = routes;
