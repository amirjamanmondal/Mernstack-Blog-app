const Comment = require("../../models/Comments");

const GetCommentsOfPost = async (req, res) => {
  try {
    const ids = req.body;
    const comments = await Comment.find({ _id: { $in: ids } });
    if (!comments) return res.status(404).json({ message: "empty" });
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetCommentsOfPost;
