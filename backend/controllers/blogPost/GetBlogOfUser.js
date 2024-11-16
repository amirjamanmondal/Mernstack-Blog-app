const BlogPost = require("../../models/Blogpost");
const User = require("../../models/User");

const GetBlogOfUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found " });
    const blogs = await BlogPost.find({ author: id });
    if (!blogs)
      return res.status(404).json({ message: "No blog uploaded by the user" });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = GetBlogOfUser;
