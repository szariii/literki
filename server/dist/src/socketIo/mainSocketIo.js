"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainSocketIo = (socket, socketIo) => {
    const query = socket.handshake.query;
    const roomName = query.roomName;
    if (roomName) {
        socket.join(roomName);
        socket.on("send", (msg) => {
            console.log(msg);
            socketIo.to(roomName).emit("send", msg);
        });
    }
};
exports.default = mainSocketIo;
