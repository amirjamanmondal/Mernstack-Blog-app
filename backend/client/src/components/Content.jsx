import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

const Content = () => {
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

  const renderContent = () => {
    if (!contents) {
      return <div>No data Found</div>;
    }
    return (
      <div className="w-1/2 h-fit flex flex-col justify-around items-start gap-3 p-3">
        {contents.map((item, index) => {
          const update = new Date(item.updatedAt);
          const formattedDateUpdate = new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(update);
          return (
            <div
              key={index}
              id={item._id}
              className="w-full h-fit p-4 bg-red-300 rounded-md"
            >
              <h1 className="text text-blue-800 hover:underline cursor-pointer">{item.title || "hello"}</h1>
              <p className="text-sm font-thin text-red-600">{formattedDateUpdate}</p>
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
