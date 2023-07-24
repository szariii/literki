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
const arrayWithWords_1 = __importDefault(require("../data/arrayWithWords"));
const checkWords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const words = req.query.words;
    console.log(req.query);
    console.log(words);
    let flag = true;
    words.map(ele => {
        if (!arrayWithWords_1.default.includes(ele)) {
            flag = false;
        }
    });
    res.send({ success: flag });
});
exports.default = checkWords;
