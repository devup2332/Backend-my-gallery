import { Router } from "express";
import { RegisterUser } from "../controllers/register.controller";

const router = Router();

router.post('/',RegisterUser);

export default router