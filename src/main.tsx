import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Github from "./components/Github";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Default route inside MainPage
        element: <HomePage />,
      },
      {
        path: "github",
        element: <Github />,
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "connect",
        element: <Contact/>
      },
      {
        path: "skills",
        element: <Skills/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
