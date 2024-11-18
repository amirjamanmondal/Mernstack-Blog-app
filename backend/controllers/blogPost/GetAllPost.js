const BlogPost = require("../../models/Blogpost");
const GetAllPost = async (req, res) => {
  try {
    
    const Posts = await BlogPost.find({});

    if (!Posts)
      return res
        .status(404)
        .json({ message: "No post has Uploaded by users of failed to fetch" });

    res.status(200).json(Posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetAllPost;
