import React from "react";
import Logout from "../Logout";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="font-bold text-xl">
          My Blog
        </a>
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
