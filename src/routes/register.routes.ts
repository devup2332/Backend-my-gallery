import { Router } from "express";
import passport from "passport";
import { RegisterFacebook } from "../controllers/register-facebook";
import { RegisterUser } from "../controllers/register-user";

const router = Router();

router.post("/", RegisterUser);

router.get(
  "/facebook",
  passport.authenticate("facebook_strategy"),
  RegisterFacebook
);

export default router;
