// "use client"

// import { useState } from "react";
// import Sidebar from "@/components/Sidebar"; // Adjust the import path as needed

// // Dummy components for other pages
// import FeedSection from "@/components/FeedSection";
// import CourseSection from "@/components/CourseSection";
// import ConnectionSection from "@/components/ConnectionSection";
// import CalenderSection from "@/components/CalenderSection";
// import InterviewSection from "@/components/InterviewSection";

// import { CourseProvider } from "@/context/CourseContext";

// const DashboardPage = () => {
//   const [activePage, setActivePage] = useState("Dashboard");

//   const renderContent = () => {
//     switch (activePage) {
//       case "Dashboard":
//         return <FeedSection />;
//       case "Courses":
//         return <CourseSection />;
//       case "Connections":
//         return <ConnectionSection />;
//       case "Calendar":
//         return <CalenderSection />;
//       case "Interviews":
//         return <InterviewSection />;
//       default:
//         return <FeedSection />;
//     }
//   };

//   return (
//     <CourseProvider>
//     <div className="flex">
//       <Sidebar activePage={activePage} setActivePage={setActivePage} />

//       {/* Main content */}
//       <div className="px-6 py-2 w-full">
//         {renderContent()}
//       </div>
//     </div>
//     </CourseProvider>
//   );
// };

// export default DashboardPage;


"use client"

import { useState } from "react";
import Sidebar from "@/components/Sidebar"; // Adjust the import path as needed

// Dummy components for other pages
import FeedSection from "@/components/FeedSection";
import CourseSection from "@/components/CourseSection";
import ConnectionSection from "@/components/ConnectionSection";
import CalenderSection from "@/components/CalenderSection";
import InterviewSection from "@/components/InterviewSection";

import { CourseProvider } from "@/context/CourseContext";

const DashboardPage = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <FeedSection />;
      case "Courses":
        return <CourseSection />;
      case "Connections":
        return <ConnectionSection />;
      case "Calendar":
        return <CalenderSection />;
      case "Interviews":
        return <InterviewSection />;
      default:
        return <FeedSection />;
    }
  };

  return (
    <CourseProvider>
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main content */}
      <div className="px-6 py-2 w-full">
        {renderContent()}
      </div>
    </div>
    </CourseProvider>
  );
};

export default DashboardPage;
