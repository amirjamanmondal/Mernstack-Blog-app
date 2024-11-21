import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit p-8 flex justify-around items-center bg-black text-white">
      <div className="w-full h-fit flex flex-col text-lg gap-2">
        <h3>Service</h3>
        <ul className="text-sm font-thin flex flex-col">
          <a href="#" className="cursor-pointer hover:underline">
            Branding
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Design
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Marketing
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Career
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Release
          </a>
        </ul>
      </div>
      <div className="w-full h-fit flex flex-col text-lg gap-2">
        <h3>Social</h3>
        <ul className="text-sm font-thin flex flex-col">
          <a href="#" className="cursor-pointer hover:underline">
            Branding
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Design
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Marketing
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Career
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Release
          </a>
        </ul>
      </div>
      <div className="w-full h-fit flex flex-col text-lg gap-2">
        <h3>About</h3>
        <ul className="text-sm font-thin flex flex-col">
          <a href="#" className="cursor-pointer hover:underline">
            Branding
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Design
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Marketing
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Career
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Release
          </a>
        </ul>
      </div>
      <div className="w-full h-fit flex flex-col text-lg gap-2">
        <p className="text-sm font-thin">
          2024 all right reserved @Amirjamanmondal
        </p>
      </div>
    </div>
  );
};

export default Footer;
