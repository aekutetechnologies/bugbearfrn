"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import shield from "../../../public/assets/sheld_image.png";
import whiteLogo from "../../../public/assets/white_bugbear.png";
import Link from "next/link";
import Loader from "@/src/components/Loader"; // Adjust the path to where your Loader component is located
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isCPassword, setIsCPassword] = useState(false);
  // Handle form submission
  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    setErrorMessage("");
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword);
  };
  const toggleCPasswordVisibility = () => {
    setIsCPassword(!isCPassword);
  };

  return (
    <div className="h-screen bg-[#def0ff] flex flex-col">
      <header className="p-4 flex-shrink-0">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={150}
                height={40}
              />
            </Link>
          </div>
        </nav>
      </header>
      <div className="w-full rounded-xl flex container mx-auto my-2 flex-1">
        <div className="w-[600px] h-full bg-gray-800 flex flex-col justify-center items-center gap-8">
          <Image src={whiteLogo} alt="logo" className="w-80" />
          <Image src={shield} alt="shield" className="w-80" />
          <div>
            <p className="font-bold text-xl tracking-tighter text-white">
              FORTIFYING DIGITAL DEFENSES FEARLESSLY
            </p>
          </div>
        </div>
        <div className="w-[1000px] h-full bg-white border px-32 border-gray-200 flex justify-center items-center">
          <div className="w-full h-full flex flex-col">
            {/* If loading is true, show the loader */}
            {loading ? (
              <div className="flex flex-1 justify-center items-center">
                <Loader /> {/* Show the loader */}
              </div>
            ) : (
              <>
                <div className="flex flex-col flex-[2] justify-start px-10 py-16 gap-6">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-black text-3xl">Set up your account</h1>
                    <p className="text-xs">
                      Fortifying your digital defenses, one login at a time.
                      Sign in to continue.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                      value={formData.username}
                      onChange={handleChnage}
                    />
                    <div className="relative">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                        value={formData.phone}
                        onChange={handleChnage}
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-emerald-500 text-sm">
                        verify
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChnage}
                        className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                        required
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-emerald-500 text-sm">
                        verify
                      </div>
                    </div>

                    {/* password */}
                    <div className="relative">
                      <input
                        name="password"
                        type={isPassword ? "text" : "password"}
                        placeholder="Password"
                        className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                        value={formData.password}
                        onChange={handleChnage}
                        required
                      />
                      <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {isPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    </div>

                    {/* confirm password */}
                    <div className="relative">
                      <input
                        name="cpassword"
                        type={isCPassword ? "text" : "password"}
                        placeholder="Password"
                        className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                        value={formData.cpassword}
                        onChange={handleChnage}
                        required
                      />
                      <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={toggleCPasswordVisibility}
                      >
                        {isCPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                    </div>
                    {errorMessage && (
                      <p className="text-red-500 text-xs">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      className="bg-emerald-500 px-4 py-3 w-[150px] rounded-xl"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
                <div className="flex-1 flex flex-col justify-end items-start gap-3 px-10 py-3">
                  <hr className="bg-black/50 w-full h-[2px] mb-2" />
                  <span className="text-xs tracking-wide">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-emerald-500">
                      Sign in
                    </Link>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
