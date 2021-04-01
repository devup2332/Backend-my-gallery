import { Request, Response } from "express";
import { pusher } from "../app";
import UserModel from "../models/User.model";

export const UpdateProfileUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, description, email, phone, avatar } = req.body;

  if (avatar) {
    try {
      const user = await UserModel.update(
        {
          avatar,
        },
        {
          where: {
            id: id,
          },
        }
      );

      pusher.trigger("my-gallery", "user-photo-updated", {});

      return res.status(200).json({
        message: "User updated",
        status: true,
      });
    } catch (err) {
      throw err;
    }
  }

  try {
    const user = await UserModel.update(
      {
        fullName,
        description,
        email,
        phone,
      },
      {
        where: {
          id: id,
        },
      }
    );

    pusher.trigger("my-gallery", "user-updated", { message: "User updated" });

    return res.status(200).json({
      message: "User updated",
      status: true,
    });
  } catch (err) {
    throw err?.message;
  }
};
