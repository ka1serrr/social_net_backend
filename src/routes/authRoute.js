import { Router } from "express";
import { authController } from "../controllers";
import { authCheckMiddleware, permit } from "../middlewares";

export const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/users", authCheckMiddleware, permit("ADMIN"), authController.all);
