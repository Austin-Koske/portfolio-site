import React from "react";
import Image from "next/image";
import { data } from "@/app/utils/data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Projects</h2>
        <div className="space-y-10">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Banner with title overlay */}
              <div className="relative h-72 sm:h-80 lg:h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-gray-400 text-sm hidden sm:block">{project.timeline}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>

              {/* Four-section grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                    Problem
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.sections.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                    System Design
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.sections.systemDesign}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                    Challenges & Tradeoffs
                  </h4>
                  <ul className="space-y-2">
                    {project.sections.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-primary-500 dark:text-primary-400 font-bold mt-0.5 shrink-0">→</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                    Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.sections.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-primary-500 dark:text-primary-400 font-bold mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
