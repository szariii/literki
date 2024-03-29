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
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const data_2 = require("../data/data");
const findGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    data_1.tableWithPlayers.push({ id: req.body.id, nick: req.body.nick });
    console.log(data_1.tableWithPlayers);
    res.send({ success: true });
    console.log(data_2.tableWithPlayingRooms);
});
exports.default = findGame;
