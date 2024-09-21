"use client";

import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex">

        {/* Main content area */}
        <main className="flex-1 px-6 py-4 bg-[#eaeaed]">
          {children}
        </main>

        <ToastContainer
          toastClassName="transition-all duration-300 ease-in-out"
          bodyClassName="m-0 rounded-3xl"
          toastStyle={{
            backgroundColor: "#ffffff",
            padding: "10px",
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
      </div>
    </AuthProvider>
  );
}
