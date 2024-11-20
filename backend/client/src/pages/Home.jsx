import React, { useEffect } from "react";
import FetchContentData from "../components/FetchContentData";
import UploadButtons from "../components/UploadButtons";

const Home = () => {
  const content_url = "http://localhost:8000/user/blog";

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2 pl-4">
      <UploadButtons />

      <FetchContentData content_url={content_url} />
    </div>
  );
};

export default Home;
