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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const changePassword_service_1 = __importDefault(require("../services/changePassword.service"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const hashedPassword = bcryptjs_1.default.hashSync(req.body.newPassword, 10);
    const success = yield (0, changePassword_service_1.default)(req.body.id, hashedPassword);
    console.log(success);
    res.send(success.acknowledged);
});
exports.default = changePassword;
