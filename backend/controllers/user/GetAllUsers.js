const User = require("../../models/User");

const GetAllUsers = async (req, res) => {
  try {
    const user = await User.find({});

    if (!user) return res.status(404).json({ message: "No user Found " });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetAllUsers;
