import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    const formattedDateUpdate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(update);
    return (
      <div className="w-full h-fit p-8 flex justify-center items-start bg-slate-400 gap-4">
        <div className="w-fit h-fit flex justify-start items-start gap-5 flex-col">
          <span className="w-fit bg-blue-500 p-2 rounded-md ">
            {user.email}
          </span>
          <span className="w-fit bg-blue-500 p-2 rounded-md ">{user.name}</span>
          <span className="w-fit bg-blue-500 p-2 rounded-md">
            {user.gender}
          </span>
        </div>
        <div className="w-fit h-fit flex flex-col justify-start items-start gap-5">
          <span className="w-fit text-sm border border-blue-500 p-2 rounded-md">
            Created: {formattedDateCreate}
          </span>
          <span className="w-fit text-sm border border-blue-500 p-2 rounded-md">
            Update: {formattedDateUpdate}
          </span>
          <button>
            <a href="/blog">content</a>
          </button>
        </div>
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
