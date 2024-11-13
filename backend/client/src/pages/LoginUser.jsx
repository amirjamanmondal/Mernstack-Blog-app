import React, { useState } from "react";
import axios from "axios";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
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
    apiClient
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful login
        const token = response.data?.token;
        setUser(response.data.user);
        localStorage.setItem("token", token);
        console.log(response.data);
        console.log(response.data?.token);

        // redirect('/')
      })
      .catch((error) => {
        // Handle errors
        console.error(error.message);
      });

    console.log("email is : ", email);
    console.log("password is : ", password);

    setEmail("");
    setPassword("");
  };
  return (
    <form className="w-[30rem] h-[30rem] bg-yellow-300 p-6 text-xl flex justify-start items-center flex-col gap-8 rounded-md">
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
      <p>
        Don't have an account?
        <a href="/signup" className="text-white hover:text-blue-700">
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
        Signup
      </button>
    </form>
  );
};

export default LoginUser;
