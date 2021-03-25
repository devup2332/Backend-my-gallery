import { Router } from "express";
import RegisterRoutes from './register.routes';
import ValidateEmailRouter from './validateEmail.routes';
import LoginRouter from './login.routes';

const router = Router();

router.use('/register',RegisterRoutes)
router.use('/validate_email',ValidateEmailRouter)
router.use('/login',LoginRouter)

export default router;