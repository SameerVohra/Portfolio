import { useState } from "react";
import htmllogo from "../assets/HTML5.png";
import reactlogo from "../assets/react.png";
import css from "../assets/tailwind.png";
import git from "../assets/Git.png";
import json from "../assets/json.png";
import js from "../assets/js.png";
import { useNavigate } from "react-router";

function Explore() {
  const [show, setShow] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <>
      <div className='border-gray-800 border-1 w-60 lg:flex lg:flex-col p-2 hidden'>
        <h1 className='text-white text-md'>EXPLORER</h1>
        <div className="mt-2 flex items-start cursor-pointer flex-col">
          <h2 className="text-white text-sm" onClick={() => setShow(!show)}>
            {show ? "˅" : ">"} PORTFOLIO
          </h2>
          {show && (
            <ul className="text-white ml-5 text-sm flex flex-col gap-2 mt-2">
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/")}>
                  <img src={reactlogo} alt="React Logo" className="w-5 h-5 mr-2" />
                  home.jsx
                </button>
              </li>
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/about")}>
                  <img src={htmllogo} alt="HTML Logo" className="w-5 h-5 mr-2" />
                  about.html
                </button>
              </li>
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/connect")}>
                  <img src={css} alt="CSS Logo" className="w-5 h-5 mr-2" />
                  contact.css
                </button>
              </li>
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/projects")}>
                  <img src={js} alt="JavaScript Logo" className="w-5 h-5 mr-2" />
                  projects.js
                </button>
              </li>
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/github")}>
                  <img src={git} alt="Git Logo" className="w-5 h-5 mr-2" />
                  github.md
                </button>
              </li>
              <li>
                <button className="flex items-center w-full text-left p-1 hover:bg-gray-700 rounded" onClick={() => navigate("/skills")}>
                  <img src={json} alt="JSON Logo" className="w-5 h-5 mr-2" />
                  skills.json
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Explore;
