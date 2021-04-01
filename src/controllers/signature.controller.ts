import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { environments } from "../environments/environments";

export const GetSignature = async (req: Request, res: Response) => {
  console.log("here");
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      timestamp,
    },
    environments.cloudinary_api_secret as string
  );
  return res.json({
    signature,
    timestamp,
    api_key: environments.cloudinary_api_key,
  });
};
