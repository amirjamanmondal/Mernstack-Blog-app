import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./headerandFooter/Navbar";
import FetchContentData from "./FetchContentData";
import Footer from "./headerandFooter/Footer";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [Errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const Login_URL = "http://localhost:8000/user/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(Login_URL, { withCredentials: true });
        setUser(res.data?.user);
        console.log(res.data);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  const renderUser = () => {
    if (!user) {
      return <div>Loading user data...</div>;
    }
    const create = new Date(user.createdAt);
    const update = new Date(user.updatedAt);

    // Format the date and time using Intl.DateTimeFormat
    const formattedDateCreate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(create);

    return (
      <div className="w-full h-fit flex justify-center items-center bg-slate-400 gap-4 flex-col">
        <Navbar />
        <div className="w-2/3 h-60 flex justify-center text-gray-400 bg-black items-center gap-3 p-8 rounded-md">
          <div className="w-fit h-full flex justify-start items-center gap-2 flex-col p-2">
            <img
              src="http://surl.li/yxjopz"
              alt="profile"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="w-fit h-full flex justify-start items-start gap-2 flex-col p-2">
            <span className="w-fit rounded-md ">{user.email}</span>
            <span className="w-fit rounded-md ">{user.name}</span>
            <span className="w-fit rounded-md">{user.gender}</span>
          </div>
          <div className="w-fit h-full flex flex-col justify-start items-center gap-2 p-2">
            <span className="w-fit text-sm ">
              Joined : {formattedDateCreate}
            </span>
          </div>
        </div>
        <FetchContentData
          content_url={`http://localhost:8000/user/user/blog/${user._id}`}
          userId={user._id}
        />
        <Footer />
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading user profile...</div>}>
      {renderUser()}
    </Suspense>
  );
};

export default UserProfile;
