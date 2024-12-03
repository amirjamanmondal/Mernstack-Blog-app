const mongoose = require("mongoose");
const { number } = require("zod");
const { required } = require("../validator/userValidator");

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    slNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const FileModel = mongoose.model("file", fileSchema);
module.exports = FileModel;
