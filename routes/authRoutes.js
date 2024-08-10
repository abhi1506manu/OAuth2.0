import express from "express";
import {
  login,
  logout,
  googleAuth,
  googleAuthCallBack,
} from "../controllers/authController.js";
import passport from "passport";

const router = express.Router();

router.get("/login", login);
router.get("/logout", logout);
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback",passport.authenticate("google"), googleAuthCallBack);

export default router;
