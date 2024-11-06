import express from "express";
import Signup from "../controllers/user/Signup.js";
import AuthUser from "../middleware/AuthUser.js";

import passport from "passport";
const router = express.Router();

router.post("/signup", Signup);

router.get("/", (req, res) => {
  res.send("hello world");
});


router.post('/login', (req, res)=>{
  res.status(200).json({message: 'please try again'})
})

export default router;
