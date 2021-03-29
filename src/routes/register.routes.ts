import { Router } from "express";
import { RegisterUser } from "../controllers/register-user";

const router = Router();

router.post("/", RegisterUser);

export default router;
