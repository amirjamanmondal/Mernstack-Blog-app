import React, { useState } from "react";

const SignupUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpHandler = (e) => {
    e.preventDefault();
    console.log("name is : ", name);
    console.log("email is : ", email);
    console.log("password is : ", password);

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form className="w-[30rem] h-[30rem] bg-yellow-300 p-6 text-xl flex justify-start items-center flex-col gap-8 rounded-md ">
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
        type="password"
        name="password"
        id="password"
        placeholder="Enter a Password"
        className="w-2/3 border rounded-full py-2 px-3"
      />
      <p>
        already a user?{" "}
        <a href="/login" className="text-white hover:text-blue-700">
          Login
        </a>
      </p>
      <button
        onClick={(e) => {
          SignUpHandler(e);
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
