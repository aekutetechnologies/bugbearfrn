// context/CourseContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCourses } from "@/api/course";

// Define the shape of the Course data
interface Course {
  id: string;
  category: {
    id: string;
    name: string;
  };
  likes: number;
  reviews: number;
  modules: [];
  name: string;
  description: string;
  price: number;
  image: string;
  date_created: string;
}

// Define the context type
interface CourseContextType {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

// Provider component to wrap the app and provide course data
export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courseData = await fetchCourses();
        setCourses(courseData);
      } catch (err) {
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, loading, error }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};
