// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const router = require("./router/userRouter.js");
const session = require("express-session");
const initializePassport = require("./helpers/passport-Config.js");
const adminRouter = require("./router/adminRouter.js");

// Initialize Express app
const app = express();

// Configure environment variables
dotenv.config();

// Configure middleware
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173", // Adjust for your client-side URL
  credentials: true, // Use true instead of "include"
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(
  passport.session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5 * 24 * 60 * 1000 },
  })
);

// Passport Local Strategy
initializePassport(passport);

// Database connection
mongoose
  .connect(process.env.DATABASE_URI)
  .then((e) =>
    console.log(`Database connected successfully: ${e.connection.host}`)
  )
  .catch((err) => console.error(err.message));



app.use("/user", router);
app.use("/admin", adminRouter);


// Start the server
const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`App is running on port ${port}`));
