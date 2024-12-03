function isAuthenticated(req, res, next) {
  try {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "user Not Logged in" });
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = isAuthenticated;
