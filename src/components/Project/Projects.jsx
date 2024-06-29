import projects from "./ProjectData";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const ProjectShowcase = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly mt-8">
        <Link to="/" className=" text-blue-500 hover:underline">
          &lt; Back
        </Link>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-8">🚀 Some Projects I Built</h1>

        <div className="max-w-lg">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mb-8 relative project-item border-l border-gray-700 pl-8"
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-400 rounded-full -left-2 top-8 border border-white"></div>
              <div className="bg-zinc-950 bg-opacity-10 backdrop-blur-lg rounded-md p-6 shadow-lg">
                <h3 className="text-xl text-blue-500 font-medium">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400"></p>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="flex mt-4 space-x-4">
                  <a
                    href={project.demoUrl}
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectShowcase;
