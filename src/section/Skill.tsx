import React from "react";
import { GiRoundStar } from "react-icons/gi";

const data = [
  {
    id: 1,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 2,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 3,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 4,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 5,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 6,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 7,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 8,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
  {
    id: 9,
    name: "Web Development",
    rating: 4.85 / 5,
    project: "10 projects",
  },
];

export const Skill = () => {
  return (
    <main className="  h-fit w-full bg-slate-100">
      <section className=" container mx-auto  p-20 flex flex-col gap-10">
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-bold tracking-wider">
            Browse by Skills
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 rounded-lg shadow-md flex flex-col gap-5"
            >
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <GiRoundStar className="text-emerald-500 text-2xl" />
                <p className="text-lg font-medium text-gray-400">{item.rating}</p>
                </div>
                <p className="text-lg font-medium text-gray-400">{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
