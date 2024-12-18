const BlogPost = require("../../models/Blogpost.js");

const GetBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find();

    if (!blogs)
      return res
        .status(404)
        .json({ message: "No contenet found manke a post to see" });

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetBlogs;
