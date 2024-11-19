import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Comment from "./Comment";

const Content = ({ contents }) => {
  const [users, setUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:8000/user/user/all", {
          withCredentials: true,
        });
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchUser();
  }, []);

  const renderContent = () => {
    if (!contents) {
      return <div>No data Found</div>;
    }
    return (
      <div className="w-fit h-fit flex flex-col justify-around items-start gap-3 p-3">
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
              <h3>{matchingUser.name}</h3>
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
