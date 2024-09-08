import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bugbear",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Place ToastContainer inside the body */}
        <ToastContainer
          toastClassName="transition-all duration-300 ease-in-out"
          bodyClassName="m-0 rounded-3xl bg-white"
          toastStyle={{
            backgroundColor: 'transparent',
            padding: '0px',
            boxShadow: 'none',
            transition: 'all 0.3s ease-in-out',
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
        {children}
      </body>
    </html>
  );
}
