import React from "react";
import { data } from "@/app/utils/data";

const OtherProjects: React.FC = () => {
  return (
    <section id="other-projects" className="pb-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 text-center mb-8">
          Other Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.other_projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:border-primary-400 dark:hover:border-primary-500 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-400 dark:text-gray-500 text-xs shrink-0 mt-0.5">
                  {project.timeline}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
