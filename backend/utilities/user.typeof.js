const User = require("../models/User");
const Admin = require("../models/Admin");

const UserTypeOf = {
  User: User,
  Admin: Admin,
};

module.exports = UserTypeOf;
