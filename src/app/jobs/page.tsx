"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js 13+ router
import axios from "axios";

import github from "@/public/assets/github.png";
import instagram from "@/public/assets/instagram.webp";
import { getJobs, fetchJobDetails } from '../../api/jobApi';

import {
  SlCalender,
  SlGraduation,
  SlWallet,
  SlLocationPin,
  SlBriefcase,
  SlTag,
} from "react-icons/sl"; // Importing icons

interface Job {
  id: string;
  title: string;
  company: string;
  salary_max: string;
  salary_min: string;
  job_type: string;
  job_created: string; // Updated field
  image: string;

  job_posted: string;
  location: string;
  education?: string;
  experience: string;
  org_email: string;
  org_name: string;
}

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [jobDetails, setJobDetails] = useState<any>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, []);

  const getJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://bugbearback.onrender.com/api/jobs/search/",
        {
          title: searchQuery,
        }
      );
      console.log(res.data.results);
      setJobs(res.data.results);
    } catch (err) {
      console.error("Error during API request:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getJobs();
    }
  }, [searchQuery]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      getJobs();
    }
  };

  const fetchJobDetails = async (id: string) => {
    try {
      const res = await axios.get(
        `https://bugbearback.onrender.com/api/jobs/${id}/`
      );
      console.log(res.data);
      setJobDetails(res.data);
      setSelectedJob(id);
    } catch (err) {
      console.error("Error during API request:", err);
    }
  };

  return (
    <div className="bg-[#eaf4fc] min-h-screen flex flex-col">
      <header className="p-4 flex-shrink-0">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={150}
                height={40}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs..."
                className="border rounded-md p-2 px-4"
              />
              <button
                type="submit"
                className="ml-2 bg-emerald-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </form>
            <Link href="/signin" className="text-emerald-500 text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-md">
              Login
            </Link>
            <Link href="/signup" className="bg-emerald-500 text-white text-sm md:text-lg px-4 md:px-6 py-2 font-semibold rounded-md">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-4 flex flex-col overflow-hidden">
        <div className="container mx-auto mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 items-end justify-end ml-auto">
              <select className="border rounded-md p-2 px-4">
                <option value="">Experiences</option>
                <option value="freshers">Freshers</option>
                <option value="1-2">1-2 years</option>
                <option value="2-4">2-4 year</option>
                <option value="4-6">4-6 year</option>
                <option value="6-8">6-8 year</option>
                <option value="8-10">8-10 year</option>
                <option value="10-15">10-15 year</option>
                <option value="15+">15+ years</option>
              </select>
              <select className="border rounded-md p-2 px-4">
                <option value="">Salary</option>
                <option value="">$50k - $70k</option>
                <option value="">$70k - $90k</option>
              </select>
              <select className="border rounded-md p-2 px-4">
                <option value="">Latest</option>
                <option value="">Past Week</option>
                <option value="">Past Month</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-2xl border border-gray-300 shadow-md overflow-hidden h-[78vh]">
          {/* job list section */}
          <div className="w-full md:w-2/5 border-b md:border-r border-gray-300 overflow-y-auto h-full">
            <div className="h-full p-5">
              {loading ? (
                <ul className="list-none space-y-4">
                  {[...Array(5)].map((_, index) => (
                    <li
                      key={index}
                      className="relative flex w-full animate-pulse gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-md"
                    >
                      <div className="h-16 w-16 rounded-full bg-slate-400"></div>
                      <div className="flex-1 ml-4">
                        <div className="mb-2 h-6 w-3/4 rounded-lg bg-slate-400 text-lg"></div>
                        <div className="h-4 w-5/6 rounded-lg bg-slate-400 text-sm"></div>
                      </div>
                      <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full bg-slate-400"></div>
                    </li>
                  ))}
                </ul>
              ) : jobs.length > 0 ? (
                <ul className="list-none space-y-4 py-3 px-5">
                  {jobs.map((job) => (
                    <li
                      key={job.id}
                      className="border border-gray-200 rounded-xl  transition-transform duration-150 hover:scale-105 hover:border-emerald-300"
                    >
                      <button
                        className="flex flex-col w-full  p-6 gap-1"
                        onClick={() => fetchJobDetails(job.id)}
                        aria-label={`View details for ${job.title}`}
                      >
                        <div className="flex gap-6 items-center">
                          <Image
                            src={github}
                            alt={`${job.company} logo`}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                          <div className="flex flex-col items-start">
                            <h1 className="text-lg font-semibold text-gray-800">
                              {job.title}
                            </h1>
                            <p className="text-sm font-semibold text-gray-400">
                              {/* {job.company} */}
                              company name
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-md font-semibold text-gray-600">
                            {job.salary_min && job.salary_max
                              ? `${(Number(job.salary_min) / 1000).toFixed(
                                  0
                                )}k - ${(Number(job.salary_max) / 1000).toFixed(
                                  0
                                )}k`
                              : ""}
                          </p>
                        </div>
                        <div className="mt-3 flex  items-center w-full">
                          <div className="flex gap-2 flex-wrap justify-between w-full">
                            <p className="bg-emerald-200 px-3 py-0.5 text-sm rounded-full text-gray-600">
                              {job.job_type}
                            </p>
                            <p className="flex items-center gap-1 text-sm text-gray-500">
                              <SlCalender className="text-gray-400" />
                              {/* {getTimeAgo(job.job_created)} */}
                              {job.job_created}
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-600">No jobs found.</p>
              )}
            </div>
          </div>

          {/* Job Details Section */}
          <div className="w-full md:w-3/5 p-5 flex flex-col h-full">
            {selectedJob ? (
              <div className="flex flex-col h-full">
                <div className="flex flex-row items-center justify-between mb-3">
                  <div className="flex-1 flex flex-row py-3 px-2 gap-6 items-center">
                    <Image src={github} alt="github" className="w-14 h-14" />
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-row items-center gap-5">
                        <h2 className="text-xl font-bold">
                          {jobDetails?.title}
                        </h2>
                        <span className="bg-gray-200 px-3 py-0.5 text-sm rounded-xl text-red-500 font-semibold">
                          {jobDetails?.job_type}
                        </span>
                      </div>
                      <p className="text-gray-400">{jobDetails?.company}</p>
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
                    {[
                      "Highlights",
                      "Job Description",
                      "Job Overview",
                      "Recruiter Info",
                    ].map((tab, index) => (
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
                      {jobDetails?.job_description || "Job description here..."}
                    </p>
                  </section>

                  {/* Responsibilities */}
                  <section>
                    <h2 className="text-lg font-bold">Responsibilities</h2>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                      {Array(8)
                        .fill(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        )
                        .map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                  </section>

                  {/* Job Overview */}
                  <section className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-xl font-semibold mb-3">Job Overview</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {/* Job Posted */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlCalender className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Job Posted</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {jobDetails.job_posted || "N/A"}
                        </p>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlGraduation className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Education</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {jobDetails.education || "N/A"}
                        </p>
                      </div>
                      {/* Salary */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlWallet className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Salary</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {`${(jobDetails.salary_min / 1000).toFixed(0)}k - ${(
                            jobDetails.salary_max / 1000
                          ).toFixed(0)}k`}
                        </p>
                      </div>
                      {/* Location */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlLocationPin className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Location</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {jobDetails.location || "N/A"}
                        </p>
                      </div>
                      {/* Job Type */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlBriefcase className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Job Type</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {jobDetails.job_type || "N/A"}
                        </p>
                      </div>
                      {/* Experience */}
                      <div className="flex flex-col items-center justify-center p-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm w- h-24">
                        <SlTag className="text-lg text-emerald-600" />
                        <p className="text-xs text-gray-600 mt-1">Experience</p>
                        <p className="text-xs font-semibold text-gray-800 mt-1">
                          {jobDetails.experience || "N/A"}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Recruiter Info */}
                  <section className="border border-gray-300 p-4 rounded-xl">
                    <div className="flex flex-row gap-4 items-center mb-4">
                      <Image
                        src={instagram}
                        alt="instagram"
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Recruiter Info</h2>
                        <p className="text-sm text-gray-500">Recruiter Name</p>
                        <p className="text-sm text-gray-500">
                          Recruiter Position
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 px-6">
                      {[
                        {
                          label: "Founded in",
                          value: jobDetails.organisation.org_name,
                        },
                        { label: "Founded in", value: "March 21, 2017" },
                        {
                          label: "Organization Type",
                          value: "Private company",
                        },
                        { label: "Company Size", value: "100-500 Employees" },
                        { label: "Phone", value: "+91 9876543210" },
                        {
                          label: "Email",
                          value: (
                            <a
                              href="mailto:example@gmail.com"
                              className="text-blue-500 hover:underline"
                            >
                              {jobDetails.organisation.org_email},
                            </a>
                          ),
                        },
                        {
                          label: "Website",
                          value: (
                            <a
                              href="https://www.google.com"
                              className="text-blue-500 hover:underline"
                            >
                              www.google.com
                            </a>
                          ),
                        },
                      ].map((info, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-sm text-gray-600"
                        >
                          <span>{info.label}</span>
                          <span>{info.value}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600">
                Select a job to see details.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
