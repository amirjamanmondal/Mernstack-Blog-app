const BlogPost = require("../../models/Blogpost");
const blogPostValidator = require("../../validator/blogPostValidator");
const Comments = require("../../models/Comments.js");
const User = require("../../models/User.js");
const { default: mongoose } = require("mongoose");

const CreateBlog = async (req, res) => {
  try {
    const user = req.user;
    const userId = user?._id;
    console.log(userId);

    const { title, content, tags, category } = blogPostValidator.parse(
      req.body
    );

    if (!userId) {
      return res.status(401).json({ message: "user id not found" });
    }

    const newBlog = new BlogPost({
      title,
      content,
      author: user.toObject()._id instanceof mongoose.mongo.BSON.Binary,
      tags,
      category,
    });

    if (!newBlog) {
      return res.status(400).json({ message: "blog not created" });
    }
    await newBlog.save();
    res.status(201).json({ message: "new blog created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = CreateBlog;
