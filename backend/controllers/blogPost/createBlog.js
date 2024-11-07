const BlogPost = require("../../models/Blogpost");
const blogPostValidator = require("../../validator/blogPostValidator");

const CreateBlog = async (req, res) => {
  try {
    const user = req.user;
    const { title, content, tags, category } = blogPostValidator.parse(
      req.body
    );

    const newBlog = new BlogPost({
      title,
      content,
      author: user?._id,
      tags,
      category,
    });

    await newBlog.save();
    res.status(201).json({ message: "new blog created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = CreateBlog;
