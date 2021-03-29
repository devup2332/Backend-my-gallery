import { Router } from "express";
import { LoginUser } from "../controllers/login-user.controller";

const router = Router();

router.post("/", LoginUser);

export default router;
