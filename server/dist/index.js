"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const creatingGames_1 = __importDefault(require("./src/helpingFunctions/creatingGames"));
const mainSocketIo_1 = __importDefault(require("./src/socketIo/mainSocketIo"));
const app = (0, express_1.default)();
const port = 3000;
const socketIo = new socket_io_1.Server(3001, {
    cors: {
        origin: "*"
    }
});
setInterval(creatingGames_1.default, 1000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
socketIo.on("connection", (socket) => (0, mainSocketIo_1.default)(socket, socketIo));
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
