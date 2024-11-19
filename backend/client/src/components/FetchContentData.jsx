import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

const FetchContentData = () => {
  const [contents, setContent] = useState(null);
  const navigate = useNavigate();
  const content_url = "http://localhost:8000/user/blog";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(content_url, { withCredentials: true });
        const data = res.data;
        console.log(data.blogs);
        setContent(data.blogs);

        // setContent(res.data);
      } catch (error) {
        alert(error.message);
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Content contents={contents} />
    </div>
  );
};

export default FetchContentData;
