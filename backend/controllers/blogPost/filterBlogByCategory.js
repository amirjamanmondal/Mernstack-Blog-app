const BlogPost = require("../../models/Blogpost");
const CategoryValidator = require("../../validator/CategoryValidator");

const GetBlogByCategory = async (req, res) => {
  try {
    const { category } = CategoryValidator.parse(req.body);

    const post = await BlogPost.find({ category: category }).select(
      "title content category"
    );

    if (!post) return res.status(404).json({ message: "Blog not found" });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = GetBlogByCategory;
