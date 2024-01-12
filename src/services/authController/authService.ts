import { Register } from "./authControllerTypes";
import bcrypt from "bcryptjs";
import prisma from "../../models/prisma";
import { generateToken } from "../../helpers";

class AuthService {
  async register(data: Register) {
    data.password = bcrypt.hashSync(data.password, 8);
    const user = await prisma.user.create({
      data,
    });
    data.jwt = await generateToken(user);
    return data;
  }
}

const authController = new AuthService();

export const { register } = authController;
