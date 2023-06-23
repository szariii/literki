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
const db_config_1 = __importDefault(require("../config/db.config"));
const query = (collection, operation, listing) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (operation === "insert") {
            const test = yield db_config_1.default.db("scrabble").collection(collection).insertOne(listing);
            return test;
        }
        else if (operation === "find") {
            const test = yield db_config_1.default.db("scrabble").collection(collection).findOne(listing);
            return test;
        }
    }
    catch (_a) {
        return false;
    }
    finally {
        //await client.close();
    }
});
exports.default = query;
