"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//controllers
const createAccount_1 = __importDefault(require("../controllers/createAccount"));
const routes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.url);
    switch (req.method) {
        case "GET":
            break;
        case "POST":
            if (req.url === "/createAccount") {
                yield (0, createAccount_1.default)(req, res);
            }
            break;
    }
    next();
});
exports.default = routes;
