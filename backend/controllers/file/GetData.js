const FileModel = require("../../models/Filemodel");

const GetData = async (req, res) => {
  try {
    const id = req.params._id;
    const files = await FileModel.findById(id);
    res.status(200).json({ files });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = GetData;
