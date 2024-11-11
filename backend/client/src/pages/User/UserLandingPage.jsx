import React from "react";
import img from "../../static/images.jpg";
import pexels from "../../static/pexels-sora.jpg";
import Blog from "../../components/cards/Blog";

const UserLandingPage = () => {
  return (
    <div className="w-full h-screen flex gap-6 bg-sky-400 justify-center items-center ">
      <div className=" p-4 w-full h-full flex justify-center items-center gap-4">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default UserLandingPage;
