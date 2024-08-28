import React from "react";
import Image from "next/image";

import image1 from "../assets/Company logo.png";
import image2 from "../assets/Company logo-1.png";
import image3 from "../assets/Company logo-2.png";
import image4 from "../assets/Company logo-3.png";
import image5 from "../assets/Company logo-4.png";
import image6 from "../assets/Company logo-5.png";

const image = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
];
export const Organization = () => {
  return (
    <div className=" h-[350px] flex justify-center items-center">
      <section className="flex flex-col justify-center items-center gap-12">
        <h1 className="text-2xl font-bold tracking-wide">
          Trusted by 2000+ Organization
        </h1>
        <div className="flex justify-center items-center space-x-20 px-2">
          {image.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.id.toString()}
              className="size-fit object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
