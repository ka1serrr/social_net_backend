import { NextFunction, Request, Response } from "express";
import { register } from "../services";
import createError from "http-errors";

class AuthController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await register(req.body);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        data: user,
      });
    } catch (e) {
      console.log(e);
      res.status(401).json({
        message: "Internal server error",
        status: 401,
      });
    }
  };
}

export const authController = new AuthController();
