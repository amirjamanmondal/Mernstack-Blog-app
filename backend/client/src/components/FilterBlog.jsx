import React from "react";
import UploadButtons from "./UploadButtons";

const FilterBlog = () => {
  return (
    <div className="w-full h-fit p-2 flex justify-between items-center">
      <select
        name="category"
        id=""
        className="w-fit h-fit bg-green-500 p-2 rounded-md"
      >
        <option value={"all"} defaultValue={"none"}>
          Select a filter
        </option>
        <option value="technology">Technology</option>
        <option value="politics">Politics</option>
        <option value="crime">Crime</option>
      </select>
      <UploadButtons />
    </div>
  );
};

export default FilterBlog;
