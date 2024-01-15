import { Role, UserWithRequest } from "../types";
import { NextFunction, Request, Response } from "express";
import { checkRole } from "../helpers";

export const permit = (permission?: Role) => {
  return (req: UserWithRequest, res: Response, next: NextFunction) => {
    const { role } = req.user;

    if (role && role === "ADMIN") {
      next();
    } else res.status(403).json({ status: 403, message: "Forbidden" });
  };
};
