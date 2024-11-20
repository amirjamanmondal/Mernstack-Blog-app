const BlogPost = require("../../models/Blogpost.js");

const GetOwnBlogs = async (req, res) => {
  try {
    const id = req.params.id;
    const blogs = await BlogPost.find({ author: id });

    if (!blogs)
      return res
        .status(404)
        .json({ message: "No contenet found manke a post to see" });

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetOwnBlogs;
