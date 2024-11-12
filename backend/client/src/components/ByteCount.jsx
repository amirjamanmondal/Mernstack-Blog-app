import React from "react";
import Card from "./Card";

const ByteCount = () => {
  return (
    <div className="w-3/4 h-1/3 border border-black flex justify-start items-start gap-6 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ByteCount;
