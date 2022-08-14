import React, { useState } from "react";

// react router dom
import { useRouter } from "next/router";
import axios from "axios";

const RegisterPage = () => {
  // variables
  const router = useRouter();

  // state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    if (
      username.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0
    ) {
      if (password === confirmPassword) {
        await axios
          .post("http://localhost:3000/api/user/user", {
            username,
            email,
            password,
          })
          .then((result) => {
            if (result.data.result) {
              router.push("/");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        window.alert("Passwords do not match");
      }
    } else {
      window.alert("Please enter all required details");
    }
  };
  return (
    <section className="auth flex justify-center items-center">
      <div className="bg-white flex flex-col items-center shadow-md rounded-lg p-5">
        <h3 className="text-2xl">EFA Stadium Seat Reservation System</h3>
        <h5 className="font-bold">Create your account</h5>
        <h6 className="text-xs text-gray-300">
          Please enter all required details
        </h6>
        <form className="flex flex-col w-full">
          <input
            type="text"
            placeholder="enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 my-2 p-2 w-full rounded"
          />
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 my-2 p-2 w-full rounded"
          />
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 my-2 p-2 w-full rounded"
          />
          <input
            type="password"
            placeholder="confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 my-2 p-2 w-full rounded"
          />
          <input
            type="button"
            value="Register"
            onClick={register}
            className="bg-green-800 my-3 p-2 text-white w-full rounded cursor-pointer"
          />
        </form>
        <a
          onClick={() => router.push("/login")}
          style={{ color: "red" }}
          className="cursor-pointer hover:underline"
        >
          I already have an account
        </a>
      </div>
    </section>
  );
};

export default RegisterPage;
