import React from "react";
import Image from "next/image";
import girl from "../assets/girl with laptop.png";
import wave from "../assets/wave lines.png";
import star from "../assets/star.png";

export const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-emerald-500/80 container mx-auto  h-3/5  rounded-3xl grid grid-cols-2 gap-4 relative">
        <div className="col-span-1 flex flex-col gap-16 items-start px-20 py-14">
          <div>
            <h1 className="text-4xl font-bold text-slate-100/80 tracking-wider">
              Explore Freelancing Opportunities
            </h1>
            <p className="text-slate-100/60 text-lg font-semibold tracking-wider">
              Ready to start? Discover projects that match your skills.
            </p>
          </div>
          <button className="bg-slate-100/80 text-slate-800 px-10 py-3 rounded-lg font-semibold tracking-wider">
            Get Started
          </button>
        </div>

        <div className="col-span-1 relative h-full w-full ">
          <Image
            src={wave}
            alt="wave"
            className="h-auto object-contain absolute top-1/2 left-0  z-10"
          />
          <Image
            src={girl}
            alt="girl"
            className="h-auto object-contain absolute bottom-0 right-0 z-20"
          />
          <Image
            src={star}
            alt="star"
            className="h-auto object-contain absolute top-80 left-10 text-white z-10"
          />
          <Image
            src={star}
            alt="star"
            className="h-auto object-contain absolute top-20 right-32 text-white z-10"
          />
          <Image
            src={star}
            alt="star"
            className="h-auto object-contain absolute top-40 right-10 text-white z-10"
          />
        </div>
      </div>
    </div>
  );
};
