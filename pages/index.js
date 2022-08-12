import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import NavbarComponent from "../components/NavbarComponent";

// Images
import ple from "../images/Premier_League_of_Eswatini.png";
import mbabane_highlanders from "../images/mbabane_highlanders.png";
import mbabane_swallows from "../images/mbabane_swallows.png";
import royal_leopards from "../images/royal_leopards.png";
import young_buffaloes from "../images/young_buffaloes.png";

const HomePage = () => {
  return (
    <div className="home">
      <NavbarComponent />
      <div className="flex text-white items-center justify-center mt-4">
        <p className="text-2xl pr-3">Eswatini Soccer</p>
        <Image
          src={ple}
          alt="Premier_League_of_Eswatini"
          height="70"
          width={70}
        />
        <p className="text-2xl pl-3">Premier League</p>
      </div>

      <h5 className="text-xl text-red-600 font-bold text-center pt-4">
        4 September 2022 - Somhlolo Stadium
      </h5>
      {fixtures.map((fixture, index) => (
        <Link href="/book">
          <div
            className="bg-white/50 backdrop-blur hover:bg-green-800 flex items-center justify-center my-2 p-1 cursor-pointer"
            key={index}
          >
            <h4 className="px-2">{fixture.home.name}</h4>
            <Image
              src={fixture.home.img}
              alt="Mbabane Swallows"
              height="50"
              width="50"
            />
            <h3 className="px-4">{fixture.time}</h3>
            <Image
              src={fixture.away.img}
              alt="Mbabane Swallows"
              height="50"
              width="50"
            />
            <h4 className="px-2">{fixture.home.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;

const fixtures = [
  {
    home: {
      name: "Mbabane Swallows",
      img: mbabane_swallows,
    },
    time: "14:00",
    away: {
      name: "Mbabane Highlanders",
      img: mbabane_highlanders,
    },
  },
  {
    home: {
      name: "Youth Buffaloes",
      img: young_buffaloes,
    },
    time: "16:00",
    away: {
      name: "Royal Leopards",
      img: royal_leopards,
    },
  },
];

export const getStaticProps = async () => {
  // http://localhost:3000/api/employee/employee
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};
