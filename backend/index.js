// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");

const router = require("./router/userRouter.js");
const session = require("express-session");
const User = require("./models/User.js");

// Initialize Express app
const app = express();

// Configure environment variables
dotenv.config();

// Configure middleware
app.use(cookieParser());
const corsOption = {
  origin: process.env.CLIENT_URL || "*", // Adjust for your use case
  method: "GET, HEAD, PUT, PATCH, POST, DELETE",
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
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, {
            message: "User not found or invalid email",
          });
        }
        if (!(await bcrypt.compare(password, user.password || ""))) {
          return done(null, false, { message: "Password not matched" });
        }
        return done(null, user);
      } catch (error) {
        console.error(error);
        return done(error, false, { message: "Internal server error" });
      }
    }
  )
);

// Passport Serialize and Deserialize
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (error) {
    console.error(error);
    return done(error, false, {
      message: "Internal error during serialization",
    });
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    return done(null, user);
  } catch (error) {
    console.error(error);
    return done(error, false, {
      message: "Internal error during deserialization",
    });
  }
});

app.use((req, res, next) => {
  console.log("Session:", req.session);
  next();
});

// Database connection
mongoose
  .connect(process.env.DATABASE_URI)
  .then((e) =>
    console.log(`Database connected successfully: ${e.connection.host}`)
  )
  .catch((err) => console.error(err.message));

// Define routes
app.use("/user", router);

// Start the server
const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`App is running on port ${port}`));
