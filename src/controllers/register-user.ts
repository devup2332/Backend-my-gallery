import { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import { GenerateToken } from "./generateToken.controller";
import bcrypt from "bcrypt";
import { environments } from "../environments/environments";

export const RegisterUser = async (req: Request, res: Response) => {
  const { fullName, password, email, phone } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordCrypt = await bcrypt.hash(password, salt);

  const newUser = await UserModel.create({
    fullName,
    password: passwordCrypt,
    email,
    phone,
    avatar: environments.default_photo,
    provider: "form",
  });

  const token = GenerateToken(newUser);

  return res.status(200).json({
    user: newUser,
    status: "User Created Successfully",
    token,
  });
};
