"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const creatingArrayWithWords = () => {
    const file = fs_1.default.readFileSync("./typescriptFiles/src/data/slowa.txt", { encoding: "utf-8" });
    const table = file.split("\r\n").map(ele => ele.toUpperCase());
    return table;
};
const arrayWithWords = creatingArrayWithWords();
exports.default = arrayWithWords;
