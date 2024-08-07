import express from "express";
import {
  login,
  logout,
  googleAuth,
  googleAuthCallBack,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/login", login);
router.get("/logout", logout);
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleAuthCallBack);

export default router;
