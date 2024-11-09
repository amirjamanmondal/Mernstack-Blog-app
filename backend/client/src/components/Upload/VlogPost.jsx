import React from "react";

const VlogPost = () => {
  return (
    <form className="w-full min-h-screen h-fit p-6 flex flex-col gap-2 border border-black justify-start items-center">
      <div className="w-1/2 h-fit p-4 flex flex-col gap-4 border-2 rounded-md">
        <input
          type="text"
          name=""
          id=""
          placeholder="Title..."
          className="w-full h-fit p-2 outline-none"
        />
        <input
          type="file"
          name=""
          id=""
          className="w-full bg-transparent border-none"
        />
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Enter content..."
          className="w-full p-2 outline-none"
        ></textarea>
        <input
          type="text"
          name=""
          id=""
          placeholder="Tags..."
          className="w-full p-2 outline-none"
        />
        <button
          type="submit"
          className="text-lg w-fit px-2 py-1 bg-fuchsia-600 rounded-lg "
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default VlogPost;
