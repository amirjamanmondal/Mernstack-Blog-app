import React from "react";
import Home from "./pages/User/Home";
import NavBar from "./components/staticComponent/NavBar";
import Footer from "./components/staticComponent/Footer";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/User/Blogs";
import Dashboard from "./pages/Admin/Dashboard";
import LandingPage from "./pages/Admin/LandingPage.admin";
import PostContent from "./pages/Admin/PostContent";

function App() {
  return (
    <div>
      <NavBar />
      <hr className="w-full text-base h-[1px] bg-red-700" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/admin/post" element={<PostContent />} />
        <Route path="/admin/landing" element={<LandingPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
