"use client";

import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#eaeaed] text-base ">
        <AuthProvider>
          <Navbar />
          <ToastContainer
            toastClassName="transition-all duration-300 ease-in-out"
            bodyClassName="m-0 rounded-3xl" // Removed bg-white to let the background color take effect
            toastStyle={{
              backgroundColor: "#ffffff", // Set the desired background color for the toast
              padding: "10px", // You can adjust padding if needed
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
            // theme="dark"
            closeButton={false}
            transition={Slide}
          />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
