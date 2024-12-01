const multer = require("multer");
const { v4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + v4() + path.extname(file.originalname));
  },
});

const Upload = multer({ storage: storage });

module.exports = Upload;
