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
const login_1 = __importDefault(require("../controllers/login"));
const findGame_1 = __importDefault(require("../controllers/findGame"));
const cancelFindGame_1 = __importDefault(require("../controllers/cancelFindGame"));
const checkForGame_1 = __importDefault(require("../controllers/checkForGame"));
const getUserInfo_1 = __importDefault(require("../controllers/getUserInfo"));
const checkWords_1 = __importDefault(require("../controllers/checkWords"));
const leaderboard_1 = __importDefault(require("../controllers/leaderboard"));
const changePassword_1 = __importDefault(require("../controllers/changePassword"));
const routes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.url)
    try {
        switch (req.method) {
            case "GET":
                //console.log(req.path)
                if (req.path === "/checkForGame") {
                    yield (0, checkForGame_1.default)(req, res);
                }
                else if (req.path === "/checkWords") {
                    console.log("tralala");
                    yield (0, checkWords_1.default)(req, res);
                }
                else if (req.path === "/leaderboard") {
                    yield (0, leaderboard_1.default)(req, res);
                }
                break;
            case "POST":
                console.log(req.url);
                if (req.url === "/createAccount") {
                    yield (0, createAccount_1.default)(req, res);
                }
                else if (req.url === "/login") {
                    yield (0, login_1.default)(req, res);
                }
                else if (req.url === "/findGame") {
                    yield (0, findGame_1.default)(req, res);
                }
                else if (req.url === "/cancelFindGame") {
                    yield (0, cancelFindGame_1.default)(req, res);
                }
                else if (req.url === "/getUserData") {
                    yield (0, getUserInfo_1.default)(req, res);
                }
                break;
            case "PUT":
                console.log("PUT");
                if (req.url === "/changePassword") {
                    yield (0, changePassword_1.default)(req, res);
                }
                break;
        }
    }
    catch (err) {
        console.log(err);
        res.send("error");
    }
    next();
});
exports.default = routes;
