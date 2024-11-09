import React from "react";
import NavBar from "../../components/staticComponent/NavBar";
import Footer from "../../components/staticComponent/Footer";
import Hero from "../../components/cards/Hero";
import Blogs from "../../components/blogs/Blogs";

const Home = () => {
  return (
    <div className="h-full w-full flex items-center flex-col justify-around">
      <Hero />
      <hr className="w-full text-base h-[2px] bg-red-700" />
      <Blogs />
      <hr className="w-full text-base h-[2px] bg-red-700" />
    </div>
  );
};

export default Home;
