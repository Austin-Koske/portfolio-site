"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, isActive }) => (
  <Link
    href={href}
    className={`px-4 py-2 rounded-full text-center text-sm font-medium relative transition-all duration-150
      ${isActive 
        ? "text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 font-semibold" 
        : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20"} 
      focus-visible:outline focus-visible:outline-primary-400
      active:scale-95 hover:-translate-y-0.5 transform`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-primary-500 transition-transform duration-150 ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </Link>
);

const NavBar: React.FC = () => {
  const currentPath = usePathname();

  const navItems = [
    {
      text: "About",
      path: currentPath !== "/" ? "/#about" : "#about",
    },
    {
      text: "Projects",
      path: currentPath !== "/" ? "/#projects" : "#projects",
    },
    {
      text: "Contact",
      path: currentPath !== "/" ? "/#contact" : "#contact",
    }
  ];

  return (
    <div>
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 w-full shadow-sm dark:shadow-gray-800/20 py-4 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <Link
            href={currentPath !== "/" ? "/" : "#header-section"}
            className="flex items-center gap-3 text-gray-900 dark:text-white no-underline group"
          >
            <span className="font-outfit font-semibold text-lg">Austin Koske</span>
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavButton
                key={item.path}
                href={item.path}
                isActive={currentPath === item.path}
              >
                {item.text}
              </NavButton>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
