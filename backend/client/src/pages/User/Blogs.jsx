import React from "react";
import Blog from "../../components/cards/Blog";
import Category from "../../components/cards/Category";

const Blogs = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-around gap-2">
      <Category />
      <hr className="w-full text-base h-[1px] bg-red-900" />
      <div className="w-full h-fit flex flex-row justify-around p-6">
        <div className="w-full h-fit flex flex-row flex-wrap gap-5">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
        <div className="w-1/3 h-40 bg-slate-200 border border-black"></div>
      </div>
    </div>
  );
};

export default Blogs;
