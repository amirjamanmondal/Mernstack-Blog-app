const GetUser = (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetUser;
