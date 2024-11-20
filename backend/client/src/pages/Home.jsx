import React, { useEffect } from "react";
import FetchContentData from "../components/FetchContentData";
import UploadButtons from "../components/UploadButtons";
import Navbar from "../components/header/Navbar";

const Home = () => {
  const content_url = "http://localhost:8000/user/blog";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
        <UploadButtons />
        <FetchContentData content_url={content_url} />
      </div>
    </div>
  );
};

export default Home;
