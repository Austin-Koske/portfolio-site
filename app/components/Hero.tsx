import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { data } from "@/app/utils/data";

const Hero: React.FC = () => {
  return (
    <section id="header-section" className="relative pt-32 pb-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-64 h-64 mb-4">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover border-4 border-primary-100 dark:border-primary-900/30 shadow-lg transition-colors duration-150"
            />
          </div>
          
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-150">
            <span className="text-primary-600 dark:text-primary-400 transition-colors duration-150">Hello,</span> I&apos;m Austin Koske
          </h1>

          <div className="flex gap-4 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-150">
              <TypeAnimation
                sequence={data.hero_text}
                wrapper="span"
                speed={50}
                deletionSpeed={25}
                style={{
                  fontSize: '25px',
                  display: 'inline-block',
                  fontWeight: 'bold',
                  transition: 'all 150ms',
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 