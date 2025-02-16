import React from "react";
import Image from "next/image";
import { data } from "@/app/utils/data";

interface Certification {
  title: string;
  image: string;
  link: string;
}

const defaultCertifications: Certification[] = [{
  title: "Example Certification",
  link: "#",
  image: "/placeholder-cert.jpg"
}];

const Certifications: React.FC = () => {
  const certifications = data.certifications || defaultCertifications;

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Certifications</h2>
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert: Certification, index: number) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 last:mb-0 transition-transform duration-150 hover:-translate-y-1"
            >
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center group"
              >
                <div className="relative w-full sm:w-48 h-48">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-contain p-4 dark:brightness-90"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-150">
                    {cert.title}
                  </p>
                  <span className="inline-flex items-center text-primary-600 dark:text-primary-400 mt-2 text-sm">
                    View Certificate
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-150" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
