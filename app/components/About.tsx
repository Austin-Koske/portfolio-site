import React from "react";
import Image from "next/image";
import { data } from "@/app/utils/data";

const skills = ["Python", "JavaScript", "TypeScript", "React", "Node.js", "Lua", "Data Science", "Artificial Intelligence", "Computer Vision", "Natural Language Processing"];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-center">
            {data.about_me.text}
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 text-center">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 