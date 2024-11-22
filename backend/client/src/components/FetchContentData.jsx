import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const FetchContentData = ({ content_url, userId }) => {
  const [contents, setContent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!content_url) {
          toast("no url found");
        }
        const res = await axios.get(content_url, { withCredentials: true });
        const data = res.data;
        setContent(data.blogs);
        // toast(res.data?.message);
      } catch (error) {
        toast(error.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-2/3 h-fit ">
      <Toaster />
      <Content contents={contents} userId={userId} />
    </div>
  );
};

export default FetchContentData;
