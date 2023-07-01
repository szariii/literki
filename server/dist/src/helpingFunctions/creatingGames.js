"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const uuid_1 = require("uuid");
const creatingGames = () => {
    while (data_1.tableWithPlayers.length > 1) {
        const id = (0, uuid_1.v4)();
        //console.log(tableWithPlayers.unshift())
        const player1 = data_1.tableWithPlayers.shift();
        const player2 = data_1.tableWithPlayers.shift();
        data_1.tableWithPlayingRooms.push({
            status: "connecting players",
            id: id,
            players: [
                { id: player1, points: 0, lettersInHand: [] },
                { id: player2, points: 0, lettersInHand: [] },
            ],
        });
    }
};
exports.default = creatingGames;
