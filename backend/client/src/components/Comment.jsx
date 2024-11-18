import axios from "axios";
import React, { useEffect, useState } from "react";

const Comment = ({ comments }) => {
  console.log(comments);

  return <div className="w-fit h-fit px-4 rounded-md bg-blue-500">{comments.length}</div>;
};

export default Comment;
