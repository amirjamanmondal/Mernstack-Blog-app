import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const Login_URL = "http://localhost:8000/user";
  const LoginHandler = async (e) => {
    e.preventDefault();

    const apiClient = axios.create({
      baseURL: ` ${Login_URL}`,
      headers: {
        "Content-Type": "application/json",
        // Add authorization headers if needed
      },
    });

    // Example usage:
    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      setUser(res.data.user);
      toast(res.data.message);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
      localStorage.setItem("sid", res.data?.token);
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <form className="w-[30rem] h-[30rem] bg-yellow-300 p-6 text-xl flex justify-start items-center flex-col gap-8 rounded-md mt-4">
      <Toaster />
      <h1 className="text-3xl font-extrabold">Login</h1>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <input
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name="password"
        id="password"
        placeholder="Enter a Password"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <p className="w-full p-1 text-center">
        Don't have an account?
        <a href="/signup" className="text-white hover:text-blue-700 ml-1">
          Signup
        </a>
      </p>
      <button
        onClick={(e) => {
          LoginHandler(e);
        }}
        type="submit"
        name="btn"
        id=""
        className="w-2/3 border bg-white rounded-full py-2 px-3"
      >
        Login
      </button>
    </form>
  );
};

export default LoginUser;
