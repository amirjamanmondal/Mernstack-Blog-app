import express from "express";
import Signup from "../controllers/user/Signup.js";

import passport from "passport";
const router = express.Router();

router.post("/signup", Signup);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/", // Redirect to homepage on success
    failureRedirect: "/login", // Redirect back to login on failure
    failureFlash: true, // Optionally flash error message
  })
);

export default router;
