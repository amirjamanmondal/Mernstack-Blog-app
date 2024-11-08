const BlogPost = require("../../models/Blogpost.js");
const validateBlogPost = require("../../validator/blogPostValidator.js");

const DeleteBlog = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    

    if (!id) return res.status(404).json({ message: "Blog not selected" });
    const blog = await BlogPost.findOneAndDelete({ author: user?._id, _id: id });

    if (!blog)
      return res
        .status(404)
        .json({ message: "Blog not found or removed by author" });
    
    

    res.status(200).json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = DeleteBlog;
