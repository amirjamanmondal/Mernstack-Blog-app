import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8000/user/logout", {
        withCredentials: true,
      });
      const data = res.data;
      setMessage(data.message);
      console.log(data.message); // Log directly to avoid async issue
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert(error.response?.data?.message || "An error occurred during logout.");
    }
  };

  return (
    <button
      className="w-fit h-fit p-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
