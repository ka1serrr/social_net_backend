import jwt, { Secret } from "jsonwebtoken";

const secret = process.env.JWT_SECRET as Secret;
export const generateToken = (username: string) => {
  return jwt.sign({ username: username }, secret);
};
