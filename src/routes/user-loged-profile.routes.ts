import { Router } from "express";
import passport from "passport";
import { GetUserLogged } from "../controllers/get-user-logged-profile.controller";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt_strategy", {
    failureRedirect: "/api/unauthorized",
  }),
  GetUserLogged
);

export default router;
