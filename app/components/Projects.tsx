import React from "react";
import Image from "next/image";
import { data } from "@/app/utils/data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">My Projects</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${data.projects.length <= 2 ? 'max-w-4xl mx-auto' : 'lg:grid-cols-3'}`}>
          {data.projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <h4 className="text-gray-600 dark:text-gray-300 mb-4">{project.timeline}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-8">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 