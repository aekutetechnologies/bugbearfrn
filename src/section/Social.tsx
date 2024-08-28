import React from "react";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdInsertDriveFile } from "react-icons/md";
import man from "../assets/handsome-businessman-suit-glasses-cross-arms-chest-look 1.png";
import star from "../assets/star.png";
import shield from "../assets/shield.png";

const data = [
  {
    title: "Quality",
    icon: <RiVerifiedBadgeFill />,
  },
  {
    title: "Top Companies",
    icon: <FaBuilding />,
  },
  {
    title: "Instant Pay",
    icon: <MdOutlinePayment />,
  },
  {
    title: "Curated Projects",
    icon: <MdInsertDriveFile />,
  },
];

export const Social = () => {
  return (
    <main className="h-screen">
      <section className="container mx-auto px-20 pt-20 pb-14 flex flex-col gap-5  h-full justify-center items-center">
        <div className="grid grid-cols-2  w-full gap-24 h-full">
          <div className="col-span-1 flex flex-col justify-center gap-14 mt-10">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-4xl font-bold tracking-wider">
                What Bugbear Delivers
              </h1>
              <p className="text-lg font-medium text-black">
                We prioritize the quality ,speen and security.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md flex gap-1 items-center hover:bg-slate-200"
                >
                  <span className="text-xl p-2 rounded-lg bg-gray-200">
                    {item.icon}
                  </span>
                  <h1 className="text-lg font-bold tracking-wider text-center">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 relative flex justify-center items-center">
            {/* Blue box */}
            <div className="bg-sky-100/50 w-full h-[450px] items-end"></div>

            {/* Man image overflowing the blue box */}
            <div className="absolute top-0   left-2">
              <Image src={man} alt="man" className="" />
              <Image
                src={star}
                alt="star"
                className="absolute top-24 right-20 size-8"
              />
              <Image
                src={star}
                alt="star"
                className="absolute top-72 right-4"
              />
              <Image
                src={star}
                alt="star"
                className="absolute bottom-20 left-8"
              />
              <div className="absolute top-32 -left-16 flex justify-center items-center gap-2 px-5 py-3 bg-white shadow-xl shadow-slate-300/75  rounded-xl tracking-wider">
                <Image src={shield} alt="shield" className="size-8" />
                <span className="text-lg font-extrabold">100% Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
