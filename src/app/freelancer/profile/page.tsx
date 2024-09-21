"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Adjust the path to where your context is defined
import Image from "next/image";
import defaultProfilePic from "@/assets/user_png.png"; // Path to default profile picture
import { FaRegEdit, FaSave, FaTimes } from "react-icons/fa";
import bgGradient from "@/assets/bgGradient.jpg";

const ProfilePage: React.FC = () => {
  const { user, loading } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<
    "profile" | "password" | "devices"
  >("profile");

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loader component
  }

  if (!user) {
    return <div>No user data available. Please log in.</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    // setFormData(initialFormData); // Reset form data to its initial state
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="h-fit relative w-full container mx-auto">
      {/* <div className="container mx-auto"> */}
      <div className="flex items-center justify-between gap-10">
        <span className="text-2xl font-semibold">Profile</span>
        {isEditing ? (
          <div className="flex gap-2">
            <button
              // onClick={handleSave}
              className="p-2 bg-white text-gray-700 rounded-full flex items-center gap-2"
            >
              <FaSave />
            </button>
            <button
              onClick={handleCancel}
              className="p-2 bg-white text-gray-700 rounded-full flex items-center gap-2"
            >
              <FaTimes />
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="p-2 bg-white text-gray-700 rounded-full flex items-center gap-2"
          >
            <FaRegEdit />
          </button>
        )}
      </div>
      <nav className="border-b-2 border-gray-300">
        <ul className="flex space-x-4 h-full">
          <button
            onClick={() => setActiveTab("profile")}
            className={`h-full border-b-2 px-2 py-6 font-semibold ${
              activeTab === "profile"
                ? "border-emerald-500 text-emerald-500"
                : "border-transparent"
            } hover:border-emerald-500`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`h-full border-b-2 px-2 py-6 font-semibold ${
              activeTab === "password"
                ? "border-emerald-500 text-emerald-500"
                : "border-transparent"
            } hover:border-emerald-500`}
          >
            Password
          </button>
          <button
            onClick={() => setActiveTab("devices")}
            className={`h-full border-b-2 px-2 py-6 font-semibold ${
              activeTab === "devices"
                ? "border-emerald-500 text-emerald-500"
                : "border-transparent"
            } hover:border-emerald-500`}
          >
            Devices
          </button>
        </ul>
      </nav>

      <div className="flex-1 mt-2 h-full">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="h-full flex flex-col">
            <form className="relative">
              {/* Profile Picture and Personal Information Section */}
              <div className="bg-emerald-500 rounded-t-xl max-h-36 overflow-hidden relative">
                <Image
                  src={bgGradient}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src={user?.profile_pic_url || defaultProfilePic}
                  alt="user"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto shadow-lg shadow-gray-500 absolute left-28 transform -translate-x-1/2 -translate-y-1/2"
                />
                <label
                  htmlFor="profile-pic-upload"
                  className="absolute bottom-10 left-36 p-2 bg-emerald-500 rounded-full cursor-pointer"
                >
                  <FaRegEdit className="text-white" />
                </label>
                <input
                  id="profile-pic-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onClick={(e) => (e.currentTarget.value = "")}
                />
              </div>

              <div className="mt-20 grid grid-cols-2 gap-4">
                {/* Personal Information Fields */}
                <div className="flex flex-col">
                  <label htmlFor="first_name" className="text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    value={user?.first_name || ""}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    readOnly={!isEditing}
                  />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="last_name" className="text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                      value={user?.last_name || ""}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      // onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={user?.email || ""}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      // onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      value={user?.phone || ""}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      // onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </div>

                  <div className="flex flex-col">
            <label htmlFor="dob" className="text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={user?.dob || ""}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              readOnly={!isEditing}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Country"
              value={user?.country || ""}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              readOnly={!isEditing}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="City"
              value={user?.city || ""}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              readOnly={!isEditing}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={user?.address || ""}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              readOnly={!isEditing}
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="position" className="text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position"
              value={user?.position || ""}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              readOnly={!isEditing}
            />
          </div>
                  <div className="flex flex-col col-span-2">
                    <label htmlFor="about_me" className="text-gray-700 mb-1">
                      About Me
                    </label>
                    <textarea
                      id="about_me"
                      placeholder="About Me"
                      value={user?.about_me || ""}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      // onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </div>
              
              </div>

              {isEditing && (
                <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg">
                  Save Changes
                </button>
              )}
            </form>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <div className="h-full flex flex-col">
            <form className="relative">
              {/* Password Fields */}
              <div className="flex flex-col">
                <label
                  htmlFor="current_password"
                  className="text-gray-700 mb-1"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current_password"
                  placeholder="Enter Current Password"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  readOnly={!isEditing}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="new_password" className="text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="new_password"
                  placeholder="Enter New Password"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  readOnly={!isEditing}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="confirm_password"
                  className="text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm New Password"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  readOnly={!isEditing}
                />
              </div>

              {isEditing && (
                <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg">
                  Save Password
                </button>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
