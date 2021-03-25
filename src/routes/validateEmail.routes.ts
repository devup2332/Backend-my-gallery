import { Router } from "express";
import { ValidateEmail } from '../controllers/validate_email.controller';

const router = Router();

router.post('/',ValidateEmail)

export default router;