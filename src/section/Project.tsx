import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import github from "../assets/github.png";
import Image from "next/image";
import { LuUsers2 } from "react-icons/lu";

const data = [
  {
    id: 1,
    title: "Network Security Audit",
    type: ["part-time", "product"],
    slary: "$34k-$45k",
    time: "1 hour ago",
    image: github,
    company: "GitLab",
    user: "1200-3000",
    jobs: "20 jobs",
  },
  {
    id: 2,
    title: "Compliance Auditing",
    type: ["part-time", "product"],
    slary: "$34k-$45k",
    time: "1 hour ago",
    image: github,
    company: "GitLab",
    user: "1200-3000",
    jobs: "20 jobs",
  },
  {
    id: 3,
    title: "Compliance Auditing",
    type: ["part-time", "product"],
    slary: "$34k-$45k",
    time: "1 hour ago",
    image: github,
    company: "GitLab",
    user: "1200-3000",
    jobs: "20 jobs",
  },
  {
    id: 4,
    title: "Compliance Auditing",
    type: ["part-time", "product"],
    slary: "$34k-$45k",
    time: "1 hour ago",
    image: github,
    company: "GitLab",
    user: "1200-3000",
    jobs: "20 jobs",
  },
];

export const Project = () => {
  return (
    <main className="h-[580px] flex items-center">
      <section className="container mx-auto px-20 flex flex-col justify-evenly h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">
            Cyber Hub Projects
          </h1>
          <div className="flex gap-2">
            <button className="rounded-full border-2 border-emerald-500 p-1 text-emerald-500">
              <IoIosArrowRoundBack size={40} />
            </button>
            <button className="rounded-full bg-emerald-500 p-1 text-white">
              <IoIosArrowRoundForward size={40} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 h-fit">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-slate-200 rounded-xl p-6 flex flex-col justify-between h-[330px] group hover:bg-emerald-300 transition-all duration-300"
            >
              <div className="flex flex-col justify-between gap-5">
                <h1 className="text-xl font-semibold text-black tracking-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h1>
                <div className="flex gap-2">
                  {item.type.map((type, index) => (
                    <button
                      key={index}
                      className="bg-emerald-500 text-white px-3 py-2 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bottom-0 gap-0">
                <p className="text-2xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-white">
                  {item.slary}
                </p>
                <p className="text-xs font-bold text-slate-500 text-end transition-colors duration-300 group-hover:text-slate-600">
                  {item.time}
                </p>
                <div className="flex justify-between items-center">
                  <Image
                    src={item.image}
                    alt="logo"
                    className="size-10 transition-transform duration-300 group-hover:brightness-110"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-white">
                      {item.company}
                    </p>
                    <p className="text-xs font-semibold text-slate-500 flex items-center gap-0 transition-colors duration-300 group-hover:text-slate-600">
                      <LuUsers2 size={20} />
                      {item.user}
                    </p>
                  </div>
                  <p className="text-xs text-white rounded-full bg-emerald-500 px-3 py-1 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    {item.jobs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
