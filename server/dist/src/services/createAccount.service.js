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
const db_service_1 = __importDefault(require("./db.service"));
const createUserService = (newListing) => __awaiter(void 0, void 0, void 0, function* () {
    const checkEmail = yield (0, db_service_1.default)("users", "find", { nick: newListing.nick });
    if (checkEmail === null) {
        const operation = (yield (0, db_service_1.default)("users", "insert", newListing));
        if (operation.acknowledged) {
            return ({
                success: true,
                message: "Account created"
            });
        }
        else {
            return ({
                success: false,
                message: "Error"
            });
        }
    }
    else {
        return {
            success: false,
            message: "Nick jest zajęty",
        };
    }
});
exports.default = createUserService;
