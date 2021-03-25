import { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import bcrypt from "bcrypt";
import { GenerateToken } from "./generateToken.controller";

export const LoginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(200).json({
      message: "Username dosent exist",
      status: false,
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(200).json({
      message: "Password is incorrect",
      status: false,
    });
  }
  const token = GenerateToken(user);

  return res.status(200).json({
    message: "User Logged",
    token,
    status: true,
  });
};
