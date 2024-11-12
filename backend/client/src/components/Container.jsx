import React from "react";

const Container = ({ Children }) => {
  return (
    <div className="w-full h-screen bg-gray-500">
      {Children}
      <span className="material-icons-outlined">search</span>
    </div>
  );
};

export default Container;
