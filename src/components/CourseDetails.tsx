import React from "react";
import { useRouter } from "next/router";
import { useCourses } from "@/context/CourseContext"; // Adjust the import as needed

const CourseDetails = () => {
  const router = useRouter();
  const { courses } = useCourses();
  const { id } = router.query; // Get course ID from the query

  const course = courses.find((course) => course.id === id);

  if (!course) return <div>Loading...</div>; // Add loading state if needed

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{course.name}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p className="text-sm text-gray-600 mb-2">
        Category: {course.category.name}
      </p>
      <p className="text-sm font-bold mb-2">
        Price: ${course.price.toFixed(2)}
      </p>
      {/* Additional course details */}
      <h4 className="font-semibold mb-2">Modules:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {course.modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
      <p className="text-xs text-gray-400 mb-2">
        Created on: {new Date(course.date_created).toLocaleDateString()}
      </p>

      <button
        onClick={() => router.push("/courses")} // Adjust the route as needed
        className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#01CE9A] hover:text-white"
      >
        Back to Courses
      </button>
    </div>
  );
};

export default CourseDetails;
