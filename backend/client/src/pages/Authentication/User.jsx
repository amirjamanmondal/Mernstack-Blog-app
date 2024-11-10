import React from "react";

const UserSignup = () => {
  return (
    <form>
      <input
        type="text"
        name="name"
        id=""
        placeholder="Enter your name"
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
        placeholder="Enter your password"
        className="w-full h-fit rounded-full py-1 px-2"
      />
      <button type="submit" className="w-full h-fit rounded-full py-1 px-2">
        Signup
      </button>
    </form>
  );
};

export default UserSignup;
