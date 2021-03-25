import { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import { GenerateToken } from "./generateToken.controller";
import bcrypt from "bcrypt";

export const RegisterUser = async (req: Request, res: Response) => {
  const { username, password, email, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordCrypt = await bcrypt.hash(password, salt);
  const newUser = await UserModel.create({
    username,
    password: passwordCrypt,
    email,
    phone,
  });
  const token = GenerateToken(newUser);
  return res.status(200).json({
    user: newUser,
    status: "User Created Successfully",
    token,
  });
};
