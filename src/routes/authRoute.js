import { Router } from "express";
import { authController } from "../controllers";

export const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
