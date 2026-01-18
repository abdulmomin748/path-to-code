"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = (e) => {
    const hardcodedEmail = "admin@pathtocode.com";
    const hardcodedPassword = "123456";
    console.log(email, password);

    e.preventDefault();
    if (email === hardcodedEmail && password === hardcodedPassword) {
      Cookies.set("authToken", "mock-token", { expires: 1 });
      router.push("/courses");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="flex justify-center py-20">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleLogin}
      >
        <label className="label">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Password"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
