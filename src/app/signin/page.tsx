"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; // Make sure this is the correct path
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import {  toast } from "react-toastify";

import shield from "@/assets/sheld_image.png";
import whiteLogo from "@/assets/white_bugbear.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const { signin } = useAuth();
  const router = useRouter();

  const validateEmail = (email: string) => {
    // Stricter email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setEmailError(''); // Clear error if valid
    } else {
      setEmailError('Please enter a valid email address'); // Set error if invalid
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signin(email, password);
      const userType = Cookies.get("user_type"); // Get user_type from cookies
      toast.success("Login successfully")
      

      if (userType === "1") {
        router.push("/freelancer/"); // Redirect freelancer
      } else if (userType === "2") {
        router.push("/organization"); // Redirect organization
      } else {
        router.push("/"); // Redirect to home or some default page
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.")
      console.error("Login failed", error);
    }
  };

  return (
    <div className="h-screen bg-[#def0ff] flex flex-col">
      <div className="w-full rounded-xl flex flex-1 container mx-auto my-">
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
            <div className="flex flex-col flex-[2] justify-start px-10 py-16 gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="font-black text-3xl">Welcome back to Bugbear</h1>
                <p className="text-xs">
                  Fortifying your digital defenses, one login at a time. Sign in
                  to continue.
                </p>
              </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />

{emailError && <p className="text-red-500 text-xs">{emailError}</p>}

                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {/* {errorMessage && (
                        <p className="text-red-500 text-xs">{errorMessage}</p>
                      )} */}
                  <div className="flex justify-between">
                    <span className="text-xs">
                      Forgot password?{" "}
                      <Link href="#" className="text-[#01CE9A]">
                        Click here
                      </Link>
                    </span>
                    <span className="text-xs">
                      <Link href="#" className="text-[#01CE9A]">
                        Sign in via OTP
                      </Link>
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#01CE9A] px-4 py-3 w-[150px] rounded-xl"
                  >
                    Sign in
                  </button>
                </form>
            </div>
            <div className="flex-1 flex flex-col justify-end items-start gap-3 px-10 py-3">
              <hr className="bg-black/50 w-full h-[2px] mb-2" />
              <span className="text-xs tracking-wide">
                Dont have an account?{" "}
                <Link href="/signup" className="text-[#01CE9A]">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
