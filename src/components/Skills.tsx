import ts from "../assets/ts.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import cpp from "../assets/cpp.png";
import py from "../assets/Python.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/HTML5.png";
import git from "../assets/Git.png";
import linux from "../assets/Linux.png";
import node from "../assets/Node.js.png";

function Skills() {
  const skills = [
    { name: "TYPESCRIPT", image: ts },
    { name: "JAVASCRIPT", image: js },
    { name: "REACT", image: react },
    { name: "NODEJS", image: node },
    { name: "C++", image: cpp },
    { name: "PYTHON", image: py },
    { name: "TAILWIND", image: tailwind },
    { name: "HTML5", image: html },
    { name: "GIT/GITHUB", image: git },
    { name: "LINUX", image: linux },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-6 font-mono text-white flex flex-col md:flex-row">
      <div className="md:w-1/2 lg:w-2/5">
        <header className="border-b border-gray-700 pb-2 mb-4">
          <h1 className="text-4xl font-bold text-center">Skills</h1>
        </header>
        <pre className="overflow-x-auto mb-6">
          {`{
  "skills": [
    ${skills.map(skill => `
      {
        "name": "${skill.name}",
        "image": "${skill.image}"
      }`).join(",\n    ")}
  ]
}`}
        </pre>
      </div>
      <div className="md:w-1/2 lg:w-3/5 grid grid-cols-2 gap-4">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="relative group flex items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 transition-transform duration-300 transform group-hover:rotate-12"
            />
            <div className="absolute inset-0 bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
