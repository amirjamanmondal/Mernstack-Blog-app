import React from "react";
import Navbar from "./header/Navbar";

const Container = ({ Children }) => {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Navbar />

      {Children}
    </div>
  );
};

export default Container;
