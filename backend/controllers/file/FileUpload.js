const { v4 } = require("uuid");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const FileModel = require("../../models/Filemodel");

const FileUpload = (req, res) => {
  try {
    const lessionId = v4();
    const videoPath = req.file.path;
    const outputPath = `./uploads/courses/${lessionId}`;
    const hlsPath = `${outputPath}/index.m3u8`;
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }

    console.log("hls path: ", hlsPath);

    // ffmpeg
    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

    // not to be used in production level work
    exec(ffmpegCommand, async (error, stdout, stderr) => {
      if (error) {
        console.log("exec error: ", error);
      }
      console.log(`sdtout: ${stdout}`);
      console.log(`sdterr:  ${stderr}`);
      const videoUrl = `http://localhost:8000/uploads/courses/${lessionId}/index.m3u8`;

      const file = new FileModel({
        fileName: lessionId,
        fileUrl: videoUrl,
      });

      await file.save();
      res.json({
        message: "video converted to HLS format",
        file,
        slNo: 1,
      });
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = FileUpload;
