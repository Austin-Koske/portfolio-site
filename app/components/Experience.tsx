import React from "react";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { data } from "@/app/utils/data";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />          
          <div className="space-y-12">
            {data.experience.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between`}>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500" />
                
                {/* Image Section */}
                {exp.image && (
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 order-2' : 'md:pl-8 order-1'}`}>
                    <div className="relative aspect-square w-48 mx-auto rounded-lg overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={`${exp.organization} - ${exp.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8 order-1' : 'md:pr-8 order-2'} ${!exp.image ? 'md:ml-auto' : ''}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === "work" ? (
                        <BriefcaseIcon className="w-5 h-5 text-primary-600" />
                      ) : (
                        <AcademicCapIcon className="w-5 h-5 text-primary-600" />
                      )}
                      <span className="text-sm font-medium text-primary-600">
                        {exp.type === "work" ? "Work Experience" : "Education"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="text-gray-600 font-medium">{exp.organization}</div>
                    <div className="text-gray-500 text-sm mb-4">
                      {exp.location} • {exp.period}
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;