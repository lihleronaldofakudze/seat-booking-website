import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <header className="bg-green-800 text-white flex justify-between items-center p-5">
      <Link href="/">
        <h3 className="cursor-pointer">EFA Stadium Seat Reservation System</h3>
      </Link>
      <nav>
        {links.map((link, index) => (
          <Link href={link.link} key={index}>
            <span className="pl-5 cursor-pointer hover:text-green-100">
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Logout", link: "/login" },
];

export default NavbarComponent;
