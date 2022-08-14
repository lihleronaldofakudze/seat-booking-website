import React, { useState } from "react";

// react router dom
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  // variables
  const router = useRouter();

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (email.length !== 0 && password.length !== 0) {
      await axios.get("http://localhost:3000/api/user/user").then((data) => {
        data.data.map((d) => {
          console.log(d);
          if (d.email === email && d.password === password) {
            router.push("/");
          } else {
            alert("Wrong credentials, please try again");
          }
        });
      });
    } else {
      window.alert("Please enter all required details");
    }
  };
  return (
    <section className="auth flex justify-center items-center">
      <div className="bg-white p-5 rounded-sm shadow-xl flex flex-col text-center">
        <h3 className="text-2xl">EFA Stadium Seat Reservation System</h3>
        <h5 className="font-bold">Access your account</h5>
        <h6 className="text-xs text-gray-300">
          Please enter all required details
        </h6>
        <form className="flex flex-col">
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
          <p>
            <a
              onClick={() => navigate("/forgot")}
              style={{ color: "red" }}
              className="cursor-pointer hover:underline"
            >
              Forgot Password?
            </a>
          </p>
          <input
            type="button"
            value="Login"
            className="bg-green-800 my-3 p-2 text-white w-full rounded cursor-pointer"
            onClick={login}
          />
        </form>
        <a
          onClick={() => router.push("/register")}
          style={{ color: "red" }}
          className="cursor-pointer hover:underline"
        >
          I don't have an account
        </a>
      </div>
    </section>
  );
};

export default LoginPage;
