"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import shield from "../../../public/assets/sheld_image.png";
import whiteLogo from "../../../public/assets/white_bugbear.png";
import Link from "next/link";
import Loader from "@/src/components/Loader"; // Adjust the path to where your Loader component is located

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    console.log(email, password);

    setLoading(true); // Show loader
    setErrorMessage(""); // Reset error message

    try {
      const response = await axios.post(
        "https://bugbearback.onrender.com/api/user/login/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.response) {
        // Server responded with a status other than 2xx
        console.log("Server error:", error.response.data);
        setErrorMessage(
          error.response.data.message || "Login failed. Please try again."
        );
      } else if (axios.isAxiosError(error) && error.request) {
        // Request was made but no response was received
        console.log("No response received from server:", error.request);
        setErrorMessage("Server did not respond. Please try again later.");
      } else {
        // Something happened in setting up the request
        console.log(
          "Error setting up request:",
          error instanceof Error ? error.message : String(error)
        );
        setErrorMessage("An error occurred. Please try again.");
      }
    }
    setLoading(false); // Ensure loading is set to false after all error handling
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

      <div className="w-full rounded-xl flex flex-1 container mx-auto my-2">
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
                    <h1 className="font-black text-3xl">
                      Welcome back to Bugbear
                    </h1>
                    <p className="text-xs">
                      Fortifying your digital defenses, one login at a time.
                      Sign in to continue.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errorMessage && (
                      <p className="text-red-500 text-xs">{errorMessage}</p>
                    )}
                    <div className="flex justify-between">
                      <span className="text-xs">
                        Forgot password?{" "}
                        <Link href="#" className="text-emerald-500">
                          Click here
                        </Link>
                      </span>
                      <span className="text-xs">
                        <Link href="#" className="text-emerald-500">
                          Sign in via OTP
                        </Link>
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-500 px-4 py-3 w-[150px] rounded-xl"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="flex-1 flex flex-col justify-end items-start gap-3 px-10 py-3">
                  <hr className="bg-black/50 w-full h-[2px] mb-2" />
                  <span className="text-xs tracking-wide">
                    Dont have an account?{" "}
                    <Link href="/signup" className="text-emerald-500">
                      Sign up
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
