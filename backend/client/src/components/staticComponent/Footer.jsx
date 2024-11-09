import React from "react";

const Footer = () => {
  return (
    <div className="h-fit w-full flex flex-row bg-white justify-center items-center">
      <ul className="h-fit w-fit flex flex-row gap-12 p-4">
        <li className="h-fit w-fit">
          <h1>Explored</h1>
          <ul className="h-fit w-fit flex flex-col gap-2 p-4">
            <li>Know me</li>
            <li>Contact </li>
            <li>Follow</li>
            <li>Read more</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>github</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Instagram</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
