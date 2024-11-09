import React from "react";

const Hero = () => {
  return (
    <div className=" w-full flex py-4 pl-20 justify-center items-center gap-4 ">
      <div className="w-3/4 flex flex-col gap-4 ">
      <h1 className="w-full text-2xl text-blue-500">A blog for passionate people and website lover</h1>
      <p className="text-base w-3/4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex
        suscipit aliquam eos consectetur commodi laudantium esse aliquid
        voluptate corporis nostrum, quisquam natus a perspiciatis eum maiores
        ipsa mollitia ullam distinctio. Possimus?
      </p>
      <button className="w-fit h-fit text-lg bg-blue-600 p-2 rounded-lg">Read Article</button>
      </div>
    </div>
  );
};

export default Hero;
