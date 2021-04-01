import { Router } from "express";
import { GetSignature } from "../controllers/signature.controller";

const router = Router();

router.get("/", GetSignature);

export default router;
