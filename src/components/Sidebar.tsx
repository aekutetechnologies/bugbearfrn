// import { useState } from "react";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuCalendarCheck } from "react-icons/lu";
import { FaHandshakeSimple } from "react-icons/fa6";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const menuItems = [
    { id: 1, name: "Dashboard", icon: FaCompass },
    { id: 2, name: "Courses", icon: SlGraduation },
    { id: 3, name: "Connections", icon: HiOutlineUsers },
    { id: 4, name: "Calendar", icon: LuCalendarCheck },
    { id: 5, name: "Interviews", icon: FaHandshakeSimple },
  ];

  return (
    <aside className="w-fit h-[88vh] py-6 px-2 border-r-2 border-r-gray-300 ">
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href="#"
                className={`p-1 rounded-full flex items-center ${
                  activePage === item.name
                    ? "bg-[#01CE9A] text-white"
                    : "bg-white text-gray-500"
                } hover:bg-[#01CE9A] hover:text-white`}
                onClick={() => setActivePage(item.name)}
              >
                <div className="p-2 rounded-full">
                  <item.icon size={20} />
                </div>

              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
