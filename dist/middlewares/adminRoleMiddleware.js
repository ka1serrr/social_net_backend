"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permit = void 0;
const helpers_1 = require("../helpers");
const permit = async (permission) => {
    return (req, res, next) => {
        const { role } = req.user;
        const isChecked = helpers_1.checkRole.isAdmin(role);
        if (isChecked)
            next();
        else
            return res.status(403).json({ status: 403, message: "Forbidden" });
    };
};
exports.permit = permit;
//# sourceMappingURL=adminRoleMiddleware.js.map