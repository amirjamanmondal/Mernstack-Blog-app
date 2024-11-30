const User = require("../../models/User");

const FindUserByName = async (req, res) => {
  try {
    // Extract the name parameter more reliably
    const name = req.params?.name; // Use optional chaining to handle missing name
    if (!name) {
      return res.status(400).json({ message: "Missing name parameter" });
    }

    // Create the regular expression for case-insensitive matching
    const regexName = new RegExp(`^${name}`, "i");

    // Search for users whose name starts with the provided name
    const users = await User.find({ name: { $regex: regexName } });

    // Handle the case where no users are found
    if (users.length === 0) {
      return res.status(200).json({ user: null, message: "No user found" }); // Informative response
    }

    // Send the found user(s) if any
    res.status(200).json({ user: users }); // Send an array of matching users
  } catch (error) {
    res.status(500).json({ message: "Error finding user", errorDetails: error.message }); // Provide error details
  }
};

module.exports = FindUserByName;