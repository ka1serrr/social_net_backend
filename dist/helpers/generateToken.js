"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const generateToken = (username) => {
    return jsonwebtoken_1.default.sign({ username: username }, secret);
};
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map