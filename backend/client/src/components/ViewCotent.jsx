import React, { useLayoutEffect, useState } from "react";
import ContentReact from "./ContentReact";
import ImgContent from "./ImgContent";
import UserCard from "./UserCard";
import axios from "axios";
import Navbar from "./headerandFooter/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ViewCotent = () => {
  const { username, id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  useLayoutEffect(() => {
    async function fetchBlogData() {
      try {
        const url = `http://localhost:8000/user/blog/${id}`;
        const res = await axios.get(url, { withCredentials: true });
        const data = res.data;
        setBlog(data.post);
        console.log(data.post);
      } catch (error) {
        toast(error.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    }
    fetchBlogData();
  }, []);

  const handleComment = () => {
    setState(!state);
  };
  console.log(state);

  if (!blog) {
    return (
      <div>
        <Toaster />
        <h1>Loading data...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-4 text-lg text-white bg-gray-500">
      <Toaster />
      <Navbar />
      <div className="w-2/3 h-fit flex flex-col justify-center items-center gap-2 p-4 ">
        <UserCard username={username} />
        <div className="w-full h-fit flex flex-col gap-4">
          <h1 className="text text-blue-800 "> {blog.title} </h1>
          <p>{blog.content} </p>
          <p className="w-full h-fit flex justify-start items-center gap-2">
            {blog.tags.map((chunk, index) => (
              <li
                key={index}
                className="w-fit h-fit list-none bg-gray-300 px-1"
              >
                {chunk}
              </li>
            ))}{" "}
          </p>
          <p>{blog.category} </p>
        </div>
        <ContentReact handleComment={handleComment} />
        {state === true ? (
          <div className="w-fit h-fit p-2 bg-blue-300">view Comments</div>
        ) : null}
      </div>
    </div>
  );
};
export default ViewCotent;
