import React from "react";
import NavbarComponent from "../components/NavbarComponent";

const about = () => {
  return (
    <div className="home">
      <NavbarComponent />
      <div className="flex items-center justify-center pt-12">
        <div className="bg-white p-5 text-center w-2/5 rounded-sm">
          <p className="text-2xl pb-4">About Us</p>
          <p>
            We provide supporters a way to book stadium seat to their favorite
            soccer games in Eswatini
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
