const bcrypt = require("bcrypt");
const userValidator = require("../../validator/userValidator.js");
const Admin = require("../../models/Admin.js");

const Signup = async (req, res) => {
  try {
    const { name, email, password } = userValidator.parse(req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const DuplicateUser = await Admin.findOne({ email: email });
    if (DuplicateUser) {
      return res
        .status(409)
        .json({ message: "user already exists Please Login", DuplicateUser });
    }
    const hashed = await bcrypt.hash(password, 10);

    const user = new Admin({
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
