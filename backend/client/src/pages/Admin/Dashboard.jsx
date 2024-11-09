import React, { useState } from "react";
import User from "../../components/cards/User";
import Blog from "../../components/cards/Blog";

const Dashboard = () => {
  const [optionChoose, setOption] = useState("users");

  return (
    <div className="w-full h-screen flex justify-center items-center gap-1">
      <div className="w-1/4 bg-blue-400 h-screen">
        <ul className="w-full flex justify-center flex-col gap-2">
          <li
            className="w-full bg-white flex justify-center items-center cursor-pointer"
            onClick={() => setOption("users")}
          >
            Users
          </li>
          <li
            className="w-full bg-white flex justify-center items-center cursor-pointer"
            onClick={() => setOption("post")}
          >
            Posts
          </li>
          <li
            className="w-full bg-white flex justify-center items-center cursor-pointer"
            onClick={() => setOption("settings")}
          >
            Settings
          </li>
        </ul>
      </div>
      <div className="w-full bg-blue-400 h-screen">
        {optionChoose === "users" ? (
          <div className="w-full h-fit flex flex-col gap-2 p-2">
            <User />
            <User />
            <User />
            <User />
          </div>
        ) : optionChoose === "post" ? (
          <div className="w-full p-3 flex flex-row gap-3 flex-wrap">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
          </div>
        ) : optionChoose === "settings" ? (
          <div className="w-full p-3">This is settings</div>
        ) : (
          <div className="w-full p-3">Page is not found</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
