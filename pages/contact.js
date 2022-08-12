import React from "react";
import NavbarComponent from "../components/NavbarComponent";

const contact = () => {
  return (
    <div className="home">
      <NavbarComponent />
      <div className="flex items-center justify-center pt-12">
        <div className="bg-white p-5 text-center w-2/5 rounded-sm">
          <p className="text-2xl pb-4">Contact Us</p>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-[100%] outline rounded-md"
            placeholder="please enter your message here"
          ></textarea>
          <button className="mt-3 bg-green-800 p-2 rounded-md text-white hover:bg-green-500">
            Send Message Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
