import { useEffect } from "react";
import image from "../assets/Abhay.png";
import VanillaTilt from "vanilla-tilt";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Bio, email, github, linkedin, resume } from "../constants/data";
import "../styles/Home.css";
import Typewriter from "./Typewriter";
import { useInView } from "react-intersection-observer";

const Home: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".image") as HTMLElement, {
      speed: 400,
    });
    VanillaTilt.init(document.querySelector(".imagem") as HTMLElement, {
      speed: 400,
    });
  });

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const darkThemeText = `${darkMode ? "text-white" : "text-black"}`;

  return (
    <div ref={ref}>
      {/* Desktop Section */}
      <div
        className={`max-lg:hidden max-md:hidden ${darkMode ? "bg-black" : "bg-white"} relative m-0 mt-[10vh] h-[90vh] w-screen overflow-hidden`}
      >
        {inView && (
          <>
            <img
              className="image absolute right-[10vw] top-[12vh] h-auto w-[27vw]"
              src={image}
              alt="Abhay"
            />
            <div className="bio absolute top-[15vh] flex h-[72vh] w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[10vw]">
              <div
                className={`intro overflow-hidden ${darkThemeText} text-[1.22rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name overflow-hidden ${darkThemeText} -mt-[3vh] pb-[1vh] pr-[1vw] text-[3.9rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[1.5vh] flex gap-[1vw] overflow-hidden border-b-[0.005vh] border-b-purple-500 pb-[1vh] text-[2.8vw]">
                <div className={`${darkThemeText} overflow-hidden`}>I'm a</div>
                <div className="type overflow-hidden text-purple-500">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc overflow-hidden ${darkThemeText} mt-[1vh] text-pretty pb-[1.5vh]`}
              >
                {Bio.desc}
              </div>
              <div className="profile-all flex h-[10vh] items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.9rem] duration-500 hover:text-[4.4rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[3.9rem] duration-500 hover:text-[4.4rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[4.9rem] duration-500 hover:text-[5.4rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
              <div className="btn -ml-[1vw] mt-[1.5vh] h-[11.5vh] w-[192px]">
                <a href={resume} target="_blank">
                  <button className="h-[7.5vh] w-[160px] rounded-full border-[0.3vh] border-purple-700 text-[1.22rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.4rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                    Résumé
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        className={`max-md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"} relative m-0 mt-[10vh] h-[90vh] w-screen overflow-hidden`}
      >
        {inView && (
          <>
            <img
              className="image absolute right-0 top-0 mr-[7vw] mt-[12vh] h-auto w-[30vw]"
              src={image}
              alt="Abhay"
            />
            <div className="bio absolute top-[12vh] flex h-[72vh] w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[7vw]">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden text-[1.25rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} -mt-[3vh] overflow-hidden pb-[1vh] pr-[1vw] text-[4rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[1.5vh] flex gap-[1vw] border-b-[0.004vh] border-purple-500 pb-[1vh] text-[3vw]">
                <div
                  className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
                >
                  I'm a
                </div>
                <div className="type overflow-hidden text-purple-500">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc ${darkMode ? "text-white" : "text-black"} mt-[1vh] overflow-hidden text-pretty`}
              >
                {Bio.desc}
              </div>
              <div className="profile-all flex h-[9vh] items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[4rem] duration-500 hover:text-[4.5rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[4rem] duration-500 hover:text-[4.5rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[5rem] duration-500 hover:text-[5.5rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
              <div className="btn -ml-[0.3vw] mt-[2vh] h-[11.5vh] w-[155px]">
                <a href={resume} target="_blank">
                  <button className="h-[7.5vh] w-[145px] rounded-full border-[0.3vh] border-purple-700 text-[1.4rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.6rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                    Résumé
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        className={`md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"} relative m-0 mt-[10vh] flex h-[90vh] w-screen flex-col items-center gap-[3vh] overflow-hidden`}
      >
        {inView && (
          <>
            <img
              className="imagem mt-[1vh] h-auto w-[40vw]"
              src={image}
              alt="Abhay"
            />
            <div className="biom flex h-[60vh] w-[90vw] flex-col gap-[0.5vh] overflow-hidden">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} -mt-[2.4vh] overflow-hidden text-nowrap pb-[1vh] pr-[1vw] pt-[1vh] text-[3.5rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[0.5vh] flex gap-[1.6vw] overflow-hidden border-b-[0.004vh] border-purple-500 pb-[1vh] text-[6vw]">
                <div
                  className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
                >
                  I'm a
                </div>
                <div className="type overflow-hidden text-purple-700">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc mt-[1vh] ${darkMode ? "text-white" : "text-black"} overflow-hidden text-pretty pb-[2vh]`}
              >
                {Bio.desc}
              </div>
              <div className="mt-[1.5vh] flex gap-[2vw] overflow-hidden pl-[0.5vw]">
                <div className="btn -ml-[0.3vw] mt-[1vh] h-[10vh] w-[130px]">
                  <a href={resume} target="_blank">
                    <button className="h-[6vh] w-[120px] rounded-full border-[0.3vh] border-purple-700 text-[1.35rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.5rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Résumé
                    </button>
                  </a>
                </div>
                <div className="profile-allm flex h-[8vh] items-center gap-[2vw] overflow-hidden text-gray-500">
                  <a
                    href={github}
                    target="_blank"
                    className={`gitm ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.5rem] duration-500 hover:text-[3.8rem]`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    className="linkedm text-[3.5rem] duration-500 hover:text-[3.8rem] hover:text-blue-700"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    className="emailm text-[4.5rem] duration-500 hover:text-[4.8rem] hover:text-teal-500"
                  >
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
