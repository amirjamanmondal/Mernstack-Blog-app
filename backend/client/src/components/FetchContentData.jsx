import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

const FetchContentData = ({content_url}) => {
  const [contents, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(content_url, { withCredentials: true });
        const data = res.data;
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
    <div className="w-2/3 h-fit ">
      <Content contents={contents} />
    </div>
  );
};

export default FetchContentData;
