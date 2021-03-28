import { Router } from "express";
import passport from "passport";
import { LoginUser } from "../controllers/login.controller";
import { RegisterFacebook } from "../controllers/register-facebook";

const router = Router();

router.post("/", LoginUser);

export default router;
