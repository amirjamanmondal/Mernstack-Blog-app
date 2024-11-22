import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./headerandFooter/Navbar";

const UpdateContent = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:8000/user/blog/${id}`, {
        withCredentials: true,
      });
      const data = res.data.post;
      setTitle(data.title);
      setContent(data.content);
    })();
  }, []);

  async function UpdateContent() {
    try {
      const res = await axios.patch(
        `http://localhost:8000/user/blog/${id}`,
        { title, content },
        { withCredentials: true }
      );
      const success = res.data?.message;
      toast(success);
      setTimeout(() => {
        navigate("/user");
      }, 1000);
    } catch (error) {
      toast(error.message);
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-3 ">
      <Navbar />
      <Toaster />
      <div className="w-full h-full flex flex-col p-4">
        <form className="w-full h-full p-4 rounded-md bg-slate-300 text-black flex flex-col gap-2">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-fit rounded-md p-2"
            placeholder="Enter Title here..."
          />
          <textarea
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your text here"
            className="rounded-md resize-none p-2"
          />
          <button
            type="submit"
            className="w-fit h-fit p-2 bg-blue-500 hover:bg-green-600 rounded-md"
            onClick={UpdateContent}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContent;
