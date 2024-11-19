import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Container from "./components/Container";
import LoginUser from "./pages/LoginUser";
import SignupUser from "./pages/SignupUser";
import Dashboard from "./pages/Dashboard";
import ViewCotent from "./components/ViewCotent";
import UserProfile from "./components/UserProfile";
import Home from "./pages/Home";
import UploadContent from "./components/UploadContent";

function App() {
  return (
    <div className="w-full h-fit flex justify-between flex-col items-center gap-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Container Children={<Dashboard />} />}
        />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/blog" element={<ViewCotent />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/upload" element={<UploadContent />} />
      </Routes>
    </div>
  );
}

export default App;
