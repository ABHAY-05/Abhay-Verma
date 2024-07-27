import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VanillaTilt from "vanilla-tilt";

import "../styles/projects.css";
import { projects } from "../constants/data";

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [tabRef, inTabView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [mobRef, inMobView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, {
        max: 5,
        gyroscopeMinAngleX: -5,
        gyroscopeMaxAngleX: 5,
        gyroscopeMinAngleY: -5,
        gyroscopeMaxAngleY: 5,
      });
    });
  });

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex h-[170vh] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[3rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(0, 3).map((project, idx) => (
                  <div
                    key={idx}
                    className={`card h-auto w-[23vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${project.style} pb-[5vh]`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[20vw] rounded-md"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div key={idx} className="h-[26px] text-nowrap">
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.5vw] max-lg:text-[1.8vw] ${project.tstyle} text-nowrap`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400">
                          {project.date}
                        </div>
                      </div>
                      <ul className="pdesc mx-[1.9vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] text-white marker:text-white">
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(3).map((project, idx) => (
                  <div
                    key={idx}
                    className={`card h-auto w-[23vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] pb-[5vh] ${project.style}`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[20vw] rounded-md"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div key={idx} className="h-[26px] text-nowrap">
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.5vw] ${project.tstyle} text-nowrap`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400">
                          {project.date}
                        </div>
                      </div>
                      <ul className="pdesc mx-[2vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] text-white marker:text-white max-lg:mx-[2.5vw]">
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[140vh] w-screen flex-col items-center overflow-hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2.5rem] max-md:text-[2rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(0, 2).map((project, idx) => (
                  <div
                    key={idx}
                    className={`card h-auto w-[35vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] max-md:w-[45vw] ${project.style} pb-[5vh]`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[32vw] rounded-md max-md:w-[40vw]"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div key={idx} className="h-[26px] text-nowrap">
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.8vw] ${project.tstyle} text-nowrap max-md:text-[2vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1.4vw] text-gray-400 max-md:text-[1.6vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul className="pdesc mx-[2.7vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] text-white marker:text-white max-md:mx-[3.5vw]">
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(2).map((project, idx) => (
                  <div
                    key={idx}
                    className={`card h-auto w-[35vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] pb-[5vh] max-md:w-[45vw] ${project.style}`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[32vw] rounded-md max-md:w-[40vw]"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div key={idx} className="h-[26px] text-nowrap">
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.8vw] ${project.tstyle} text-nowrap max-md:text-[2vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1.4vw] text-gray-400 max-md:text-[1.6vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul className="pdesc mx-[2.8vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] text-white marker:text-white max-md:mx-[3.5vw]">
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[200vh] w-screen flex-col items-center overflow-hidden sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center justify-center gap-[3vh]">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`card ${idx % 2 ? "col1" : "col2"} mb-[1vh] mt-[1vh] h-auto w-[60vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${project.style} pb-[5vh]`}
                >
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[53vw] rounded-md"
                      src={project.img as string}
                      alt={project.title as string}
                    />
                    <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tStack, idx) => (
                          <div key={idx} className="h-[26px] text-nowrap">
                            {tStack}
                          </div>
                        ))}
                    </div>
                    <div className="ptitle flex w-full flex-col items-center">
                      <div
                        className={`w-[83%] overflow-hidden text-[3vw] ${project.tstyle} text-nowrap`}
                      >
                        {project.title}
                      </div>
                      <div className="w-[83%] overflow-hidden text-[2vw] text-gray-400">
                        {project.date}
                      </div>
                    </div>
                    <ul className="pdesc mx-[5vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] text-white marker:text-white">
                      <li>{project.a}</li>
                      <li>{project.b}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
