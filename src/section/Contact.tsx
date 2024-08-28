import React from "react";
import Image from "next/image";
import girl from "../assets/girl with laptop.png";
import wave from "../assets/wave lines.png";
import star from "../assets/star.png";

export const Contact = () => {
  return (
    <div className="h-[750px] flex items-center justify-center">
  <div className="bg-emerald-500/80 container mx-auto h-3/5 py-14 rounded-3xl grid grid-cols-2 gap-4 relative">
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

    <div className="col-span-1 relative h-full w-full">
      <Image
        src={wave}
        alt="wave"
        className="absolute top-1/2 left-0 transform -translate-y-1/2  z-10"
      />
      <Image
        src={girl}
        alt="girl"
        className="absolute bottom-0 right-0 h-auto object-contain max-w-full z-20"
      />
      <Image
        src={star}
        alt="star"
        className="absolute top-1/5 right-28 w-12 h-12 object-contain z-10"
      />
      <Image
        src={star}
        alt="star"
        className="absolute top-1/3 right-10 w-10 h-10 object-contain z-10"
      />
      <Image
        src={star}
        alt="star"
        className="absolute top-2/3 left-20 w-8 h-8 object-contain z-10"
      />
    </div>
  </div>
</div>

  );
};
