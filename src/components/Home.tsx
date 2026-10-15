import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import image from "../assets/Abhay.png";
import { Bio, email, github, linkedin, resume } from "../constants/data";
import "../styles/Home.css";
import Tilt from "./Tilt";
import Typewriter from "./Typewriter";

const Home: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const options = {
    speed: 400,
    max: 15,
    gyroscope: false,
  };

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const darkThemeText = `${darkMode ? "text-white" : "text-black"}`;

  return (
    <div ref={ref} className={`${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Desktop Section */}
      <div
        className={`relative m-0 mt-[max(8vh,75px)] min-h-[max(90vh,700px)] w-screen overflow-hidden max-lg:hidden max-md:hidden`}
      >
        {inView && (
          <>
            <Image
              className="image absolute top-[12vh] right-[10vw] h-auto w-[27vw]"
              src={image}
              alt="Abhay"
              priority
            />
            <div className="bio absolute top-[15vh] flex h-auto w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[10vw]">
              <div
                className={`intro overflow-hidden ${darkThemeText} text-[1.22rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name overflow-hidden ${darkThemeText} -mt-[3vh] pr-[1vw] pb-[1vh] text-[3.9rem] font-semibold`}
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
                className={`desc overflow-hidden ${darkThemeText} mt-[1vh] pb-[1.5vh] text-pretty`}
              >
                {Bio.desc}
              </div>
              <div className="profile-all flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
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
              <div className="btn mt-[1.5vh] h-auto w-[192px] pb-5">
                <a href={resume} target="_blank">
                  <button className="h-auto w-[160px] rounded-full border-[0.3vh] border-purple-700 py-3 text-[1.22rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.4rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
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
        className={`relative m-0 mt-[max(8vh,75px)] h-[max(90vh,700px)] w-screen overflow-hidden max-md:hidden lg:hidden`}
      >
        {inView && (
          <>
            <Image
              className="image absolute top-0 right-0 mt-[12vh] mr-[7vw] h-auto w-[30vw]"
              src={image}
              alt="Abhay"
              priority
            />
            <div className="bio absolute top-[12vh] flex h-auto w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[7vw]">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden text-[1.25rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} -mt-[3vh] overflow-hidden pr-[1vw] pb-[1vh] text-[4rem] font-semibold`}
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
              <div className="profile-all flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
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
              <div className="btn mt-[2vh] -ml-[0.3vw] h-auto w-[155px] pb-5">
                <a href={resume} target="_blank">
                  <button className="h-auto w-[145px] rounded-full border-[0.3vh] border-purple-700 py-[.6rem] text-[1.4rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.6rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
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
        className={`md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"} relative m-0 flex min-h-[100dvh] w-screen flex-col items-center gap-4 overflow-hidden px-5 pt-[84px] pb-10`}
      >
        {inView && (
          <>
            <Image
              className="imagem h-auto w-[42vw] max-w-[180px]"
              src={image}
              alt="Abhay"
              priority
            />
            <div className="biom flex h-auto w-[90vw] flex-col gap-1 overflow-hidden">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden text-[0.95rem] leading-none`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} overflow-hidden pt-1 pr-[1vw] pb-[1vh] text-[clamp(2rem,8vw,2.8rem)] leading-none font-semibold text-nowrap`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[0.5vh] flex gap-[1.6vw] overflow-hidden border-b-[0.004vh] border-purple-500 pb-[1vh] text-[5.2vw] sm:text-[5vw]">
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
                className={`desc mt-[1vh] ${darkMode ? "text-white" : "text-black"} overflow-hidden pb-[2vh] text-pretty`}
              >
                {Bio.desc}
              </div>
              <div className="mt-[1.5vh] flex items-center gap-[2vw] overflow-hidden pl-[0.5vw]">
                <div className="btn mt-6 -ml-[0.3vw] h-auto w-[130px] pb-7">
                  <a href={resume} target="_blank">
                    <button className="h-auto w-[120px] rounded-full border-[0.3vh] border-purple-700 py-[.32rem] text-[1.35rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.5rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Résumé
                    </button>
                  </a>
                </div>
                <div className="profile-allm flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
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
      <Tilt cls="image" options={options} />
      <Tilt cls="imagem" options={options} />
    </div>
  );
};

export default Home;
