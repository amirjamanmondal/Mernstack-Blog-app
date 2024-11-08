const BlogPost = require("../../models/Blogpost.js");
const validateBlogPost = require("../../validator/blogPostValidator.js");

const UpdateBlog = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    const { title, content } = validateBlogPost(req.body, false);

    if (!id) return res.status(404).json({ message: "Blog not selected" });
    const blog = await BlogPost.findOne({ author: user?._id, _id: id });

    if (!blog)
      return res
        .status(404)
        .json({ message: "Blog not found or removed by author" });
    blog.title = title;
    blog.content = content || blog.content;

    blog.save();

    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = UpdateBlog;
