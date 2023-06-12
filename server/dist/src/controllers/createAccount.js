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
const createAccount_service_1 = __importDefault(require("../services/createAccount.service"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createAccountPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const passwd = bcryptjs_1.default.hashSync(req.body.email);
    const newListing = {
        nick: req.body.nick,
        email: req.body.email,
        password: passwd,
        points: 1000,
    };
    const succeess = yield (0, createAccount_service_1.default)(newListing);
    res.send(succeess);
    console.log("wysłano");
});
exports.default = createAccountPost;