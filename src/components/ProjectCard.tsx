import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  projectName: string;
  gitLink: string;
  liveLink: string;
  projectDesc: string;
  className?: string;
  techStack: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  gitLink,
  liveLink,
  projectDesc,
  className,
  techStack,
}) => {
  return (
    <div
      className={`${className} border border-gray-700 rounded-lg p-6 shadow-2xl shadow-gray-600 bg-gray-800 text-white transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-black hover:via-cyan-900 hover:to-sky-600 w-full mx-auto my-4 max-w-screen-lg`}
    >
      <h1 className="text-3xl lg:text-4xl font-bold font-mono">
        {projectName}
      </h1>
      <h3 className="font-extrabold text-xl mb-1 ">
        TECH STACK: <span className="font-thin font-mono">{techStack}</span>{" "}
      </h3>
      <div className="text-gray-400 text-sm mb-4 flex items-center space-x-4">
        <Link
          to={gitLink}
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </Link>
        <span>|</span>
        <Link
          to={liveLink}
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LIVE LINK
        </Link>
      </div>
      <p className="break-words text-base lg:text-lg text-gray-200 mb-4">
        {projectDesc}
      </p>
    </div>
  );
};
