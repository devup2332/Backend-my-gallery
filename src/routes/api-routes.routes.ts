import { Router } from "express";
import RegisterRouter from "./register.routes";
import ValidateEmailRouter from "./validateEmail.routes";
import LoginRouter from "./login.routes";
import UserLoggedProfileRouter from "./user-loged-profile.routes";
import AuthRouter from "./auth.routes";

const router = Router();

router.use("/register", RegisterRouter);
router.use("/validate_email", ValidateEmailRouter);
router.use("/login", LoginRouter);
router.use("/user_logged_profile", UserLoggedProfileRouter);
router.use("/auth", AuthRouter);

export default router;
