import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import "../app/globals.css";

export const Header = () => {
  return (
    <header className="p-6 ">
      <nav className="container mx-14  px-20 flex items-center justify-between ">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={200}  />
        </div>
        <div className="flex items-center justify-center gap-2 mt-1 ">
          <button className=" text-emerald-500 text-lg font-semibold px-10 py-3 rounded-md">Login</button>
          <button className="bg-emerald-500 text-white px-10 py-3 text-lg font-semibold rounded-md">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};
