import React from "react";

const Category = () => {
  return (
    <div className="w-full h-7 flex justify-center items-center my-2 p-2">
      <ul className="w-full flex flex-row justify-between items-center">
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Technology</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Politics</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Crime</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Bio-Tech</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Sports</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Movies</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Music</li>
        <li className="py-1 px-2 bg-blue-400 rounded-lg">Education</li>
      </ul>
    </div>
  );
};

export default Category;
