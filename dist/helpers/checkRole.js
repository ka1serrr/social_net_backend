"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
class checkRole {
    static isAdmin(role) {
        if ("ADMIN" === role)
            return true;
        else {
            throw new Error("Forbidden");
        }
    }
}
exports.checkRole = checkRole;
//# sourceMappingURL=checkRole.js.map