import { Name } from "./Name";
import { Connect } from "./Connect";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const MainPage = () => {
  return (
    <div className="container p-4 min-w-full">
      <Name />
      <Connect />
      <Skills />
      <Projects />
    </div>
  );
};
