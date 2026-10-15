import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { projects } from "../constants/data";
import "../styles/projects.css";
import MultiTilt from "./MultiTilt";

type Project = { [key: string]: any };

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selected, setSelected] = useState<Project | null>(null);

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

  const options = {
    max: 3.5,
    perspective: 1400,
    scale: 1.02,
    speed: 400,
    gyroscope: false,
  };

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex min-h-[1200px] w-screen flex-col items-center overflow-x-clip pb-[10vh] max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[15vh] flex justify-center gap-[1vw] text-[3.5vw]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[7vh] flex w-screen flex-wrap justify-center gap-[3vw] px-[2vw] py-[3vh]">
              {projects.map((project, idx) => (
                <motion.div
                  layoutId={`card-${project.id as string}`}
                  transition={{ ease: "linear", duration: 0.2 }}
                  key={idx}
                  onClick={() => setSelected(project)}
                  className={`project-card ${idx % 2 ? "col1" : "col2"} mt-[1.5vh] mb-[1.5vh] h-auto w-[25vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                >
                  <div className="flex flex-col items-center gap-[1vh] duration-500">
                    <img
                      className="mt-[3vh] h-[25vh] w-[22vw] rounded-md object-cover"
                      src={(project.img?.src || project.img) as string}
                      alt={project.title as string}
                    />
                    <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tStack, idx) => (
                          <div
                            key={idx}
                            className="h-auto pb-[6px] text-[0.7vw] text-nowrap"
                          >
                            {tStack}
                          </div>
                        ))}
                    </div>
                    <div className="ptitle flex w-full flex-col items-center">
                      <div
                        className={`w-[83%] overflow-hidden text-[1.4vw] ${project.tstyle} text-nowrap`}
                      >
                        {project.title}
                      </div>
                      <div className="w-[83%] overflow-hidden text-[0.8vw] text-gray-400">
                        {project.date}
                      </div>
                    </div>
                    <ul
                      className={`pdesc mx-[2vw] flex list-inside list-disc flex-col gap-1 text-[0.9vw] text-pretty ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                    >
                      <li>{project.a}</li>
                      <li>{project.b}</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Tab Section */}
      <div
        ref={tabRef}
        className={`flex min-h-[1600px] w-screen flex-col items-center overflow-x-clip pb-[10vh] max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[15vh] flex justify-center gap-[1vw] text-[3.5vw]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-[7vh] flex w-screen flex-wrap justify-center gap-[3vw] px-[2vw] py-[3vh]">
                {projects.map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`project-card ${idx % 2 ? "col1" : "col2"} mt-[1.5vh] mb-[1.5vh] h-auto w-[40vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500">
                      <img
                        className="mt-[3vh] h-[30vh] w-[35vw] rounded-md object-cover"
                        src={(project.img?.src || project.img) as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-md:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto pb-[6px] text-[0.8vw] text-nowrap max-md:text-[1vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[2vw] ${project.tstyle} text-nowrap max-md:text-[2.2vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400 max-md:text-[1.2vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[2.8vw] flex list-inside list-disc flex-col gap-1 text-[1.3vw] text-pretty ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"} max-md:mx-[3.5vw] max-md:text-[1.5vw]`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex min-h-[2075px] w-screen flex-col items-center overflow-x-clip pb-[10vh] sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
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
            <div className="mt-[4vh] flex w-screen flex-col items-center justify-center gap-[3vh] py-[3vh]">
              {projects.map((project, idx) => (
                <motion.div
                  layoutId={`card-${project.id as string}`}
                  transition={{ ease: "linear", duration: 0.2 }}
                  key={idx}
                  onClick={() => setSelected(project)}
                  className={`project-card ${idx % 2 ? "col1" : "col2"} mt-[1.5vh] mb-[1.5vh] h-auto w-[65vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                >
                  <div className="flex flex-col items-center gap-[1vh] duration-500">
                    <img
                      className="mt-[3vh] h-[15vh] w-[53vw] rounded-md object-cover"
                      src={(project.img?.src || project.img) as string}
                      alt={project.title as string}
                    />
                    <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(7vw,1fr))] gap-x-[4px] gap-y-[2px] max-sm:grid-cols-[repeat(auto-fill,minmax(9vw,1fr))]">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tStack, idx) => (
                          <div
                            key={idx}
                            className="h-auto pb-1 text-[1vw] text-nowrap max-sm:text-[1.2vw]"
                          >
                            {tStack}
                          </div>
                        ))}
                    </div>
                    <div className="ptitle flex w-full flex-col items-center">
                      <div
                        className={`w-[83%] overflow-hidden text-[3.5vw] ${project.tstyle} text-nowrap`}
                      >
                        {project.title}
                      </div>
                      <div className="w-[83%] overflow-hidden text-[2.2vw] text-gray-400">
                        {project.date}
                      </div>
                    </div>
                    <ul
                      className={`pdesc mx-[5vw] flex list-inside list-disc flex-col gap-1 text-[2vw] text-pretty ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                    >
                      <li>{project.a}</li>
                      <li>{project.b}</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      <Modal
        selected={selected}
        setSelected={setSelected}
        darkMode={darkMode}
      />
      <MultiTilt cls="project-card" options={options} />
    </>
  );
};

export default Projects;

const Modal: React.FC<{
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
  darkMode: boolean;
}> = ({ selected, setSelected, darkMode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setCanScroll(scrollHeight - scrollTop - clientHeight > 20);
    }
  };

  useEffect(() => {
    if (!selected) return;

    checkScroll();
    const timer = setTimeout(checkScroll, 120);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", checkScroll);
    document.documentElement.classList.add("scrollbar-none");
    document.body.classList.add("scrollbar-none");

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkScroll);
      document.documentElement.classList.remove("scrollbar-none");
      document.body.classList.remove("scrollbar-none");
    };
  }, [selected, setSelected]);

  const activeStyle = selected
    ? darkMode
      ? selected.style
      : selected.lstyle
    : "";

  const cardBorderClass =
    activeStyle
      ?.split(" ")
      .find((c: string) => c.startsWith("border-") && c !== "border-[0.2vh]") ||
    "border-violet-500";

  const cardShadowClass =
    activeStyle
      ?.split(" ")
      .find(
        (c: string) =>
          c.startsWith("shadow-") &&
          ![
            "shadow-sm",
            "shadow-md",
            "shadow-lg",
            "shadow-xl",
            "shadow-2xl",
          ].includes(c),
      ) || "";

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-40 flex h-screen w-screen cursor-pointer items-center justify-center overflow-hidden bg-black/45 backdrop-blur-md"
        >
          <motion.div
            ref={contentRef}
            onScroll={checkScroll}
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-${selected.id}`}
            transition={{
              type: "tween",
              ease: [0.16, 1, 0.3, 1],
              duration: 0.32,
            }}
            className={`relative h-auto max-h-[90vh] w-[40vw] scrollbar-none overflow-y-auto rounded-2xl border-[0.2vh] ${cardBorderClass} max-lg:w-[50vw] max-md:w-[65vw] max-sm:w-[75vw] ${
              darkMode
                ? "bg-zinc-950/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
                : "bg-white/95 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]"
            } ${cardShadowClass} cursor-default pb-[5vh] shadow-md will-change-transform`}
          >
            <div className="flex flex-col items-center gap-[1vh]">
              <Image
                className="mt-[3vh] aspect-[16/10] w-[35vw] rounded-lg object-cover max-lg:w-[45vw] max-md:w-[86%] max-sm:w-[86%]"
                src={selected.img}
                alt={selected.title as string}
              />
              <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-lg:w-[90%] max-lg:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))] max-md:w-[92%] max-md:grid-cols-[repeat(auto-fill,minmax(7vw,1fr))] max-sm:w-[93%] max-sm:grid-cols-[repeat(auto-fill,minmax(11vw,1fr))]">
                {Array.isArray(selected.techStack) &&
                  selected.techStack.map((tStack, idx) => (
                    <div
                      key={idx}
                      className="h-auto pb-[6px] text-[0.7vw] text-nowrap max-lg:text-[0.8vw] max-md:text-[1vw] max-sm:text-[1.4vw]"
                    >
                      {tStack}
                    </div>
                  ))}
              </div>
              <div className="ptitle flex w-full flex-col items-center">
                <div
                  className={`w-[83%] overflow-hidden text-[2vw] max-lg:w-[88%] max-lg:text-[2.5vw] max-md:text-[3vw] ${selected.tstyle} text-nowrap max-md:w-[90%] max-sm:w-[92%] max-sm:text-[4vw]`}
                >
                  {selected.title}
                </div>
                <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400 max-lg:w-[88%] max-lg:text-[1.5vw] max-md:w-[90%] max-md:text-[2vw] max-sm:w-[92%] max-sm:text-[3vw]">
                  {selected.date}
                </div>
              </div>
              <ul
                className={`pdesc mx-[3.5vw] flex list-inside list-disc flex-col gap-1 text-[1vw] text-pretty max-lg:mx-[3vw] max-lg:text-[1.3vw] max-md:text-[1.9vw] max-sm:text-[2.2vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
              >
                <li>{selected.a}</li>
                <li>{selected.b}</li>
                {selected.c && <li>{selected.c}</li>}
              </ul>
              <div className="mt-[10vh] flex items-center justify-center gap-[10vw]">
                {selected.link && (
                  <a
                    href={selected.link as string}
                    target="_blank"
                    className={`${selected.bstyle} mx-[1vw] mb-[1vh] rounded-full px-[3vw] py-[1vh] max-md:px-[4vw] max-sm:px-[5vw]`}
                  >
                    Code
                  </a>
                )}
                {selected.site && (
                  <a
                    href={selected.site as string}
                    target="_blank"
                    className={`${selected.bstyle} mx-[1vw] mb-[1vh] rounded-full px-[3vw] py-[1vh] max-md:px-[4vw] max-sm:px-[5vw]`}
                  >
                    {selected.link ? "Demo" : "Live"}
                  </a>
                )}
              </div>
            </div>

            {canScroll && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                onClick={() =>
                  contentRef.current?.scrollBy({ top: 160, behavior: "smooth" })
                }
                className={`sticky bottom-2 z-20 mx-auto mt-4 flex w-fit cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-1 text-[0.75rem] font-medium shadow-lg backdrop-blur-md transition hover:scale-105 ${
                  darkMode
                    ? `${cardBorderClass} bg-zinc-900/85 text-purple-200 hover:bg-zinc-800`
                    : `${cardBorderClass} bg-white/85 text-purple-700 hover:bg-white`
                }`}
                title="Scroll down"
              >
                <span>Scroll for more</span>
                <motion.span
                  animate={{ y: [0, 2.5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
