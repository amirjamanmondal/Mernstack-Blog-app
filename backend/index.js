import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`app is running on port ${port}`));

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(error.message));
