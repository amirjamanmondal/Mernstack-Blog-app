import React, { useEffect } from "react";
import FetchContentData from "../components/FetchContentData";

const Home = () => {
  
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-6 ml-10">
      <FetchContentData />
    </div>
  );
};

export default Home;
