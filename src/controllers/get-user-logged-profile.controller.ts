import { Request, Response } from "express";
import { UserModel } from "../models/User.model";

export const GetUserLogged = async (req: Request, res: Response) => {
  const user = await UserModel.findOne({
    where: {
      id: (req.user as any).id,
    },
  });
  console.log("User Logged", user);
  return res.status(200).json({ user });
};
