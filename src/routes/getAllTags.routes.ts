import { Router } from "express";
import passport from "passport";
import { GetAllTags } from "../controllers/getAllTags.controller";

const router = Router();

router.get("/", passport.authenticate("jwt_strategy"), GetAllTags);

export default router;
