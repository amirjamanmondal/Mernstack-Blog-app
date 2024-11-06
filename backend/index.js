// Import dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./router/userRouter.js";

// Initialize Express app
const app = express();

// Configure environment variables
dotenv.config();

// Configure middleware
app.use(cookieParser());
const corsOption = {
  origin: "*",
  method: "GET, HEAD, PUT, PATCH, POST, DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.DATABASE_URI)
  .then((e) =>
    console.log(`Database connected successfully ${e.connection.host}`)
  )
  .catch((err) => console.error(err.message));

// Define routes
app.use("/user", router);

// Start the server
const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`app is running on port ${port}`));
