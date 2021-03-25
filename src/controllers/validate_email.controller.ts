import { Request, Response } from "express";
import { UserModel } from "../models/User.model";

export const ValidateEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await UserModel.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    return res.status(200).json({
      status: false,
      message: "Email already is in use",
    });
  }

  return res.status(200).json({
    status: true,
    message: "Email isnt in use",
  });
};
