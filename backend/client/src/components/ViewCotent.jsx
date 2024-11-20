import React, { useEffect } from "react";
import ContentReact from "./ContentReact";
import Content from "./Content";
import ImgContent from "./ImgContent";
import UserCard from "./UserCard";
import axios from "axios";
import Navbar from "./header/Navbar";

const ViewCotent = ({ id }) => {
  useEffect(() => {
    async function fetchBlogData() {
      try {
        const url = `http://localhost:8000/blog/${id}`;
        const res = await axios.get();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-4 text-lg text-white bg-gray-500">
      <Navbar />
      <div className="w-2/3 h-fit flex flex-col justify-center items-center gap-2 p-4 ">
        <UserCard />
        <ImgContent />
        <Content />
        <ContentReact />
      </div>
    </div>
  );
};
export default ViewCotent;
