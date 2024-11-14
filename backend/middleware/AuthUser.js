const jwt = require("jsonwebtoken");

// Middleware to check if user is authenticated with error handling
function isAuthenticated(req, res, next) {
  try {
    const token = req.cookies.user1cookie;
    const userId = jwt.verify(token, process.env.SECRET_KEY);

    if (req.isAuthenticated() || userId) {
      console.log(userId);
      return next();
    }
    res.status(401).json({ message: "user Not Logged in" });
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).send("Internal Server Error"); // Handle any unexpected errors
  }
}

module.exports = isAuthenticated;
