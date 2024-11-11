import React from "react";
import img from "../../static/pexels-sora.jpg";

const Blog = () => {
  return (
    <div className="h-fit w-full bg-red-500 p-8 flex flex-col gap-6 rounded-lg">
      <img src={img} className="w-full h-48 bg-red-400 "></img>
      <h1 className="w-full flex justify-start text-lg text-blue-500">
        Iphone introduce a new feature
      </h1>
      <span className="w-full">Amir Jaman Mondal</span>
      <button className=" w-full flex justify-center text-green-600">
        <a href="/login">Read</a>
      </button>
    </div>
  );
};

export default Blog;
