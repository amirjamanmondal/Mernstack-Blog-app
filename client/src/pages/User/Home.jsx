import React from "react";
import NavBar from "../../components/staticComponent/NavBar";
import Footer from "../../components/staticComponent/Footer";

const Home = () => {
  return (
    <div className="h-full w-full flex justify-between items-center flex-col">
      <NavBar />
      <Footer />
    </div>
  );
};

export default Home;
