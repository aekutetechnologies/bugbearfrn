import React from "react";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import user1 from '../assets/Ellipse 18.png'
import user2 from '../assets/Ellipse 18-1.png'
import user3 from '../assets/Ellipse 18-2.png'

const data = [
  {
    image:user1,
    description : "Bugbear connected me with top-tier projects, boosting my career.",
    name : "John Doe",
    position : "Cyber Security Expert"
  },
  {
    image:user2,
    description : "Bugbear connected me with top-tier projects, boosting my career.",
    name : "John Doe",
    position : "Cyber Security Expert"
  },
  {
    image:user3,
    description : "Bugbear connected me with top-tier projects, boosting my career.",
    name : "John Doe",
    position : "Cyber Security Expert"
  }
]

export const Testimonial = () => {
  return (
    <div className="h-screen">
      <section className="container mx-auto px-20 py-14 flex justify-center flex-col gap-16">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-5 tracking-wide">
            <h1 className="text-4xl font-black tracking-wide">
              Top Freelancers Share Their Success
            </h1>
            <p className="text-gray-500">Hear from freelancers who have excelled on Bugbear.</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border-2 border-emerald-500 p-1 text-emerald-500">
              <IoIosArrowRoundBack size={40} />
            </button>
            <button className="rounded-full bg-emerald-500 p-1 text-white">
              <IoIosArrowRoundForward size={40} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data.map((item) => (
            <div key={item.name} className="bg-white p-10 rounded-lg shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300 flex flex-col gap-5">
                <Image src={item.image} alt={item.name} className="mx-auto"/>
                <p className="text-gray-500 text-center">{item.description}</p>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p className="text-gray-500 text-sm">{item.position}</p>
                </div>
            </div>
          ))}
        </div>  
      </section>
    </div>
  );
};
