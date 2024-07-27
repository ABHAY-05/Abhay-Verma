import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VanillaTilt from "vanilla-tilt";
import { FaHackerrank, FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

import leetcode from "../assets/leetcode.svg";
import leetcodeDark from "../assets/leetcodeDark.svg";
import { codingLinks } from "../constants/data.ts";

const CodingProfile: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

  const [sRef, inSView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, {
        max: 10,
        gyroscopeMinAngleX: -10,
        gyroscopeMaxAngleX: 10,
        gyroscopeMinAngleY: -10,
        gyroscopeMaxAngleY: 10,
      });
    });
  });

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex h-[100vh] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[3.3rem]">
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Coding
              </div>
              <div className="text-purple-500">Profile</div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[5vh]">
              <div className="col1 flex h-[35vh] w-screen justify-center gap-[5vw] pt-[2vh]">
                <div className="card flex h-[30vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-[#E7A41F] p-[1vh] shadow-md shadow-[#E7A41F] grayscale filter hover:grayscale-0">
                  <img
                    className="h-[20vh] duration-500 hover:scale-110"
                    src={darkMode ? leetcode : leetcodeDark}
                    alt=""
                  />
                  <a
                    className="h-[10vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.leetcode}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-[#E7A41F] px-[1.5vw] py-[1vh] font-serif text-[1.5rem] text-[#E7A41F] shadow-md shadow-[#E7A41F] duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.6rem]">
                      Open
                    </button>
                  </a>
                </div>
                <div className="card flex h-[30vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                  <div className="text-[20vh] text-green-700 duration-500 hover:scale-110">
                    <FaHackerrank />
                  </div>
                  <a
                    className="h-[10vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.hackerRank}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.5rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.6rem]">
                      Open
                    </button>
                  </a>
                </div>
              </div>
              <div className="col2 flex h-[35vh] w-screen justify-center gap-[5vw] pt-[2vh]">
                <div className="card flex h-[30vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                  <div className="text-[20vh] text-green-700 duration-500 hover:scale-110">
                    <SiGeeksforgeeks />
                  </div>
                  <a
                    className="h-[10vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.gfg}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.5rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.6rem]">
                      Open
                    </button>
                  </a>
                </div>
                <div className="card flex h-[30vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-gray-600 p-[1vh] shadow-md shadow-gray-500 grayscale filter hover:grayscale-0">
                  <div
                    className={`text-[20vh] duration-500 hover:scale-110 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    <FaGithub />
                  </div>
                  <a
                    className="h-[10vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.github}
                    target="_blank"
                  >
                    <button
                      className={`${darkMode ? "text-white" : "text-black"} flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-gray-600 px-[1.5vw] py-[1vh] font-serif text-[1.5rem] shadow-md shadow-gray-500 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.6rem]`}
                    >
                      Open
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[90vh] w-screen flex-col items-center overflow-hidden max-md:hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2.5rem]">
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Coding
              </div>
              <div className="text-purple-500">Profile</div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center gap-[1vh]">
              <div className="col1 flex h-[35vh] w-screen justify-center gap-[5vw] pt-[2vh]">
                <div className="card flex h-[25vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-[#E7A41F] p-[1vh] shadow-md shadow-[#E7A41F] grayscale filter hover:grayscale-0">
                  <img
                    className="h-[15vh] duration-500 hover:scale-110"
                    src={darkMode ? leetcode : leetcodeDark}
                    alt=""
                  />
                  <a
                    className="h-[9vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.leetcode}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-[#E7A41F] px-[1.5vw] py-[0.8vh] font-serif text-[1.3rem] text-[#E7A41F] shadow-md shadow-[#E7A41F] duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.4rem]">
                      Open
                    </button>
                  </a>
                </div>
                <div className="card flex h-[25vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                  <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                    <FaHackerrank />
                  </div>
                  <a
                    className="h-[9vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.hackerRank}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[0.8vh] font-serif text-[1.3rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.4rem]">
                      Open
                    </button>
                  </a>
                </div>
              </div>
              <div className="col2 flex h-[35vh] w-screen justify-center gap-[5vw] pt-[1vh]">
                <div className="card flex h-[25vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                  <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                    <SiGeeksforgeeks />
                  </div>
                  <a
                    className="h-[9vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.gfg}
                    target="_blank"
                  >
                    <button className="flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[0.8vh] font-serif text-[1.3rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.4rem]">
                      Open
                    </button>
                  </a>
                </div>
                <div className="card flex h-[25vh] w-[35vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-gray-600 p-[1vh] shadow-md shadow-gray-500 grayscale filter hover:grayscale-0">
                  <div
                    className={`text-[15vh] duration-500 hover:scale-110 ${darkMode ? "text-white" : "text-black"}`}
                  >
                    <FaGithub />
                  </div>
                  <a
                    className="h-[9vh] w-[8vw] pt-[1vh]"
                    href={codingLinks.github}
                    target="_blank"
                  >
                    <button
                      className={`${darkMode ? "text-white" : "text-black"} flex w-[7.5vw] justify-center rounded-full border-[0.2vh] border-gray-600 px-[1.5vw] py-[0.8vh] font-serif text-[1.3rem] shadow-md shadow-gray-500 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.4rem]`}
                    >
                      Open
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[130vh] w-screen flex-col items-center overflow-hidden max-sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill flex justify-center gap-[1vw] pt-[3vh] text-[2.2rem]">
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Coding
              </div>
              <div className="text-purple-500">Profile</div>
            </div>
            <div className="flex w-screen flex-col items-center gap-[3vh] pb-[4vh] pt-[4vh]">
              <div className="card col1 flex h-[25vh] w-[60vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-[#E7A41F] p-[1vh] shadow-md shadow-[#E7A41F] grayscale filter hover:grayscale-0">
                <img
                  className="h-[15vh] duration-500 hover:scale-110"
                  src={darkMode ? leetcode : leetcodeDark}
                  alt=""
                />
                <a
                  className="h-[9vh] w-[14vw] pt-[1vh]"
                  href={codingLinks.leetcode}
                  target="_blank"
                >
                  <button className="flex w-[13vw] justify-center rounded-full border-[0.2vh] border-[#E7A41F] px-[1.5vw] py-[1vh] font-serif text-[1.15rem] text-[#E7A41F] shadow-md shadow-[#E7A41F] duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.25rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col2 flex h-[25vh] w-[60vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                  <FaHackerrank />
                </div>
                <a
                  className="h-[9vh] w-[14vw] pt-[1vh]"
                  href={codingLinks.hackerRank}
                  target="_blank"
                >
                  <button className="flex w-[13vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.15rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.25rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col1 flex h-[25vh] w-[60vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                  <SiGeeksforgeeks />
                </div>
                <a
                  className="h-[9vh] w-[14vw] pt-[1vh]"
                  href={codingLinks.gfg}
                  target="_blank"
                >
                  <button className="flex w-[13vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.15rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.25rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col2 flex h-[25vh] w-[60vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-gray-600 p-[1vh] shadow-md shadow-gray-500 grayscale filter hover:grayscale-0">
                <div
                  className={`text-[15vh] duration-500 hover:scale-110 ${darkMode ? "text-white" : "text-black"}`}
                >
                  <FaGithub />
                </div>
                <a
                  className="h-[9vh] w-[14vw] pt-[1vh]"
                  href={codingLinks.github}
                  target="_blank"
                >
                  <button
                    className={`${darkMode ? "text-white" : "text-black"} flex w-[13vw] justify-center rounded-full border-[0.2vh] border-gray-600 px-[1.5vw] py-[1vh] font-serif text-[1.15rem] shadow-md shadow-gray-500 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.25rem]`}
                  >
                    Open
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Small DEvices Section */}
      <div
        ref={sRef}
        className={`flex h-[130vh] w-screen flex-col items-center overflow-hidden sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inSView && (
          <>
            <div className="skill flex justify-center gap-[1vw] pt-[3vh] text-[2rem]">
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Coding
              </div>
              <div className="text-purple-500">Profile</div>
            </div>
            <div className="flex w-screen flex-col items-center gap-[3vh] pb-[4vh] pt-[4vh]">
              <div className="card col1 flex h-[25vh] w-[70vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-[#E7A41F] p-[1vh] shadow-md shadow-[#E7A41F] grayscale filter hover:grayscale-0">
                <img
                  className="h-[15vh] duration-500 hover:scale-110"
                  src={darkMode ? leetcode : leetcodeDark}
                  alt=""
                />
                <a
                  className="h-[9vh] w-[18vw] pt-[1vh]"
                  href={codingLinks.leetcode}
                  target="_blank"
                >
                  <button className="flex w-[17vw] justify-center rounded-full border-[0.2vh] border-[#E7A41F] px-[1.5vw] py-[1vh] font-serif text-[1.1rem] text-[#E7A41F] shadow-md shadow-[#E7A41F] duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.2rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col2 flex h-[25vh] w-[70vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                  <FaHackerrank />
                </div>
                <a
                  className="h-[9vh] w-[18vw] pt-[1vh]"
                  href={codingLinks.hackerRank}
                  target="_blank"
                >
                  <button className="flex w-[17vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.1rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.2rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col1 flex h-[25vh] w-[70vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-green-700 p-[1vh] shadow-md shadow-green-700 grayscale filter hover:grayscale-0">
                <div className="text-[15vh] text-green-700 duration-500 hover:scale-110">
                  <SiGeeksforgeeks />
                </div>
                <a
                  className="h-[9vh] w-[18vw] pt-[1vh]"
                  href={codingLinks.gfg}
                  target="_blank"
                >
                  <button className="flex w-[17vw] justify-center rounded-full border-[0.2vh] border-green-700 px-[1.5vw] py-[1vh] font-serif text-[1.1rem] text-green-700 shadow-md shadow-green-700 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.2rem]">
                    Open
                  </button>
                </a>
              </div>
              <div className="card col2 flex h-[25vh] w-[70vw] items-center justify-center gap-[3vw] rounded-[50px] border-[0.2vh] border-gray-600 p-[1vh] shadow-md shadow-gray-500 grayscale filter hover:grayscale-0">
                <div
                  className={`text-[15vh] duration-500 hover:scale-110 ${darkMode ? "text-white" : "text-black"}`}
                >
                  <FaGithub />
                </div>
                <a
                  className="h-[9vh] w-[18vw] pt-[1vh]"
                  href={codingLinks.github}
                  target="_blank"
                >
                  <button
                    className={`${darkMode ? "text-white" : "text-black"} flex w-[17vw] justify-center rounded-full border-[0.2vh] border-gray-600 px-[1.5vw] py-[1vh] font-serif text-[1.1rem] shadow-md shadow-gray-500 duration-500 hover:-translate-y-[0.3vh] hover:translate-x-[0.2vw] hover:text-[1.2rem]`}
                  >
                    Open
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CodingProfile;
