import { Router } from "express";
import passport from "passport";
import { AuthFacebook } from "../controllers/auth-facebook.controller";

const router = Router();

router.get(
  "/facebook",
  passport.authenticate("facebook_strategy", {
    scope: ["email"],
  }),
  AuthFacebook
);

export default router;
