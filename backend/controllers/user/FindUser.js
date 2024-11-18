const User = require("../../models/User");

const FindUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "user not found " });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = FindUser;