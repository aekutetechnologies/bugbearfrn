"use client";

import React, { useState } from "react";
import Image from "next/image";
import shield from "@/assets/sheld_image.png";
import whiteLogo from "@/assets/white_bugbear.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import freelancer from "@/assets/freelancer.png";
import organization from "@/assets/organization.png";

const LoginPage = () => {
  const [isContinue, setIsContinue] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    user_type: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isCPassword, setIsCPassword] = useState(false);
  const router = useRouter(); 

  const handleContinue = () => {
    setIsContinue(true);
  };

  const handleBack = () => {
    setIsContinue(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectUserType = (userType: string) => {
    setFormData((prevData) => ({ ...prevData, user_type: userType }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(formData);
    // Here you can add form validation and make an API call to submit the form
    router.push("/")
  };

  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword);
  };

  const toggleCPasswordVisibility = () => {
    setIsCPassword(!isCPassword);
  };

  return (
    <div className="h-screen bg-[#def0ff] flex flex-col">
      <div className="w-full rounded-xl flex container mx-auto flex-1">
        <div className="w-[600px] h-full bg-gray-800 flex flex-col justify-center items-center gap-8">
          <Image src={whiteLogo} alt="logo" className="w-80" />
          <Image src={shield} alt="shield" className="w-80" />
          <p className="font-bold text-xl tracking-tighter text-white">
            FORTIFYING DIGITAL DEFENSES FEARLESSLY
          </p>
        </div>

        <div className="relative w-[1000px] h-full bg-white border border-gray-200 flex justify-center items-center overflow-hidden">
          {/* Select user type section */}
          <div
            className={`absolute w-full h-full transition-all duration-500 ${
              isContinue
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            } flex justify-center items-center`}
          >
            <div className="w-full h-full flex flex-col">
              {loading ? (
                <div className="flex flex-1 justify-center items-center">
                  <Loader /> {/* Show the loader */}
                </div>
              ) : (
                <>
                  <div className="flex flex-col flex-[2] justify-start px-10 py-16 gap-6">
                    <div className="flex flex-col gap-3">
                      <h1 className="font-black text-3xl">
                        Lets Join and Fortify Digital Defenses
                      </h1>
                      <p className="text-xs">
                        Select whether you are an organization seeking
                        cybersecurity services or a freelancer ready to provide
                        expertise.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                      <div className="flex justify-evenly items-center">
                        <div
                         
                          className={`flex flex-col justify-center gap-10 cursor-pointer`}
                        >
                          <div onClick={() => handleSelectUserType("organization")} className={`rounded-full shadow-lg flex justify-center items-center p-10 hover:shadow-emerald-500 hover:scale-105 ${
                            formData.user_type === "organization"
                             ? "shadow-lg shadow-emerald-500"
                            : "shadow-lg shadow-gray-400"
                          }`}>
                            <Image
                              src={organization}
                              alt="organizations"
                              className="size-56"
                            />
                          </div>
                          <span className="text-center text-lg font-semibold">
                            Organizations
                          </span>
                        </div>

                        <div
                          
                          className={"flex flex-col justify-center gap-10 cursor-pointer"}
                        >
                          <div onClick={() => handleSelectUserType("freelancer")} className={`rounded-full shadow-lg flex justify-center items-center p-10 hover:shadow-emerald-500 hover:scale-105 ${
                            formData.user_type === "freelancer"
                             ? "shadow-lg shadow-emerald-500"
                            : "shadow-lg shadow-gray-400"
                          }`}>
                            <Image
                              src={freelancer}
                              alt="freelancer"
                              className="size-56"
                            />
                          </div>
                          <span className="text-center text-lg font-semibold">
                            Freelancer
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleContinue}
                          className="bg-emerald-500 text-black px-4 py-3 w-[150px] rounded-xl"
                        >
                          Continue
                        </button>
                      </div>
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

          {/* Sign up form Section */}
          <div
            className={`absolute w-full h-full transition-all duration-500 ${
              isContinue
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } flex justify-center items-center`}
          >
            <div className="w-full h-full flex flex-col">
              {loading ? (
                <div className="flex flex-1 justify-center items-center">
                  <Loader /> {/* Show the loader */}
                </div>
              ) : (
                <>
                  <div className="flex flex-col flex-[2] justify-start px-10 py-16 gap-6">
                    <div className="flex flex-col gap-3">
                      <h1 className="font-black text-3xl">
                        Set up your account
                      </h1>
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
                        placeholder="Username"
                        className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs"
                        value={formData.username}
                        onChange={handleChange}
                      />
                      <div className="relative">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                          className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                          value={formData.phone}
                          onChange={handleChange}
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
                          onChange={handleChange}
                          className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-emerald-500 text-sm">
                          verify
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          name="password"
                          type={isPassword ? "text" : "password"}
                          placeholder="Password"
                          className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div
                          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                          onClick={togglePasswordVisibility}
                        >
                          {isPassword ? (
                            <AiOutlineEye size={24} />
                          ) : (
                            <AiOutlineEyeInvisible size={24} />
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          name="password2"
                          type={isCPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          className="p-3 rounded-md border-black/50 border outline-none text-xs placeholder:text-black placeholder:text-xs w-full"
                          value={formData.password2}
                          onChange={handleChange}
                        />
                        <div
                          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                          onClick={toggleCPasswordVisibility}
                        >
                          {isCPassword ? (
                            <AiOutlineEye size={24} />
                          ) : (
                            <AiOutlineEyeInvisible size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="submit"
                          className="bg-emerald-500 text-black px-4 py-3 w-[150px] rounded-xl"
                        >
                          Create
                        </button>
                        <button
                          type="button"
                          onClick={handleBack}
                          className="bg-black/70 text-white px-4 py-3 w-[150px] rounded-xl"
                        >
                          Back
                        </button>
                      </div>
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
    </div>
  );
};

export default LoginPage;
