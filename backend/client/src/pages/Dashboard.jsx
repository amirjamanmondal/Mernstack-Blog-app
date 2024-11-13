import React from "react";

import ByteCount from "../components/ByteCount";
import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-black flex justify-start items-start gap-4">
      <Sidebar />
      <ByteCount />
      <UserList />
    </div>
  );
};

export default Dashboard;
