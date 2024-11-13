import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState();
  const Login_URL = "http://localhost:8000/user";

  useEffect(() => {
    const handlFetchData = async() => {
      const token = localStorage.getItem('connect.sid');
      const apiClient = axios.create({
        baseURL: `${Login_URL}`,
        headers: {
          "Content-Type": "application/json",
          // Add authorization headers if needed
        },
      });

      // Example usage:
      apiClient
        .get("/dashboard")
        .then((response) => {
          // Handle successful login
          console.log(token);
          
          console.log(response.data);
          setUser(response.data?.user);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    };
    handlFetchData();
  }, []);
  return (
    <div className="w-fit h-fit p4 flex justify-start items-start gap-3 flex-col">
      {/* <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.gender}</h3>
      <h4>{user.createdAt}</h4>
      <h5>{user.updatedAt}</h5> */}
    </div>
  );
};

export default UserProfile;
