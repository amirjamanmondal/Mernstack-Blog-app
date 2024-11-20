const BlogPost = require("../../models/Blogpost");
const validateBlogPost = require("../../validator/blogPostValidator");

const CreateBlog = async (req, res) => {
  try {
    const user = req.user;
    const { title, content, tags, category } = validateBlogPost(req.body, true);
    const newBlog = new BlogPost({
      title,
      content,
      author: user?._id,
      tags,
      category,
    });

    await newBlog.save();

    res.status(201).json({ message: "Blog uploaded successfully", newBlog });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = CreateBlog;
