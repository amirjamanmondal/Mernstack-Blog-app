import React from "react";

const UploadButtons = () => {
  return (
    <div className="w-2/3 flex gap-4 p-2 justify-end">
      <button className="w-fit h-fit p-2 rounded-lg bg-blue-600 hover:bg-green-400"><a href="/upload">Text</a></button>
      <button className="w-fit h-fit p-2 rounded-lg bg-blue-600 hover:bg-green-400">Image</button>
      <button className="w-fit h-fit p-2 rounded-lg bg-blue-600 hover:bg-green-400">Video</button>
    </div>
  );
};

export default UploadButtons;
