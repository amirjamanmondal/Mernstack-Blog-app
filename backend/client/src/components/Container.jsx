import React from "react";
import UploadButtons from "./UploadButtons";

const Container = ({ Children }) => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <UploadButtons />
      {Children}
      <span className="material-icons-outlined">search</span>
    </div>
  );
};

export default Container;
