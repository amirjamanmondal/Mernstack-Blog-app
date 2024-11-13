import React from "react";

const UserList = () => {
  return (
    <div className="w-full h-fit text-red-600 p-4 flex justify-start items-start border-2 border-white">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Joined</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
