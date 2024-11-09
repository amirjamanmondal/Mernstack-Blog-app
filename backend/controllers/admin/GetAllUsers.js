const User = require("../../models/User");

const GetInfo = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) return res.status(404).json({ message: "No user Found " });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetInfo;
