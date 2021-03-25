import { Router } from "express";
import passport from "passport";
import { LoginUser } from "../controllers/login.controller";

const router = Router();

router.post("/", LoginUser);

export default router;
