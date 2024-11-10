import React from "react";

const AdminSignup = () => {
  return (
    <form className="w-[20rem] h-fit p-8 border-2 border-black bg-gray-400 text-white flex flex-col gap-3">
      <input
        type="text"
        placeholder="Enter your Name"
        name="name"
        className="w-full h-fit rounded-full py-1 px-2"
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter your email"
        className="w-full h-fit rounded-full py-1 px-2"
      />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Enter a password"
        className="w-full h-fit rounded-full py-1 px-2"
      />
      <p className="font-extralight">Already have an account? <span className="text-blue-600 text-sm font-semibold">Login</span></p>
      <button type="submit" className="w-full h-fit rounded-full py-1 px-2 bg-blue-600">
        Signup
      </button>
    </form>
  );
};

export default AdminSignup;
