"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameWinner_1 = __importDefault(require("../controllers/gameWinner"));
const mainSocketIo = (socket, socketIo) => {
    const query = socket.handshake.query;
    const roomName = query.roomName;
    if (roomName) {
        socket.join(roomName);
        socket.on("disconnect", (reason) => {
            console.log("disconnect");
            console.log(reason);
        });
        socket.on("send", (data) => {
            console.log(data);
            let changedMsg = data;
            //const room = tableWithPlayingRooms.filter(ele=>ele.id=msg.room)[0]
            //console.log(room)
            if (changedMsg.data.movingSide === changedMsg.data.players[0]) {
                changedMsg.data.movingSide = changedMsg.data.players[1];
            }
            else {
                changedMsg.data.movingSide = changedMsg.data.players[0];
            }
            if (data.msg === "Finish game") {
                let winner = "player1";
                if (data.data.player1 < data.data.player2) {
                    winner = "player2";
                }
                else if (data.data.player1 === data.data.player2) {
                    winner = "draw";
                }
                changedMsg.msg = winner;
                socketIo.to(roomName).emit("send", changedMsg);
                (0, gameWinner_1.default)(data);
            }
            else {
                socketIo.to(roomName).emit("send", changedMsg);
            }
            //if(changedMsg.movingPlayer===)
        });
    }
};
exports.default = mainSocketIo;
