import Image from "next/image";
import React from "react";
import banner from "../assets/banner image.png";
import bag from "../assets/bag.png";
import { CiSearch } from "react-icons/ci";

export const Hero = () => {
  return (
    <main className="h-4/5 w-full relative">
      <div className="container mx-auto max-w-7xl p-4 bg-gradient-to-br from-slate-50 via-slate-50 to-emerald-400">
        <section className="max-h-full grid grid-cols-1 md:grid-cols-2 container items-start mx-auto max-w-7xl p-4">
          <div className="col-span-1 py-4">
            <div className="flex flex-col gap-10">
              <div className="border border-emerald-500 flex items-center mt-6 rounded-xl bg-emerald-200/25 p-1 max-w-fit tracking-normal">
                <button className="bg-emerald-500 text-lg font-semibold text-white px-10 py-2 rounded-xl">
                  I am a Freelancer
                </button>
                <button className="text-lg font-semibold text-black px-10 py-2">
                  We are Organisation
                </button>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-wider">
                  Find Your Next Cybersecurity Gig
                </h2>
                <p className="text-xl md:text-2xl tracking-wider text-slate-400">
                  Connect with top organizations and clients on our platform!
                  Find your perfect match to your expertise.
                </p>
                <div>users image</div>

                <p className="tracking-wider text-md mt-1">
                  Over <span className="text-emerald-500">12800+</span>{" "}
                  freelancers <br /> working with top organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 h-full justify-center items-center relative">
            <Image src={banner} alt="banner" className="mx-auto" />
            <div className="absolute top-32 right-20 h-fit max-w-[150px] bg-white rounded-xl shadow-xl shadow-gray-500/25 py-4 px-8 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold">300+</span> <Image src={bag} alt="users" />
              </div>
              <div className="text-center">Project Completed</div>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-4 w-[1050px] max-w-[1050px] rounded-2xl bg-white py-5 px-4 shadow-xl shadow-emerald-500/25">
        <div className="flex items-center justify-center gap-4 w-full">
          <CiSearch className="text-3xl font-extrabold text-center" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full p-4 outline-none flex-grow"
          />
          <button className="bg-emerald-500 text-white px-10 py-3 rounded-lg">
            Search
          </button>
        </div>
      </div>
    </main>
  );
};
