const Logout = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      return res.send({ message: "User is not logged in" });
    }

    req.logOut((err) => {
      if (err) {
        return next(err); // Pass error to Express error handler
      }
      res.send({ message: "Successfully logged out" });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = Logout;
