"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const gameWinner_service_1 = __importDefault(require("../services/gameWinner.service"));
const gameWinner = (data) => {
    const roomInfo = data_1.tableWithPlayingRooms.filter(ele => ele.id === data.room)[0];
    if (data.msg === "player1") {
        console.log(data.msg);
        let winner = roomInfo.player1.id;
        let loser = roomInfo.player2.id;
        (0, gameWinner_service_1.default)(winner, loser);
    }
    else if (data.msg === "player2") {
        let winner = roomInfo.player2.id;
        let loser = roomInfo.player1.id;
        (0, gameWinner_service_1.default)(winner, loser);
    }
    const index = data_1.tableWithPlayingRooms.indexOf(roomInfo);
    console.log(index);
    data_1.tableWithPlayingRooms.splice(index, 1);
    console.log("roomInfo", roomInfo);
};
exports.default = gameWinner;
