import React from "react";

const NavBar = () => {
  return (
    <div className="h-fit w-fit bg-white p-4">
      <ul className=" text-lg h-full w-full flex flex-row justify-center items-center gap-6">
        <li className=" underline">
          <a href="#">Home</a>
        </li>
        <li>
          <input type="search" name="" id="" placeholder="Search here..." className="py-2 px-3 text-base rounded-full placeholder:text-black" />
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
