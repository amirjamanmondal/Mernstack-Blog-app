import React from "react";
import Home from "./pages/User/Home";
import NavBar from "./components/staticComponent/NavBar";
import Footer from "./components/staticComponent/Footer";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/User/Blogs";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div>
      <NavBar />
      <hr className="w-full text-base h-[1px] bg-red-700" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<Admin />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
