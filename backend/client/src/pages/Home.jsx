import React, { useLayoutEffect, useState } from "react";
import FetchContentData from "../components/FetchContentData";
import Navbar from "../components/headerandFooter/Navbar";
import toast from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [userId, setuserId] = useState();
  const content_url = "http://localhost:8000/user/blog";

  useLayoutEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:8000/user/`, {
          withCredentials: true,
        });
        const data = res.data;
        setuserId(data.user._id);
      } catch (error) {
        toast(error.message);
      }
    })();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="w-full min-h-80 h-fit flex flex-col gap-4 justify-center items-center">
        <FetchContentData content_url={content_url} userId={userId} />
      </div>
    </div>
  );
};

export default Home;
