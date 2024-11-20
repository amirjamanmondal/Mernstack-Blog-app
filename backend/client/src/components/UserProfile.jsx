import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./header/Navbar";
import FetchContentData from "./FetchContentData";

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
        <div className="w-full h-fit flex justify-center gap-3">
          <div className="w-fit h-fit flex justify-start items-start gap-2 flex-col p-2">
            <span className="w-fit rounded-md ">{user.email}</span>
            <span className="w-fit rounded-md ">{user.name}</span>
            <span className="w-fit rounded-md">{user.gender}</span>
          </div>
          <div className="w-fit h-fit flex flex-col justify-start items-start gap-2 p-2">
            <span className="w-fit text-sm ">
              Joined : {formattedDateCreate}
            </span>
          </div>
        </div>
        <FetchContentData
          content_url={`http://localhost:8000/user/user/blog/${user._id}`}
          userId={user._id}
        />
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
