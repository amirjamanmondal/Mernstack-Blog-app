import React from "react";
import Blog from "../cards/Blog";
import Article from "../cards/Article";

const Blogs = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-between gap-6 p-4">
      <Article />
      <div className="w-2 bg-red-700 h-40 "></div>
      <div className="w-fit flex flex-col gap-3">
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
