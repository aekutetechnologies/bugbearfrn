import React from "react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

interface Job {
  title: string;
  company: string;
  salary: string;
  type: string[];
  posted: string;
  image: any; // Added image field
}

interface JobListProps {
  jobs: Job[];
  onJobClick: (jobTitle: string) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, onJobClick }) => {
  return (
    <div className="p-5">
      <ul className="list-none space-y-4">
        {jobs.map((job) => (
          <li
            key={job.title}
            className="border border-gray-200 rounded-xl p-4 transition-transform duration-150 hover:scale-105 hover:border-emerald-300"
          >
            <button
              className="flex flex-col w-full"
              onClick={() => onJobClick(job.title)}
              aria-label={`View details for ${job.title}`}
            >
              <div className="flex gap-6 items-center">
                <Image
                  src={job.image}
                  alt={`${job.company} logo`}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h1>
                  <p className="text-sm font-semibold text-gray-400">{job.company}</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-md font-semibold text-gray-600">
                  {job.salary}
                </p>
              </div>
              <div className="mt-3 flex justify-between items-center w-full">
                <div className="flex gap-2 flex-wrap">
                  {job.type.map((type, index) => (
                    <p
                      key={index}
                      className={`bg-gray-200 px-3 py-0.5 text-sm font-semibold rounded-xl ${
                        index % 2 === 0 ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {type}
                    </p>
                  ))}
                </div>

                <div className="flex gap-2 items-center">
                  <SlCalender />
                  <p className="text-gray-400 ">{job.posted}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
