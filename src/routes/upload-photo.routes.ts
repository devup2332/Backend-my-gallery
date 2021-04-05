import { Router } from "express";
import { UploadAvatar } from "../controllers/upload-avatar.controller";
import { UploadNewPhoto } from "../controllers/upload-new-photo.controller";

const router = Router();

router.post("/upload-avatar", UploadAvatar);
router.post("/upload-photo/:id", UploadNewPhoto);

export default router;
