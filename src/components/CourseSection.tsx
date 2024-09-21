import React from "react";
import { useCourses } from "@/context/CourseContext"; // Import the useCourses hook
import Loader from "./Loader";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { PiUserFocus } from "react-icons/pi";
import Image from "next/image";

import courseImage from "@/assets/courseThumbnail.png";
import profImage from "@/assets/user_png.png";

const CourseSection = () => {
  const { courses, loading, error } = useCourses(); // Use the context to get courses, loading, and error

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="course-section text-gray-500 ml-8 mr-28">
      <nav className="h-116 flex items-center justify-between border-b-2 border-b-gray-300 px-4">
        <div className="flex items-center gap-4">
          <span className="text- font-bold">Courses</span>
          <span className="bg-gray-200 rounded-xl px-3 py-1 text-md font-semibold">
            {courses.length} results
          </span>
        </div>

        <div className="flex items-center flex-1 justify-end gap-4">
          <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-400 transition">
            <IoSearch className=" text-gray-700" />
          </div>

          <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-400 transition">
            <CiFilter className=" text-gray-700" />
          </div>

          <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-400 transition">
            <IoMdAdd className=" text-gray-700" />
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 jus p-1">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card p-2 border rounded shadow-md cursor-pointer hover:shadow-lg hover:scale-100 transition-all duration-100 ease-in-out"
          >
            <Image
              src={course.image || courseImage}
              alt={course.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <div className="mx-1 my-1 flex flex-col gap-3">
              <div className="flex justify-start items-center gap-1">
                <Image src={profImage} alt="image" className="w-5" />
                <h1 className="font-semibold text-xs">Prof. Name</h1>
              </div>
              <h3 className="font-semibold text-xs">{course.name}</h3>

              <div className="flex justify-between items-center text-gray-600 text-xs">
                <span className="flex items-center space-x-1">
                  <FaSignal className="text-sm" />
                  <p>Beginner</p>
                </span>

                <span className="flex items-center space-x-1">
                  <CiClock2 className="text-sm" />
                  <p>50 min</p>
                </span>

                <span className="flex items-center space-x-1">
                  <FaStar className="text-sm" />
                  <p>4.5</p>
                </span>

                <span className="flex items-center space-x-1">
                  <PiUserFocus className="text-sm" />
                  <p>1K freshers</p>
                </span>
              </div>

              <div className="mt-1">
                <button className="bg-gray-200 text-gray-500 px-3 py-1 text-xs rounded-full transition-colors duration-300 hover:bg-[#01CE9A] hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;


{
  /* <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-gray-600 mb-2">
                Category: {course.category.name}
              </p>
              <p className="text-sm font-bold mb-2">
                Price: ${course.price.toFixed(2)}
              </p>

              <div className="flex items-center space-x-4 mb-2">
                <p className="text-sm text-gray-600">Likes: {course.likes}</p>
                <p className="text-sm text-gray-600">
                  Reviews: {course.reviews}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Modules:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-gray-400 mb-2">
                Created on: {new Date(course.date_created).toLocaleDateString()}
              </p> */
}
