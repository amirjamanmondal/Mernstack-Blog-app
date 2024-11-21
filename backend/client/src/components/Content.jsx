import axios from "axios";
import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import toast, { Toaster } from "react-hot-toast";
import FilterBlog from "../components/FilterBlog";

const Content = ({ contents, userId }) => {
  const [users, setUser] = useState();
  const [filter, setfilter] = useState();
  const [filteredBlog, setFilteredBlog] = useState(null);

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
  }, [contents]);

  async function deletePost(itemId) {
    try {
      await axios.delete(`http://localhost:8000/user/blog/${itemId}`, {
        withCredentials: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast(error.message);
    }
  }

  const renderContent = () => {
    if (!contents) {
      return <div>No data Found</div>;
    }
    return (
      <div className="w-full h-fit flex flex-col justify-around items-start gap-4 p-3">
        <Toaster />
        <FilterBlog setfilter={setfilter} />

        {contents.map((item, index) => {
          const update = new Date(item.updatedAt);
          const formattedDateUpdate = new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(update);

          const matchingUser = users.filter(
            (user) => user._id === item.author
          )[0];

          return (
            <div
              key={index}
              id={item._id}
              className="w-full h-fit p-4 bg-red-300 rounded-md flex flex-col gap-2"
            >
              <div className="w-full h-fit flex justify-between items-center">
                <h3>{matchingUser.name}</h3>
                {userId === item.author ? (
                  <div className="w-fit h-fit flex gap-2">
                    <button className="w-fit h-fit p-2 bg-blue-500 rounded-md hover:bg-green-600">
                      Update
                    </button>

                    <button
                      className="w-fit h-fit p-2 bg-red-500 rounded-md hover:bg-gray-600"
                      onClick={() => deletePost(item._id)}
                    >
                      delete
                    </button>
                  </div>
                ) : (
                  <span className="w-fit h-fit p-2 bg-green-500 rounded-md cursor-pointer hover:bg-gray-500">
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
              <p className="w-full h-fit flex justify-start items-center gap-2">
                {item.tags.map(
                  (
                    chunk,
                    index // Replaced 'chunks' with 'chunk' for clarity
                  ) => (
                    <li
                      key={index}
                      className="w-fit h-fit list-none bg-gray-300 px-1"
                    >
                      {chunk}
                    </li>
                  )
                )}
              </p>
              <p className="w-fit h-fit p-2 border border-green-500 rounded-full">
                {item.category}
              </p>
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
