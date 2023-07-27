"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const gameWinner = (data) => {
    const roomInfo = data_1.tableWithPlayingRooms.filter(ele => ele.id === data.room)[0];
};
exports.default = gameWinner;
