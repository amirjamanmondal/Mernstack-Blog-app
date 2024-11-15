const Comment = require("../../models/Comments");

const GetComment = async (req, res) => {
  try {
    const post = req.params.post;

    const comments = await Comment.find({ post: post });
    if (!comments) return res.status(404).json({ message: "post not found" });
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetComment;
