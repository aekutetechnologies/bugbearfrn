"use client";

import "./globals.css";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import banner from "../../public/assets/banner image.png";
import bag from "../../public/assets/bag.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import github from "../../public/assets/github.png";
import { LuUsers2 } from "react-icons/lu";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image1 from "../../public/assets/Company logo.png";
import image2 from "../../public/assets/Company logo-1.png";
import image3 from "../../public/assets/Company logo-2.png";
import image4 from "../../public/assets/Company logo-3.png";
import image5 from "../../public/assets/Company logo-4.png";
import image6 from "../../public/assets/Company logo-5.png";

import { GiRoundStar } from "react-icons/gi";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdInsertDriveFile } from "react-icons/md";
import man from "../../public/assets/handsome-businessman-suit-glasses-cross-arms-chest-look 1.png";
import star from "../../public/assets/star.png";
import shield from "../../public/assets/shield.png";

import user1 from "../../public/assets/Ellipse 18.png";
import user2 from "../../public/assets/Ellipse 18-1.png";
import user3 from "../../public/assets/Ellipse 18-2.png";

import girl from "../../public/assets/girl with laptop.png";
import wave from "../../public/assets/wave lines.png";
// import star from "../../public/assets/star.png";
import user from "../../public/assets/user_png.png";
import { IoLogOutOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import UserProfile from "./user/page";

export default function Home() {
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
  const projects = [
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
  const Skills = [
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

  const promotion = [
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

  const testimonial = [
    {
      image: user1,
      description:
        "Bugbear connected me with top-tier projects, boosting my career.",
      name: "John Doe",
      position: "Cyber Security Expert",
    },
    {
      image: user2,
      description:
        "Bugbear connected me with top-tier projects, boosting my career.",
      name: "John Doe",
      position: "Cyber Security Expert",
    },
    {
      image: user3,
      description:
        "Bugbear connected me with top-tier projects, boosting my career.",
      name: "John Doe",
      position: "Cyber Security Expert",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search initiated with query:", searchQuery); // Check if the function is triggered
    router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`);
  };

  //After sign in
  useEffect(() => {
    console.log("useEffect running");
    const toastMessage = localStorage.getItem("showToast");
    if (toastMessage) {
      console.log(toastMessage);

      toast.success(toastMessage);

      const removeToast = setTimeout(() => {
        localStorage.removeItem("showToast");
      }, 5000);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("Access");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Access");
    localStorage.removeItem("Refresh");
    setIsLoggedIn(false);
    toast.success("logged out successfully!");
  };

  const userDetails = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123456789",
    location: "New York, USA",
  };

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowProfile(false);
  };

  return (
    <div className="bg-[#eaf4fc] h-screen flex flex-col gap-3">
      <ToastContainer
        toastClassName="transition-all duration-300 ease-in-out"
        bodyClassName="m-0 rounded-3xl bg-white"
        toastStyle={{
          backgroundColor: "transparent",
          padding: "0px",
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          flexDirection: "row",
        }}
        position="top-center"
        autoClose={7000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        transition={Slide}
      />
      <header className="p-4  flex-shrink-0 z-50">
        <nav className="container mx-auto flex items-center justify-between ">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              {" "}
              <Image src={logo} alt="logo" width={150} height={40} />
            </Link>
          </div>
          <div className="relative flex items-center gap-2">
            {isLoggedIn ? (
              <div className="relative flex items-center gap-2">
                 <h1 className="text-xl font-semibold text-gray-800">{userDetails.name}</h1>

                <Image
                  src={user}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
              
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 px-6">
                    <div className="flex justify-between items-center gap-1">
                      <button
                        onClick={toggleProfile}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left font-semibold"
                      >
                        Profile
                      </button>
                      <CiUser className="text-2xl text-gray-700 hover:text-emerald-500 transition-colors duration-200" />
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left font-semibold"
                      >
                        Logout
                      </button>
                      <IoLogOutOutline className="text-2xl text-gray-700 hover:text-emerald-500 transition-colors duration-200" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/signin"
                  className="text-emerald-500 text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-emerald-500 text-white text-sm md:text-lg px-4 md:px-6 py-2 font-semibold rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {showProfile && (
        <UserProfile user={userDetails} onClose={handleCloseModal} />
      )}

      <main className="h-4/5 w-full relative mb-40 z-0">
        <div className="container mx-auto max-w-7xl p-4 bg-gradient-to-br from-slate-50 via-slate-50 to-emerald-400">
          <section className="max-h-full grid grid-cols-1 md:grid-cols-2 container items-start mx-auto max-w-7xl p-4">
            <div className="col-span-1 py-4">
              <div className="flex flex-col gap-10">
                <div className="border border-emerald-500 flex items-center mt-6 rounded-xl bg-emerald-200/25 p-1 max-w-fit tracking-normal">
                  <button className="bg-emerald-500 text-lg font-semibold text-white px-10 py-2 rounded-xl">
                    I am a Freelancer
                  </button>
                  <button className="text-lg font-semibold text-black px-10 py-2">
                    We are Organisation
                  </button>
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-wider">
                    Find Your Next Cybersecurity Gig
                  </h2>
                  <p className="text-xl md:text-2xl tracking-wider text-slate-400">
                    Connect with top organizations and clients on our platform!
                    Find your perfect match to your expertise.
                  </p>
                  <div>users image</div>

                  <p className="tracking-wider text-md mt-1">
                    Over <span className="text-emerald-500">12800+</span>{" "}
                    freelancers <br /> working with top organizations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 h-full justify-center items-center relative">
              <Image src={banner} alt="banner" className="mx-auto" />
              <div className="absolute top-32 right-20 h-fit max-w-[150px] bg-white rounded-xl shadow-xl shadow-gray-500/25 py-4 px-8 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold">300+</span>{" "}
                  <Image src={bag} alt="users" />
                </div>
                <div className="text-center">Project Completed</div>
              </div>
            </div>
          </section>
        </div>

        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-[1050px] max-w-[90%] rounded-2xl bg-white py-5 px-4 shadow-xl shadow-emerald-500/25">
          <div className="flex items-center justify-center gap-4">
            <CiSearch className="text-3xl font-extrabold text-center" />
            <form onSubmit={handleSearch} className="flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs..."
                className="rounded-md p-2 px-4 flex-grow outline-none "
              />
              <button
                type="submit"
                className="ml-2 bg-emerald-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </main>

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

      <main className="h-[580px] flex items-center py-16">
        <section className="container mx-auto px-8 flex flex-col justify-evenly h-full">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold tracking-wider">
              Cyber Hub Projects
            </h1>
            <div className="flex gap-2">
              <button className="rounded-full border-2 border-emerald-500 p-2 text-emerald-500 transition-colors duration-300 hover:bg-emerald-500 hover:text-white">
                <IoIosArrowRoundBack size={36} />
              </button>
              <button className="rounded-full bg-emerald-500 p-2 text-white transition-colors duration-300 hover:bg-emerald-600">
                <IoIosArrowRoundForward size={36} />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-slate-200 rounded-xl p-4 flex flex-col justify-between h-[330px] group hover:bg-emerald-300 transition-all duration-300"
              >
                <div className="flex flex-col gap-4 mb-4">
                  <h2 className="text-xl font-semibold text-black tracking-tight group-hover:text-white">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.type.map((type, index) => (
                      <button
                        key={index}
                        className="bg-emerald-500 text-white px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-semibold text-black transition-colors duration-300 group-hover:text-white">
                    {item.slary}
                  </p>
                  <p className="text-xs font-bold text-slate-500 text-end transition-colors duration-300 group-hover:text-slate-600">
                    {item.time}
                  </p>
                  <div className="flex items-center justify-between">
                    <Image
                      src={item.image}
                      alt="company logo"
                      className="w-12 h-12 object-cover transition-transform duration-300 group-hover:brightness-110"
                    />
                    <div className="flex flex-col flex-grow ml-2">
                      <p className="text-sm font-semibold text-black transition-colors duration-300 group-hover:text-white">
                        {item.company}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 transition-colors duration-300 group-hover:text-slate-600">
                        <LuUsers2 size={20} />
                        {item.user}
                      </p>
                    </div>
                    <p className="text-xs text-white bg-emerald-500 rounded-full px-3 py-1 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                      {item.jobs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <main className="  h-fit w-full bg-slate-100 ">
        <section className=" container mx-auto  p-20 flex flex-col gap-10">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-bold tracking-wider">
              Browse by Skills
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {Skills.map((item) => (
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
                    <p className="text-lg font-medium text-gray-400">
                      {item.rating}
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-400">
                    {item.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <main className="h-fit w-full mt-20">
        <section className="container mx-auto w-fit px-20 pt-20 pb-14 flex flex-col gap-5 h-full justify-center items-center">
          <div className="grid grid-cols-2 w-full gap-24 h-full">
            <div className="col-span-1 flex flex-col justify-center gap-14 mt-10">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold tracking-wider">
                  What Bugbear Delivers
                </h1>
                <p className="text-lg font-medium text-black">
                  We prioritize quality, speed, and security.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {promotion.map((item, index) => (
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
              <div className="bg-sky-100/50 w-full h-[450px] items-end rounded-lg overflow-hidden"></div>

              <div className="absolute top-[-20px] w-full h-full flex justify-center items-center">
                <div className="relative">
                  <Image src={man} alt="man" className="relative z-10" />
                  <Image
                    src={star}
                    alt="star"
                    className="absolute top-24 right-10 w-8 h-8"
                  />
                  <Image
                    src={star}
                    alt="star"
                    className="absolute top-72 right-0 w-6 h-6"
                  />
                  <Image
                    src={star}
                    alt="star"
                    className="absolute bottom-20 left-8 w-5 h-5"
                  />
                  <div className="absolute top-32 -left-16 flex justify-center items-center gap-2 px-5 py-3 bg-white shadow-xl shadow-slate-300/75 rounded-xl tracking-wider">
                    <Image src={shield} alt="shield" className="w-8 h-8" />
                    <span className="text-lg font-extrabold">100% Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="h-[750px] flex items-center justify-center mt-20">
        <section className="container px-20 flex flex-col gap-16">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-5 tracking-wide">
              <h1 className="text-4xl font-black tracking-wide">
                Top Freelancers Share Their Success
              </h1>
              <p className="text-gray-500">
                Hear from freelancers who have excelled on Bugbear.
              </p>
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
            {testimonial.map((item) => (
              <div
                key={item.name}
                className="bg-white p-10 rounded-lg shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300 flex flex-col gap-5"
              >
                <Image src={item.image} alt={item.name} className="mx-auto" />
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

      {/* contact */}
      <div className="h-[850px] flex items-center justify-center mt-20">
        <div className="bg-emerald-500/80 container mx-auto h-[90%] py-14 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Left Section */}
          <div className="flex flex-col gap-8 md:gap-16 items-start px-6 md:px-20 py-10 md:py-14">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100/90 tracking-wider">
                Explore Freelancing Opportunities
              </h1>
              <p className="text-slate-100/80 text-lg font-semibold tracking-wider">
                Ready to start? Discover projects that match your skills.
              </p>
            </div>
            <button className="bg-slate-100/80 text-slate-800 px-6 md:px-10 py-3 rounded-lg font-semibold tracking-wider">
              Get Started
            </button>
          </div>

          {/* Right Section with Images */}
          <div className="relative flex items-center justify-center h-full">
            <Image
              src={wave}
              alt="wave"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
            />
            <Image
              src={girl}
              alt="girl"
              className="absolute bottom-0 right-0 h-auto object-contain max-w-full z-20"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-1/5 right-16 w-12 h-12 object-contain z-10"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-1/3 right-8 w-10 h-10 object-contain z-10"
            />
            <Image
              src={star}
              alt="star"
              className="absolute top-2/3 left-16 w-8 h-8 object-contain z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
