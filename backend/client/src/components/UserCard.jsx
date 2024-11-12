import React from "react";

const UserCard = () => {
  return (
    <div className="w-full h-20 flex flex-row justify-start items-center gap-5 p-4">
      <div className="w-12 h-12 bg-green-400 rounded-full border border-white"></div>
      <div className="text-lg text-red-600 ">Amir Jaman Mondal</div>
      <div className="w-fit h-fit text-white bg-blue-600 rounded-xl p-2">
        active
      </div>
    </div>
  );
};

export default UserCard;
