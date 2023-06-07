"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//controllers
const createAccountPost_1 = __importDefault(require("../controllers/createAccountPost"));
const routes = (req, res, next) => {
    console.log(req.url);
    switch (req.method) {
        case "GET":
            break;
        case "POST":
            if (req.url === "/createAccount") {
                (0, createAccountPost_1.default)(req, res);
            }
            break;
    }
    next();
};
exports.default = routes;
