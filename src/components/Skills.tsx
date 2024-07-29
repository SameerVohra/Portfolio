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

export const Skills = () => {
  return (
    <>
      <h1 className=" hover:underline text-center text-4xl md:text-5xl font-bold m-12  text-gray-500">
        SKILLS
      </h1>{" "}
      <div className="w-full  flex flex-wrap justify-between items-center gap-6 md:gap-8 lg:gap-10 px-2 md:px-8 lg:px-12 py-4">
        <Container
          text="TYPESCRIPT"
          image={ts}
          className="hover:bg-gradient-to-br hover:from-blue-700 hover:via-cyan-950 hover:to-blue-800 ease-in-out"
        />
        <Container
          text="JAVASCRIPT"
          image={js}
          className="hover:bg-gradient-to-br hover:from-yellow-800 hover:via-yellow-500 hover:to-yellow-200 ease-in-out"
        />
        <Container
          text="REACT"
          image={react}
          className="hover:bg-gradient-to-br hover:from-cyan-950 hover:via-blue-600  hover:to-blue-800 ease-in-out "
        />
        <Container
          text="NODEJS"
          image={node}
          className="hover:bg-gradient-to-br hover:from-emerald-900 hover:via-green-600 hover:to-emerald-400 ease-in-out"
        />
        <Container
          text="C++"
          image={cpp}
          className="hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-600 hover:to-blue-400 ease-in-out"
        />
        <Container
          text="PYTHON"
          image={py}
          className="hover:bg-gradient-to-br hover:from-blue-800 hover:via-green-300 hover:to-yellow-400 ease-in-out"
        />
        <Container
          text="TAILWIND"
          image={tailwind}
          className="hover:bg-gradient-to-br hover:from-cyan-950 hover:via-sky-600 hover:to-sky-400 ease-in-out"
        />
        <Container
          text="HTML5"
          image={html}
          className="hover:bg-gradient-to-br hover:from-orange-600 hover:via-orange-400 hover:to-white ease-in-out"
        />
        <Container
          text="GIT/GITHUB"
          image={git}
          className="hover:bg-gradient-to-br hover:from-orange-900 hover:to-orange-600 ease-in-out"
        />{" "}
        <Container
          text="LINUX"
          image={linux}
          className="hover:bg-gradient-to-br hover:from-black hover:via-yellow-600 hover:to-white ease-in-out"
        />
      </div>
    </>
  );
};
