import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const Login_URL = "http://localhost:8000/user/";

  useEffect(() => {
    const handlFetchData = async () => {
      try {
        const res = await axios.get(Login_URL, { withCredentials: true });
        const data = res.data;
        console.log(data.user.email);
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
      // Example usage:
    };
    handlFetchData();
  }, []);
  return (
    <div className="w-fit h-fit p4 flex justify-start items-start gap-3 flex-col">
      
      <li className="w-fit bg-blue-500 p-2 rounded-md list-none">{user.email}</li>
      {user.name}
    </div>
  );
};

export default UserProfile;
