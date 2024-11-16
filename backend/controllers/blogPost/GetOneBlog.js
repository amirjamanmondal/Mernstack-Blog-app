const BlogPost = require("../../models/Blogpost");

const GetOneBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const post = await BlogPost.findById(blogId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetOneBlog;