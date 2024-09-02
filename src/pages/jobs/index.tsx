import React, { useState, useEffect } from "react";
import JobList from "../../components/JobList";
import JobDetails from "../../components/JobDetails";
import Image from "next/image";
import logo from "../../../public/assets/logo.png"; // Adjust the path
import "../../app/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import jobs from "../../api/jobApi"; // Importing the jobs data

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (search) {
      setSearchQuery(search as string);
    }
  }, [search]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to /jobs with the search query as a query parameter
    router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`);
  };

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(((search as string) || "").toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(((search as string) || "").toLowerCase())
  );

  return (
    <div className="bg-[#eaf4fc] min-h-screen flex flex-col">
      {/* Header with search form */}
      <header className="p-4 flex-shrink-0">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image src={logo} alt="logo" width={150} height={40} />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* Search Form */}
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
            {/* Login and Sign Up Buttons */}
            <button className="text-emerald-500 text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-md">
              Login
            </button>
            <button className="bg-emerald-500 text-white text-sm md:text-lg px-4 md:px-6 py-2 font-semibold rounded-md">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1 p-4 flex flex-col overflow-hidden">
        <div className="container mx-auto mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* <p className="text-lg font-semibold">Job Results</p> */}
            <div className="flex flex-wrap gap-2 items-end justify-end ml-auto">
              <select className="border rounded-md p-2 px-4">
                <option value="">Experience</option>
                <option value="">Full Time</option>
                <option value="">Part Time</option>
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
          {/* Job List Section */}
          <div className="w-full md:w-2/5 border-b md:border-r border-gray-300 overflow-y-auto h-full">
            <div className="h-full">
              {filteredJobs.length > 0 ? (
                <JobList jobs={filteredJobs} onJobClick={setSelectedJob} />
              ) : (
                <div className="text-center text-gray-500 p-4">
                  No jobs found.
                </div>
              )}
            </div>
          </div>
          {/* Job Details Section */}
          <div className="w-full md:w-3/5 overflow-y-auto bg-gray-50 h-full">
            <div className="h-full p-4">
              {selectedJob ? (
                <JobDetails jobDetails={selectedJob} />
              ) : filteredJobs.length === 0 ? (
                <div className="text-center text-gray-500">
                  No job details available.
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  Select a job to see details
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
