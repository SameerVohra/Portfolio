interface Projects {
  projectName: string;
  gitLink: string;
  liveLink: string;
  projectDesc: string;
  className?: string;
  techStack: string;
}

function ProjectCard({
  projectName,
  gitLink,
  liveLink,
  projectDesc,
  className,
  techStack,
}: Projects) {
  return (
    <div className={`bg-gray-900 text-white rounded-lg shadow-lg p-4 md:p-6 ${className} border border-gray-700 flex flex-col`}>
      {/* Project Name */}
      <h1 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-blue-300">
        {projectName}
      </h1>

      {/* Project Description */}
      <p className="mb-4 md:mb-6 text-gray-400 text-sm md:text-base">
        {projectDesc}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <h2 className="text-xs md:text-sm font-semibold uppercase text-gray-500">Tech Stack</h2>
        <p className="text-gray-400 text-xs md:text-base">{techStack}</p>
      </div>

      {/* Buttons for GitHub and Live Demo */}
      <div className="flex space-x-2 md:space-x-4 mt-auto">
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition text-xs md:text-sm"
        >
          GitHub
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition text-xs md:text-sm"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
