import React, { useEffect } from "react";
import FetchContentData from "../components/FetchContentData";
import UploadButtons from "../components/UploadButtons";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2 pl-4">
      <UploadButtons />

      <FetchContentData />
    </div>
  );
};

export default Home;
