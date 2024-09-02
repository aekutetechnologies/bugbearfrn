import React from "react";
import Image from "next/image";
import github from "../../public/assets/github.png";
import { SlCalender } from "react-icons/sl";
import instagram from "../../public/assets/instagram.webp";

interface JobDetailsProps {
  jobDetails: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobDetails }) => {
  return (
    <div className="p-5 flex flex-col h-full">
      {/* Job Header */}
      <div className="flex flex-row items-center justify-between mb-3">
        <div className="flex-1 flex flex-row py-3 px-2 gap-6 items-center">
          <Image src={github} alt="github" className="w-14 h-14" />
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
            <h2 className="text-xl font-bold">{jobDetails}</h2>
              <span className="bg-gray-200 px-3 py-0.5 text-sm rounded-xl text-red-500 font-semibold">
                Type
              </span>
              <span className="bg-gray-200 px-3 py-0.5 text-sm rounded-xl text-emerald-500 font-semibold">
                Featured
              </span>
            </div>
            <p className="text-gray-400">Company Name</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-emerald-300 px-12 py-2.5 rounded-xl text-white font-semibold">
            Apply Now
          </button>
        </div>
      </div>

      <hr />

      {/* Navigation Tabs */}
      <nav className="my-4">
        <ul className="flex justify-between">
          {["Highlights", "Job Description", "Job Overview", "Recruiter Info"].map((tab, index) => (
            <li
              key={index}
              className={`flex-1 text-center text-md font-semibold ${
                index === 0 ? "text-emerald-500" : "text-gray-400"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      {/* Job Details Content */}
      <div className="overflow-y-auto flex-grow p-4 flex flex-col gap-8">
        {/* Job Description */}
        <section>
          <h1 className="text-lg font-bold">Job Description</h1>
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nulla debitis doloribus qui laborum quo, ut commodi molestiae exercitationem voluptatibus inventore.
          </p>
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            Fugiat eligendi ullam nihil beatae eos vitae corrupti hic dicta, odit atque porro accusamus dolorem nulla.
          </p>
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            Soluta nostrum ullam iusto pariatur. Commodi necessitatibus distinctio aliquid totam? Ut reprehenderit dolor id laudantium nemo magnam nostrum esse quia animi, ipsum dolores!
          </p>
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            Cupiditate dolores iusto non optio ipsa ipsam dignissimos adipisci, sequi animi expedita consequatur voluptas iste, a temporibus.
          </p>
        </section>

        {/* Responsibilities */}
        <section>
          <h2 className="text-lg font-bold">Responsibilities</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            {Array(8)
              .fill("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.")
              .map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
          </ul>
        </section>

        {/* Job Overview */}
        <section>
          <h2 className="text-lg font-bold">Job Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-gray-300 rounded-lg">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-3 bg-gray-200 rounded-lg">
                  <SlCalender className="text-xl text-gray-700" />
                  <p className="text-sm text-gray-500">JOB POSTED</p>
                  <p className="text-base font-medium text-gray-700">14 Aug 2024</p>
                </div>
              ))}
          </div>
        </section>

        {/* Recruiter Info */}
        <section className="border border-gray-300 p-4 rounded-xl">
          <div className="flex flex-row gap-4 items-center mb-4">
            <Image src={instagram} alt="instagram" className="w-16 h-16 rounded-full" />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Recruiter Info</h2>
              <p className="text-sm text-gray-500">Recruiter Name</p>
              <p className="text-sm text-gray-500">Recruiter Position</p>
            </div>
          </div>
          <ul className="space-y-2 px-6">
            {[
              { label: "Founded in", value: "March 21, 2017" },
              { label: "Organization Type", value: "Private company" },
              { label: "Company Size", value: "100-500 Employees" },
              { label: "Phone", value: "+91 9876543210" },
              { label: "Email", value: "example@gmail.com" },
              { label: "Website", value: <a href="https://www.google.com" className="text-blue-500 hover:underline">www.google.com</a> },
            ].map((info, index) => (
              <li key={index} className="flex justify-between text-sm text-gray-600">
                <span>{info.label}</span>
                <span>{info.value}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
