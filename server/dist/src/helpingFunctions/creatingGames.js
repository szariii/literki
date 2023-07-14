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
        const bonusPlacesToChosse = ["3xWord", "3xWord", "3xWord", "3xWord", "2xWord", "2xWord", "2xWord", "2xWord", "3xLetter", "3xLetter", "3xLetter", "3xLetter", "2xLetter", "2xLetter", "2xLetter", "2xLetter"];
        const bonusPlaces = [];
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
        bonusPlacesToChosse.map(placeName => {
            let flag = false;
            while (!flag) {
                const i = getRandomInt(15);
                const j = getRandomInt(15);
                if (i !== 7 && j !== 7) {
                    flag = true;
                    bonusPlaces.map(place => {
                        if (place.i === i && place.j === j) {
                            flag = false;
                        }
                    });
                }
                if (flag) {
                    bonusPlaces.push({ i: i, j: j, type: placeName });
                }
            }
        });
        data_1.tableWithPlayingRooms.push({
            status: "connecting players",
            id: id,
            player1: { id: player1.id, nick: player1.nick },
            player2: { id: player2.id, nick: player2.nick },
            bonusPlaces: bonusPlaces
        });
        console.log(data_1.tableWithPlayingRooms);
    }
};
exports.default = creatingGames;
