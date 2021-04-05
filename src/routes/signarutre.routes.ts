import { Router } from "express";
import passport from "passport";
import { GetSignature } from "../controllers/signature.controller";

const router = Router();

router.get("/", passport.authenticate("jwt_strategy"), GetSignature);

export default router;
