"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.router = new express_1.Router();
exports.router.post("/register", controllers_1.authController.register);
exports.router.post("/login", controllers_1.authController.login);
//# sourceMappingURL=authRoute.js.map