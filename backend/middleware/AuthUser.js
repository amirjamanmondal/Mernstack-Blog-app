const AuthUser = (req, res, next) => {
  if (req.user) return next();
  res.redirect("/login");
};

export default AuthUser;
