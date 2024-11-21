import axios from "axios";
import React, { useEffect, useState } from "react";

const Comment = ({ comments }) => {
  return (
    <div className="w-fit h-fit py-1 px-2 rounded-md bg-blue-500 text-center">
      Comment <br />
      {comments.length}
    </div>
  );
};

export default Comment;
