import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "../styles/skills.css";
import VanillaTilt from "vanilla-tilt";
import { skills } from "../constants/data";

const Skills: React.FC = () => {
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
        max: 20,
        gyroscopeMinAngleX: -15,
        gyroscopeMaxAngleX: 15,
        gyroscopeMinAngleY: -15,
        gyroscopeMaxAngleY: 15,
      });
    });
  });

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className="max-sm:hidden max-lg:hidden max-md:hidden w-screen h-[95vh] overflow-hidden flex flex-col items-center bg-black"
      >
        {inView && (
          <>
            <div className="skill text-[3.8vw] mt-[3vh] flex justify-center gap-[1vw] w-[20vw]">
              <div className="text-purple-500">My</div>
              <div className="text-white">Skills</div>
            </div>
            <div className="mt-[4vh] flex flex-col gap-[3vh] w-screen items-center">
              <div className="col1 flex gap-[2vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-700 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[16vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card border-[0.3vh] border-yellow-300 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[6vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-lime-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-lime-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-600 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[2vw] p-[1vh]">
                <div className="card border-[0.3vh] border-blue-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-700 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-600 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card border-[0.3vh] border-green-600 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-green-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.next}
                    alt="Next.JS"
                  />
                </div>
                <div className="card border-[0.3vh] border-purple-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-purple-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.reactRedux}
                    alt="Redux"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[2vw] p-[1vh]">
                <div className="card border-[0.3vh] border-yellow-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] bg-yellow-300 rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.express}
                    alt="Express.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-teal-700 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-teal-600 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.fast}
                    alt="FastApi"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-400 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] bg-white rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.flask}
                    alt="Flask"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tensorflow}
                    alt="Tensorflow"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-500 w-[10vw] h-[20vh] rounded-[17%] shadow-md p-[1vh] shadow-red-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.openCV}
                    alt="OpenCV"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className="max-sm:hidden lg:hidden max-md:hidden w-screen h-[133vh] overflow-hidden flex flex-col items-center bg-black"
      >
        {inTabView && (
          <>
            <div className="skill text-[3.8vw] flex justify-center gap-[1vw] w-[20vw]">
              <div className="text-purple-500">My</div>
              <div className="text-white">Skills</div>
            </div>
            <div className="mt-[4vh] flex flex-col gap-[4vh] w-screen items-center">
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-700 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[16vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card border-[0.3vh] border-yellow-300 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[6vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-lime-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-lime-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-blue-600 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-700 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-600 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-green-600 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-green-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-400 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-400 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.next}
                    alt="Next.Js"
                  />
                </div>
                <div className="card border-[0.3vh] border-purple-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-purple-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.reactRedux}
                    alt="Redux"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-yellow-400 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[9vw] h-[14vh] bg-yellow-300 rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.express}
                    alt="Express.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-teal-700 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-teal-600 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.fast}
                    alt="FastApi"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[9vw] h-[14vh] bg-white rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.flask}
                    alt="Flask"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-orange-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tensorflow}
                    alt="Tensorflow"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-500 w-[12vw] h-[18vh] rounded-[17%] shadow-md p-[1vh] shadow-red-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.openCV}
                    alt="OpenCV"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className="max-sm:hidden md:hidden w-screen h-[120vh] overflow-hidden flex flex-col items-center bg-black"
      >
        {inMobView && (
          <>
            <div className="skill text-[3.5vh] flex justify-center gap-[1vw]">
              <div className="text-purple-500">My</div>
              <div className="text-white">Skills</div>
            </div>
            <div className="mt-[4vh] flex flex-col gap-[2vh] w-screen items-center">
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-700 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[16vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card border-[0.3vh] border-yellow-300 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[6vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-lime-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-lime-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-600 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-blue-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-700 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-600 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card border-[0.3vh] border-green-600 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-green-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-400 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-400 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.next}
                    alt="Next.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-purple-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-purple-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.reactRedux}
                    alt="Redux"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-yellow-400 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[9vw] h-[10vh] bg-yellow-300 rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.express}
                    alt="Express.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[14vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-teal-700 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-teal-600 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.fast}
                    alt="FastApi"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[7vw] p-[1vh]">
                <div className="card border-[0.3vh] border-gray-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[9vw] h-[10vh] bg-white rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.flask}
                    alt="Flask"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tensorflow}
                    alt="Tensorflow"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-500 w-[18vw] h-[13vh] rounded-[17%] shadow-md p-[1vh] shadow-red-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[7vw] h-[12vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.openCV}
                    alt="OpenCV"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Small Devices Section */}
      <div
        ref={sRef}
        className="sm:hidden w-screen h-[105vh] overflow-hidden flex flex-col items-center bg-black"
      >
        {inSView && (
          <>
            <div className="skill text-[3.5vh] flex justify-center gap-[1vw]">
              <div className="text-purple-500">My</div>
              <div className="text-white">Skills</div>
            </div>
            <div className="mt-[4vh] flex flex-col gap-[1vh] w-screen items-center">
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-700 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.python}
                    alt="Python"
                  />
                </div>
                <div className="card border-[0.3vh] border-yellow-300 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[12vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.js}
                    alt="JavaScript"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.ts}
                    alt="TypeScript"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-lime-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-lime-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.nodeJS}
                    alt="NodeJS"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-600 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.cplus}
                    alt="C++"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.html}
                    alt="HTML"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-blue-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.css}
                    alt="CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-sky-700 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-600 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mysql}
                    alt="MySQL"
                  />
                </div>
                <div className="card border-[0.3vh] border-green-600 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-green-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.mongo}
                    alt="MongoDB"
                  />
                </div>
              </div>
              <div className="col2 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-sky-400 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-sky-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.react}
                    alt="React"
                  />
                </div>
                <div className="card border-[0.3vh] border-gray-400 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.next}
                    alt="Next.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-purple-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-purple-400 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[12vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.reactRedux}
                    alt="Redux"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-yellow-400 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-yellow-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[8vh] bg-yellow-300 rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.express}
                    alt="Express.js"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-400 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-blue-300 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[25vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tailwind}
                    alt="Tailwind CSS"
                  />
                </div>
                <div className="card border-[0.3vh] border-teal-700 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-teal-300 overflow-hidden flex justify-center items-center  filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.fast}
                    alt="FastApi"
                  />
                </div>
              </div>
              <div className="col1 flex gap-[5vw] p-[1vh]">
                <div className="card border-[0.3vh] border-gray-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-gray-500 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[8vh] bg-white rounded-full transition-transform transform hover:scale-110 duration-500"
                    src={skills.flask}
                    alt="Flask"
                  />
                </div>
                <div className="card border-[0.3vh] border-orange-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-orange-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.tensorflow}
                    alt="Tensorflow"
                  />
                </div>
                <div className="card border-[0.3vh] border-blue-500 w-[22vw] h-[12vh] rounded-[17%] shadow-md p-[1vh] shadow-red-400 overflow-hidden flex justify-center items-center filter grayscale hover:grayscale-0 duration-300">
                  <img
                    className="w-[13vw] h-[23vh] transition-transform transform hover:scale-110 duration-500"
                    src={skills.openCV}
                    alt="OpenCV"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
