import { ProjectCard } from "./ProjectCard";
import projectsData from "../assets/projects.json";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  desc: string;
  gitLink: string;
  liveLink: string;
  'Tech Stack': string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (projectsData && projectsData.projects) {
      setProjects(projectsData.projects);
    } else {
      console.error('Failed to load projects data:', projectsData);
    }
  }, []);

  return (
    <>
      <h1 className="hover:underline text-center text-4xl md:text-5xl font-bold m-12 text-gray-500">
        PROJECTS
      </h1>
      <div className="flex justify-center flex-col items-center">
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
    </>
  );
};

export default Projects;
