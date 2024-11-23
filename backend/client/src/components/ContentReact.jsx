import React from "react";

const ContentReact = ({ handleComment }) => {
  return (
    <div className="w-full h-8 flex flex-row justify-around items-center gap-3">
      <button className="w-full h-full bg-yellow-100 text-purple-600 rounded-md">
        Like
      </button>
      <button
        className="w-full h-full bg-yellow-100 text-purple-600 rounded-md"
        onClick={() => handleComment()}
      >
        Comment
      </button>
      <button className="w-full h-full bg-yellow-100 text-purple-600 rounded-md">
        Share
      </button>
    </div>
  );
};

export default ContentReact;
