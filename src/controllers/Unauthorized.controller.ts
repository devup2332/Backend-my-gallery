import { Request, Response } from "express";

export const Unauthtorized = (req: Request, res: Response) => {
  return res.send("Vete a la mrd hacker rctm");
};
