import React from "react";

const NavBar = () => {
  return (
    <div className="h-fit w-full bg-white py-4 px-8 flex flex-row justify-around items-center">
      <h1 className="w-full">Flash Blog</h1>
      <ul className=" text-lg h-full w-full flex flex-row justify-center items-center gap-6">
        <li className=" underline">
          <a href="/">Home</a>
        </li>
        <li>
          <input type="search" name="" id="" placeholder="Search here..." className="py-2 px-3 text-base rounded-full placeholder:text-black" />
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
