import { useState } from "react";
import htmllogo from "../assets/HTML5.png";
import reactlogo from "../assets/react.png";
import css from "../assets/tailwind.png";
import git from "../assets/Git.png";
import json from "../assets/json.png";
import js from "../assets/js.png";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex items-center p-2 text-white hover:bg-gray-700"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-2 absolute md:static bg-gray-900 w-full md:w-auto p-4 md:p-0 rounded-md md:rounded-none text-white`}
      >
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/")}
          >
            <img src={reactlogo} alt="React Logo" className="w-5 h-5 mr-2" />
            home.jsx
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/about")}
          >
            <img src={htmllogo} alt="HTML Logo" className="w-5 h-5 mr-2" />
            about.html
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/connect")}
          >
            <img src={css} alt="CSS Logo" className="w-5 h-5 mr-2" />
            contact.css
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/projects")}
          >
            <img src={js} alt="JavaScript Logo" className="w-5 h-5 mr-2" />
            projects.js
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/github")}
          >
            <img src={git} alt="Git Logo" className="w-5 h-5 mr-2" />
            github.md
          </button>
        </li>
        <li>
          <button
            className="flex items-center w-full text-left p-1 hover:bg-gray-700 bg-black border-1 border-white"
            onClick={() => navigate("/skills")}
          >
            <img src={json} alt="JSON Logo" className="w-5 h-5 mr-2" />
            skills.json
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
