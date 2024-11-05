import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogPost'
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment' // For nested comments
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const Comment = mongoose.model('comment', commentSchema);
  export default Comment;