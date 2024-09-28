import { useState, useEffect } from 'react';
import projectsData from "../assets/projects.json";
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  desc: string;
  gitLink: string;
  liveLink: string;
  'Tech Stack': string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (projectsData && projectsData.projects) {
      setProjects(projectsData.projects);
    } else {
      console.error('Failed to load projects data:', projectsData);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 p-4 md:p-8">
      {/* Title */}
      <h1 className="text-white text-3xl md:text-5xl text-center font-bold font-mono mb-6 md:mb-8">
        Projects
      </h1>

      {/* Scrollable Project List */}
      <div className="flex-grow w-full overflow-y-auto px-2 md:px-4 border-t border-gray-700">
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.name}
              projectDesc={project.desc}
              gitLink={project.gitLink}
              liveLink={project.liveLink}
              techStack={project['Tech Stack']}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
