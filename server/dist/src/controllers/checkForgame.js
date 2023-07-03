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
const checkForGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    if (data_1.tableWithPlayers.includes(id)) {
        res.send({ findedGame: false });
    }
    else {
        console.log("no czesc");
        const sendTable = [];
        data_1.tableWithPlayingRooms.map(room => {
            room.players.map(player => {
                if (player.id == id) {
                    //res.send({findedGame:true, room:room})
                    sendTable.push(room);
                }
            });
        });
        if (sendTable.length > 0) {
            res.send({ findedGame: true, rooms: sendTable });
        }
    }
});
exports.default = checkForGame;
