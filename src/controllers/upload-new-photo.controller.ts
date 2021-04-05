import { Request, Response } from "express";
import PhotoModel from "../models/Photo.model";
import TagsModel from "../models/Tags.model";
import UserModel from "../models/User.model";
import ui from "uniqid";

export const UploadNewPhoto = async (req: Request, res: Response) => {
  const photoId = ui();

  const newPhoto = await PhotoModel.create({
    secure_url: req.body.image.secure_url,
    public_id: req.body.image.public_id,
    id: photoId,
    userId: req.params.id,
  });

  for (const tag of req.body.tags) {
    const tagId = ui();
    await TagsModel.create({
      id: tagId,
      name: tag.name,
      photoId: newPhoto.id,
    });
  }

  const u = await UserModel.findByPk(req.params.id, {
    include: [
      {
        model: PhotoModel,
        as: "photos",
        include: [
          {
            model: TagsModel,
            as: "tags",
          },
        ],
      },
    ],
  });

  console.log(u);

  return res.status(200).json({
    status: true,
    u,
    message: "Photo uploaded",
  });
};
