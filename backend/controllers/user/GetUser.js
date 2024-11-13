const GetUser = (req, res) => {
  try {
    const user = req.user;
    const token = req.cookies;
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetUser;
