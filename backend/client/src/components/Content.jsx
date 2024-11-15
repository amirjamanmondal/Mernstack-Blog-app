import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";

const Content = () => {
  const [content, setContent] = useState(null);
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
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const renderContent = () => {
    if (!content) {
      return <div>Loading user data...</div>;
    }
    return (
      <div className="w-full h-fit flex flex-col justify-around items-center gap-3 border p-3">
        {content.map((item,index)=>{
          <div key={index} id={item._id}></div>
        })}

        <h1 className="w-fit p-2 text-xl font-bold text-blue-500">
          Hello new content
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          ipsam sunt magnam, saepe accusantium adipisci magni libero, similique
          ut consequuntur quisquam ullam quam, voluptatibus temporibus inventore
          necessitatibus repudiandae hic impedit consequatur. Quae perspiciatis
          neque ullam maxime, exercitationem laudantium nobis id. At laudantium,
          aperiam aliquid iure velit nulla aut rerum dolore, minus accusamus
          quidem, vitae sit hic quo ea omnis dolores?
        </p>
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
