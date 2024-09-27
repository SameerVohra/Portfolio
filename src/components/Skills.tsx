import { Container } from "./Container";
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
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center">
      <header className="w-full flex justify-between items-center bg-gray-900 p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center">Skills</h1>
      </header>
      <div className="w-full flex-grow flex flex-row">
        <main className="flex-grow p-4 grid grid-cols-2 gap-6">
          <Container
            text="TYPESCRIPT"
            image={ts}
            className="hover:bg-blue-800 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="JAVASCRIPT"
            image={js}
            className="hover:bg-yellow-400 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="REACT"
            image={react}
            className="hover:bg-blue-600 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="NODEJS"
            image={node}
            className="hover:bg-green-600 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="C++"
            image={cpp}
            className="hover:bg-blue-500 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="PYTHON"
            image={py}
            className="hover:bg-green-400 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="TAILWIND"
            image={tailwind}
            className="hover:bg-sky-500 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="HTML5"
            image={html}
            className="hover:bg-orange-500 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="GIT/GITHUB"
            image={git}
            className="hover:bg-orange-700 transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
          <Container
            text="LINUX"
            image={linux}
            className="hover:bg-black transition duration-300 ease-in-out rounded-lg shadow-lg"
          />
        </main>
      </div>
    </div>
  );
}

export default Skills;
