import React from "react";

const Blog = () => {
  return (
    <div className="h-fit w-[24rem] text-sm p-2 bg-gray-700 rounded flex flex-col gap-4 justify-center items-center">
      <div className="w-full h-20 bg-red-400"></div>
      <h1 className="w-full flex justify-start text-lg text-blue-500">
        Iphone introduce a new feature
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        consectetur ad eos modi accusantium consequatur, iusto sed debitis esse
        deserunt!
      </p>
      <button className=" w-full flex justify-center mb-2 text-base bg-slate-200 px-2 py-1 rounded-md">
        Read
      </button>
    </div>
  );
};

export default Blog;
