"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccountPost = (req, res) => {
    console.log(req.body);
    console.log("createAccount");
    res.send({ name: "name" });
};
exports.default = createAccountPost;
