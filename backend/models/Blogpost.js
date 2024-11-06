import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tags: [String],

    category: [String],
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model("blogPost", blogPostSchema);
export default BlogPost;
