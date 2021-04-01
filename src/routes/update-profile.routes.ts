import { Router } from "express";
import passport from "passport";
import { UpdateProfileUser } from "../controllers/update-profile.controller";

const router = Router();

router.put("/:id", passport.authenticate("jwt_strategy"), UpdateProfileUser);

export default router;
