const Comments = require("../../models/Comments");
const BlogPost = require("../../models/Blogpost");
const postCommentIsValid = require("../../validator/commentValidator");

const PostComment = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;

    const { content } = postCommentIsValid(req.body, true);
    if (!id) return res.status(404).json({ message: "Blog not selected" });
    const post = await BlogPost.findById(id);

    if (!post) return res.status(404).json({ message: "Blog post not found" });
    console.log(post);

    const newComment = new Comments({
      author: user._id,
      post: id,
      content: content,
    });

    await newComment.save();
    const commentData = post.comments;
    commentData.push(newComment._id);

    if (newComment) {
      await newComment.save();
      await post.save();
    } else {
      return res.status(400).json({ message: "Comment failed to post" });
    }

    res.status(201).json({ message: "new comment added", newComment });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = PostComment;
