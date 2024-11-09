const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
const userValidator = require("../../validator/userValidator.js");

const Signup = async (req, res) => {
  try {
    const { name, email, password } = userValidator.parse(req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const DuplicateUser = await User.findOne({ email: email });
    if (DuplicateUser) {
      return res
        .status(409)
        .json({ message: "user already exists Please Login" });
    }
    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: hashed,
    });

    if (user) {
      await user.save();
    }
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = Signup;
