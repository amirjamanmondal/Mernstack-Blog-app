import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Comment from "./Comment";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Content = ({ contents, userId }) => {
  const [users, setUser] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:8000/user/user/all", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (error) {
        toast(error.message);
      }
    }
    fetchUser();
  }, []);

  async function deletePost(itemId) {
    try {
      const res = await axios.delete(
        `http://localhost:8000/user/blog/${itemId}`,
        { withCredentials: true }
      );
      const data = res.data?.message;
      toast(data);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } catch (error) {
      toast(error.message);
    }
  }

  const renderContent = () => {
    if (!contents) {
      return <div>No data Found</div>;
    }
    return (
      <div className="w-full h-fit flex flex-col justify-around items-start gap-3 p-3">
        <Toaster />
        {contents.map((item, index) => {
          const update = new Date(item.updatedAt);
          const formattedDateUpdate = new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(update);

          const matchingUser = users.filter(
            (user) => user._id === item.author
          )[0];
          console.log({ matchingUser });

          return (
            <div
              key={index}
              id={item._id}
              className="w-full h-fit p-4 bg-red-300 rounded-md"
            >
              <div className="w-full h-fit flex justify-between items-center">
                <h3>{matchingUser.name}</h3>
                {userId === item.author ? (
                  <button
                    className="w-fit h-fit p-2 bg-red-500 rounded-md"
                    onClick={() => deletePost(item._id)}
                  >
                    delete
                  </button>
                ) : (
                  <span className="w-fit h-fit p-2 bg-green-500 rounded-md">
                    save
                  </span>
                )}
              </div>
              <h1 className="text text-blue-800 hover:underline cursor-pointer">
                {item.title || "hello"}
              </h1>
              <p className="text-sm font-thin text-red-600">
                {formattedDateUpdate}
              </p>
              <p className="w-fit h-fit p-2">{item.content}</p>
              <Comment comments={item.comments} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading user Content...</div>}>
      {renderContent()}
    </Suspense>
  );
};

export default Content;
