import { Router } from "express";
import {
  sendVerificationMail,
  signinUser,
  signupUser,
  verifyUserMail,
  sendForgotPasswordMail,
  verifyForgotMail,
} from "../controllers/userControllers";
import {
  signupUserValidation,
  signinUserValidation,
  verifyUserMailValidation,
  sendVerificationMailValidation,
  verifyForgotMailValidation,
  sendForgotPasswordMailValidation,
} from "../validation/userValidation/userValidation";

const router = Router();

router.post("/signup", signupUserValidation, signupUser);
router.post("/signin", signinUserValidation, signinUser);

router.post(
  "/register-email-verification",
  sendVerificationMailValidation,
  sendVerificationMail
);

router.post("/forgot-password", verifyUserMail);

router.post("/forgot-password", verifyForgotMailValidation, verifyForgotMail);
router.post(
  "/forgot-password",
  sendForgotPasswordMailValidation,
  sendForgotPasswordMail
);

export default router;
