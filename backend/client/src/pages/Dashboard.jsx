import React from "react";

import ByteCount from "../components/ByteCount";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-black flex justify-start items-start gap-4">
      <Sidebar />
      <ByteCount />
    </div>
  );
};

export default Dashboard;
