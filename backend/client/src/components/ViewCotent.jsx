import React, { useEffect } from "react";
import ContentReact from "./ContentReact";
import Content from "./Content";
import ImgContent from "./ImgContent";
import UserCard from "./UserCard";
import axios from "axios";

const ViewCotent = ({id}) => {
  useEffect(() => {
    async function fetchBlogData() {
      try {
        const url = `http://localhost:8000/blog/${id}`
        const res = await axios.get()
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="w-3/4 h-fit p-6 flex flex-col gap-4 text-lg text-white bg-gray-500">
      {/* // user component will be there */}
      <UserCard />
      {/* // content title will be there  */}
      <ImgContent />
      {/* //content imgae will be there  */}
      <Content />

      {/* //like and comment button component will be ther  */}
      <ContentReact />
    </div>
  );
};

export default ViewCotent;
