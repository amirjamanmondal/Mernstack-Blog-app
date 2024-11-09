import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-72 bg-blue-400 text-black flex justify-center items-center flex-col gap-4 ">
      <h1 className="text-xl font-semibold">Welcome to the blog Controll </h1>
      <p className="text-sm">
        Now you can seee users and their post and you can authorize someone to
        act like a admin
      </p>
      <button className="w-fit h-fit px-2 py-1 bg-white border border-black rounded-lg" >
        <a href="/admin">Let's See</a>
      </button>
    </div>
  );
};

export default LandingPage;
