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
    <div className={`bg-gray-900 text-white rounded-lg shadow-lg p-6 ${className} border border-gray-700 flex flex-col`}>
      {/* Project Name */}
      <h1 className="text-2xl font-bold mb-4 text-blue-300">{projectName}</h1>

      {/* Project Description */}
      <p className="mb-6 text-gray-400">{projectDesc}</p>

      {/* Tech Stack */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold uppercase text-gray-500">Tech Stack</h2>
        <p className="text-gray-400">{techStack}</p>
      </div>

      {/* Buttons for GitHub and Live Demo */}
      <div className="flex space-x-4 mt-4">
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          GitHub
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
