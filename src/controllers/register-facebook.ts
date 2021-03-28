import { Request, Response } from "express";
import { pusher } from "../app";
import { environments } from "../environments/environments";
import { UserModel } from "../models/User.model";
import { GenerateToken } from "./generateToken.controller";

export const RegisterFacebook = async (req: Request, res: Response) => {
  const { email, name } = (req.user as any)._json;

  const user = await UserModel.findOne({
    where: {
      email,
    },
  });

  if (user) {
    return pusher.trigger("my-gallery", "login-facebook", {
      token: GenerateToken(user),
      message: "User already exist",
    });
  }

  const newUser = await UserModel.create({
    provider: "facebook",
    email,
    fullName: name,
    avatar: environments.default_photo,
  });

  const token = GenerateToken(newUser);

  pusher.trigger("my-gallery", "register-facebook", {
    token,
    message: "User register succsessfully and logged",
  });

  return;
};
