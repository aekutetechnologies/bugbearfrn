import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext"; // Make sure this is the correct path
import Image from "next/image"; // For profile image handling
import { IoIosNotifications } from "react-icons/io";
import Link from "next/link";

import logo from "@/assets/logo.png";
import defaultImage from "@/assets/user_png.png";

const Navbar = () => {
  const { user, logout } = useAuth(); // Using the user and logout from context
  const [showNotificationsDropdown, setShowNotificationsDropdown] =
    useState(false);
  const notifications = [
    "User requested to connect with you",
    "You have a new message",
  ]; // Removed useState as it's not being used
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className="py-3 flex-shrink-0 z-50 border-b-2 border-t-0 border-b-gray-300">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-24 flex-1">
          <div className="text-black text-2xl font-bold tracking-wide">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-40"/>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center gap-6">
          {user ? (
            <div className="flex items-center space-x-6">
              {/* Notification Icon with Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setShowNotificationsDropdown(true)}
                onMouseLeave={() => setShowNotificationsDropdown(false)}
                ref={notificationsRef}
              >
                <div className="bg-[#FFFFFF] rounded-full p-2 cursor-pointer">
                  <IoIosNotifications  className="md:text-2xl text-gray-400" />
                </div>

                {/* Notifications Dropdown */}
                <div
                  className={`w-96 absolute top-full -left-40 mt-2 bg-[#FFFFFF] border border-gray-200 rounded-2xl shadow-lg z-50 
                    overflow-hidden transform transition-all duration-300 ease-in-out
                    ${
                      showNotificationsDropdown
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="flex justify-between border-b-2 px-6 py-2 font-semibold text-md">
                    <div className="flex gap-2">
                      <h3 className="text-[#01CE9A] font-semibold text-md">
                        Notifications
                      </h3>
                      <select name="" id="" className="outline-none">
                        <option value="">All</option>
                        <option value="1">Type 1</option>
                        <option value="2">Type 2</option>
                      </select>
                    </div>
                    <button className="text-[#01CE9A] font-semibold text-md">
                      Mark all as read
                    </button>
                  </div>

                  {notifications.length > 0 ? (
                    <ul className="flex flex-col gap-4 text-sm">
                      {notifications.map((notification, index) => (
                        <li
                          key={index}
                          className="flex justify-center items-center gap-2 border-b-2 px-6 p-2 hover:bg-gray-100"
                        >
                          <Image
                            src={defaultImage}
                            alt="profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <p className="flex-1">{notification}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="py-2 text-gray-500">No new notifications</p>
                  )}
                </div>
              </div>

              {/* Profile Image Section */}
              <div className="relative group">
                {/* Profile Section Trigger */}
                <div className="flex items-center justify-center bg-[#FFFFFF] rounded-2xl py-1.5 px-3 gap-2 cursor-pointer group-hover:bg-gray-100 transition">
                  {/* Display Profile Image */}
                  <Image
                    src={user?.profile_pic_url || defaultImage} // Display fetched image or fallback
                    alt="User Profile"
                    width={20}
                    height={40}
                    className="rounded-full"
                  />
                  {/* User Name */}
                  <h1 className="md:text-base font-semibold text-gray-700">
                    {user.first_name && user.last_name
                      ? `${user.first_name} ${user.last_name}`
                      : user.email}
                  </h1>
                </div>

                {/* Dropdown for Profile & Logout */}
                <div
                  className={`absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-50
                    px-6 py-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100
                    transition-all duration-300 ease-in-out`}
                >
                  <Link href="/freelancer/profile">
                    <button className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left font-semibold">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 w-full text-left font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link href="/signin">
                <button className="text-[#01CE9A] font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-[#01CE9A] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
