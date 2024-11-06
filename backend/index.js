import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressSession from "express-session";
import passport from "passport";
import router from "./router/userRouter.js";

import  initializePassport  from "./middleware/passportConfig.js";
const app = express();

dotenv.config();
app.use(cookieParser());
const corsOption = {
  origin: "*",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);
app.use('/user', router)

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`app is running on port ${port}`));

mongoose
  .connect(process.env.DATABASE_URI)
  .then((e) =>
    console.log(`Database connected successfully ${e.connection.host}`)
  )
  .catch((err) => console.log(error.message));
