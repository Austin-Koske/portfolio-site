"use client";

import React from 'react';
import { SunIcon, MoonIcon, StarIcon } from '@heroicons/react/24/solid';
import { useDarkMode } from '@/app/utils/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-[60] p-1 rounded-full w-20 h-10 transition-all duration-500 hover:scale-105 overflow-hidden"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-full h-full">
        {/* Background elements */}
        <div className="absolute inset-0 rounded-full">
          <div className={`absolute inset-0 transition-colors duration-500 
            ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-400 to-blue-300'}`}
          />
          {/* Stars (only visible in dark mode) */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
            <StarIcon className="absolute w-1.5 h-1.5 text-white top-1 left-3" />
            <StarIcon className="absolute w-2 h-2 text-white top-2 right-3" />
            <StarIcon className="absolute w-1.5 h-1.5 text-white bottom-2 right-5" />
          </div>
        </div>

        {/* Slider */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full transform transition-transform duration-500 
            ${isDarkMode ? 'translate-x-10 bg-gray-800' : 'translate-x-1 bg-yellow-300'}
            shadow-lg flex items-center justify-center`}
        >
          {isDarkMode ? (
            <MoonIcon className="w-5 h-5 text-gray-200" />
          ) : (
            <SunIcon className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        {/* Clouds (only visible in light mode) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute w-3 h-3 bg-white rounded-full blur-[1px] top-2 left-10" />
          <div className="absolute w-4 h-4 bg-white rounded-full blur-[1px] bottom-2 left-8" />
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle; 