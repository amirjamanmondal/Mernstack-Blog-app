import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);

  const [togglePassword, setTogglePassword] = useState(false);

  const navigate = useNavigate();
  const Login_URL = "http://localhost:8000/user";
  const SignupHandler = async (e) => {
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
        "http://localhost:8000/user/signup",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      setUser(res.data.user);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      setErrors(error.message);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <form className="w-[30rem] h-fit bg-yellow-300 p-6 text-xl flex justify-start items-center flex-col gap-8 rounded-md ">
      <h1 className="text-3xl font-extrabold">Signup</h1>

      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type={!togglePassword ? "password" : "text"}
        name="password"
        id="password"
        placeholder="Enter a Password"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <p className="w-2/3 flex gap-2">
        already a user?{" "}
        <a href="/login" className="text-white hover:text-blue-700">
          Login
        </a>
      </p>
      <div className="w-2/3 flex gap-2 text-sm ">
        <input
          type="checkbox"
          name=""
          id="showPassKey"
          onClick={() => setTogglePassword(!togglePassword)}
        />
        <label htmlFor="showPassKey">Show Password</label>
      </div>
      <button
        onClick={(e) => {
          SignupHandler(e);
        }}
        type="submit"
        name="name"
        id=""
        className="w-2/3 border bg-white rounded-full py-2 px-3"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupUser;
