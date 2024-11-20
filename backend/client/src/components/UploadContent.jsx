import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./header/Navbar";

const UploadContent = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [tag, settag] = useState("");
  const [category, setcategory] = useState("");
  const [errors, seterrors] = useState(null);

  const handlePost = async (e) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/user/blog`,
        {
          title,
          content,
          tag,
          category,
        },
        { withCredentials: true }
      );
      const data = res.data;
      setTimeout(() => {
        toast(res.data.message);
      }, 5000);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      seterrors(error.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 ">
      <Navbar />
      <Toaster />
      <div className="w-full h-full flex flex-col p-4">
        <form className="w-full h-full p-4 rounded-md bg-slate-300 text-black flex flex-col gap-2">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            id="title"
            className="w-full h-fit rounded-md p-2"
            placeholder="Enter Title here..."
          />
          <textarea
            rows="8"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            placeholder="Enter your text here"
            className="rounded-md resize-none p-2"
          />
          <input
            type="text"
            name="tag"
            id="tag"
            value={tag}
            onChange={(e) => settag(e.target.value)}
            placeholder="add some tag"
            className="w-full h-fit rounded-md p-2"
          />
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            className="w-full h-fit rounded-md p-2"
            placeholder="Enter category "
          />
          <button
            type="submit"
            onClick={(e) => handlePost(e)}
            className="w-fit h-fit p-2 bg-blue-500 hover:bg-green-600 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadContent;
