import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VanillaTilt from "vanilla-tilt";

import "../styles/projects.css";
import { projects } from "../constants/data";
import linguistic from "../assets/Linguistic.png";
import flipkart from "../assets/flipkart.png";
import medScan from "../assets/medScan.png";
import IRIS from "../assets/IRIS.png";

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

  const [sRef, inSView] = useInView({
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
        className={`flex h-[160vh] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[3rem]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400"
                      src={linguistic}
                      alt="Linguistic"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[0.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-700 shadow-sm shadow-blue-700">
                          Bootstrap
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                      </div>
                      <div className="flex gap-[0.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-white shadow-sm shadow-white">
                          Flask
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[2.5vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        Linguistic OCR
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        09/2022 - 12/2022
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.linguistic.a}..
                    </div>
                    <a
                      className="-mt-[0.5vh]"
                      href={projects.linguistic.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400"
                      src={flipkart}
                      alt="Flipkart Recommendation System"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          Express.js
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-green-500 shadow-sm shadow-green-500">
                          MongoDB
                        </div>
                      </div>
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-lime-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-lime-500 shadow-sm shadow-lime-500">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="ptitle flex flex-col gap-[0.1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Product Recommendation System
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] -mt-[1vh] text-[1vw] text-white">
                      {projects.flipkart.a}..
                    </div>
                    <div className="-mt-[1vh] flex gap-[4vw]">
                      <a href={projects.flipkart.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.flipkart.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400 filter"
                      src={IRIS}
                      alt="IRIS"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          ChatBot
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-green-500 shadow-sm shadow-green-500">
                          Speech Recognition
                        </div>
                      </div>
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-500 shadow-sm shadow-blue-500">
                          Text-to-Speech
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[9vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        IRIS
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        10/2021 - 12/2021
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.IRIS.a}..
                    </div>
                    <a
                      className="mt-[5vh]"
                      href={projects.IRIS.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[63vh] w-[23vw] overflow-hidden rounded-lg border-[0.2vh] border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[20vw] rounded-md bg-blue-400"
                      src={medScan}
                      alt="MedScan"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[0.7vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-teal-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-500 shadow-sm shadow-teal-500">
                          FastAPI
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-white shadow-sm shadow-white">
                          ML
                        </div>
                      </div>
                      <div className="flex gap-[0.7vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwind
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[7vw]">
                      <div className="overflow-hidden text-[1.5vw] text-emerald-500">
                        MedScan
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        02/2023 - 05/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.medScan.a}..
                    </div>
                    <div className="mt-[4vh] flex gap-[4vw]">
                      <a href={projects.medScan.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.medScan.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex h-[140vh] w-screen flex-col items-center overflow-hidden max-md:hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2.5rem]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400"
                      src={linguistic}
                      alt="Linguistic"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-700 shadow-sm shadow-blue-700">
                          Bootstrap
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                      </div>
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-white shadow-sm shadow-white">
                          Flask
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[9vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        Linguistic OCR
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        09/2022 - 12/2022
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.linguistic.a}..
                    </div>
                    <a href={projects.linguistic.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2.5vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400"
                      src={flipkart}
                      alt="Flipkart Recommendation System"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.9vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          Express.js
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-green-500 shadow-sm shadow-green-500">
                          MongoDB
                        </div>
                      </div>
                      <div className="flex gap-[1.9vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-lime-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-lime-500 shadow-sm shadow-lime-500">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="ptitle -ml-[7vw] mt-[1vh] flex flex-col gap-[0.1vh]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Product Recommendation System
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] -mt-[1vh] text-[1vw] text-white">
                      {projects.flipkart.a}..
                    </div>
                    <div className="-mt-[0.5vh] flex gap-[5vw]">
                      <a href={projects.flipkart.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2.5vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.flipkart.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2.5vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400 filter"
                      src={IRIS}
                      alt="IRIS"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          ChatBot
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-green-500 shadow-sm shadow-green-500">
                          Speech Recognition
                        </div>
                      </div>
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-500 shadow-sm shadow-blue-500">
                          Text-to-Speech
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[15vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        IRIS
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        10/2021 - 12/2021
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.IRIS.a}..
                    </div>
                    <a
                      className="mt-[1.8vh]"
                      href={projects.IRIS.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 p-[0.5vh] px-[2.4vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card h-[53vh] w-[30vw] overflow-hidden rounded-lg border-[0.2vh] border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[20vh] w-[27vw] rounded-md bg-blue-400"
                      src={medScan}
                      alt="MedScan"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-teal-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.7vw] text-yellow-500 shadow-sm shadow-teal-500">
                          FastAPI
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-white shadow-sm shadow-white">
                          ML
                        </div>
                      </div>
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwind
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[0.9vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[14vw]">
                      <div className="overflow-hidden text-[1.5vw] text-emerald-500">
                        MedScan
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        02/2023 - 05/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[1.9vw] text-[1vw] text-white">
                      {projects.medScan.a}..
                    </div>
                    <div className="mt-[1.8vh] flex gap-[4vw]">
                      <a href={projects.medScan.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2.4vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.medScan.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 p-[0.5vh] px-[2.4vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex h-[220vh] w-screen flex-col items-center overflow-hidden max-sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2rem]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400"
                      src={linguistic}
                      alt="Linguistic"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-700 shadow-sm shadow-blue-700">
                          Bootstrap
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-white shadow-sm shadow-white">
                          Flask
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[25vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        Linguistic OCR
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        09/2022 - 12/2022
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.linguistic.a}..
                    </div>
                    <a href={projects.linguistic.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.6vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400"
                      src={flipkart}
                      alt="Flipkart Recommendation System"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[2.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          Express.js
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-green-500 shadow-sm shadow-green-500">
                          MongoDB
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-lime-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-lime-500 shadow-sm shadow-lime-500">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[16vw]">
                      <div className="overflow-hidden text-[1.5vw] text-yellow-400">
                        Product Recommendation System
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.flipkart.a}..
                    </div>
                    <div className="-mt-[0.5vh] flex gap-[10vw]">
                      <a href={projects.flipkart.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.flipkart.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400 filter"
                      src={IRIS}
                      alt="IRIS"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[2.2vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          ChatBot
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-green-500 shadow-sm shadow-green-500">
                          Speech Recognition
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-500 shadow-sm shadow-blue-500">
                          Text-to-Speech
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[32vw]">
                      <div className="overflow-hidden text-[1.5vw] text-blue-400">
                        IRIS
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        10/2021 - 12/2021
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1vw] text-white">
                      {projects.IRIS.a}..
                    </div>
                    <a
                      className="mt-[2vh]"
                      href={projects.IRIS.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.6vw] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[44vh] w-[50vw] overflow-hidden rounded-lg border-[0.2vh] border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[17vh] w-[45vw] rounded-md bg-blue-400"
                      src={medScan}
                      alt="MedScan"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-teal-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-500 shadow-sm shadow-teal-500">
                          FastAPI
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-white shadow-sm shadow-white">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwind
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[30vw]">
                      <div className="overflow-hidden text-[1.5vw] text-emerald-500">
                        MedScan
                      </div>
                      <div className="overflow-hidden text-[1vw] text-gray-400">
                        02/2023 - 05/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1vw] text-white">
                      {projects.medScan.a}..
                    </div>
                    <div className="mt-[0.8vh] flex gap-[4vw]">
                      <a href={projects.medScan.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.medScan.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Small Devices Section */}
      <div
        ref={sRef}
        className={`flex h-[200vh] w-screen flex-col items-center overflow-hidden sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inSView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2rem]">
              <div className="text-purple-500">Recent</div>
              <div className={`${darkMode ? "text-white" : "text-black"}`}>
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400"
                      src={linguistic}
                      alt="Linguistic"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-orange-500 shadow-sm shadow-orange-500">
                          HTML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-700 shadow-sm shadow-blue-700">
                          Bootstrap
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-white shadow-sm shadow-white">
                          Flask
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[1vh] flex items-center gap-[25vw]">
                      <div className="overflow-hidden text-[2.5vw] text-blue-400">
                        Linguistic OCR
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        09/2022 - 12/2022
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.4vw] text-white">
                      {projects.linguistic.a}..
                    </div>
                    <a href={projects.linguistic.link} target="_blank">
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.3vw] text-[2vh] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter duration-500 hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400"
                      src={flipkart}
                      alt="Flipkart Recommendation System"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[3vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-500 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-500 shadow-sm shadow-yellow-500">
                          Express.js
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-green-500 shadow-sm shadow-green-500">
                          MongoDB
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-lime-500 px-[0.6vw] py-[0.2vh] font-serif text-[1.3vw] text-lime-500 shadow-sm shadow-lime-500">
                          NodeJS
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[10vw]">
                      <div className="overflow-hidden text-[2.5vw] text-yellow-400">
                        Product Recommendation System
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        08/2023 - 9/2023
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1.2vw] text-white">
                      {projects.flipkart.a}..
                    </div>
                    <div className="flex gap-[10vw]">
                      <a href={projects.flipkart.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-[2vh] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.flipkart.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-[2vh] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter duration-500 hover:shadow-md hover:shadow-blue-500 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400 filter"
                      src={IRIS}
                      alt="IRIS"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[2.5vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-orange-500 shadow-sm shadow-orange-500">
                          ChatBot
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-green-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-green-500 shadow-sm shadow-green-500">
                          Speech Recognition
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.3vw] text-blue-500 shadow-sm shadow-blue-500">
                          Text-to-Speech
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[32vw]">
                      <div className="overflow-hidden text-[2.5vw] text-blue-400">
                        IRIS
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        10/2021 - 12/2021
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1vw] text-white">
                      {projects.IRIS.a}..
                    </div>
                    <a
                      className="mt-[2vh]"
                      href={projects.IRIS.link}
                      target="_blank"
                    >
                      <button className="pbtn rounded-full border-[0.2vh] border-blue-400 px-[2.6vw] text-[2vh] text-blue-400 shadow-sm shadow-blue-400">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                <div className="card h-[40vh] w-[60vw] overflow-hidden rounded-lg border-[0.2vh] border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter duration-500 hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0">
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[2vh] h-[17vh] w-[53vw] rounded-md bg-blue-400"
                      src={medScan}
                      alt="MedScan"
                    />
                    <div className="flex flex-col gap-[0.8vh]">
                      <div className="flex gap-[1.2vw] pb-[0.2vh]">
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-blue-400 shadow-sm shadow-blue-400">
                          React
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-teal-500 px-[0.5vw] py-[0.4vh] font-serif text-[1vw] text-yellow-500 shadow-sm shadow-teal-500">
                          FastAPI
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          JavaScript
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-white px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-white shadow-sm shadow-white">
                          ML
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-yellow-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-yellow-400 shadow-sm shadow-yellow-400">
                          Python
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-400 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-blue-400 shadow-sm shadow-blue-400">
                          CSS
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-blue-700 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-blue-700 shadow-sm shadow-blue-700">
                          Tailwind
                        </div>
                        <div className="flex items-center justify-center rounded-full border-[0.2vh] border-orange-500 px-[0.5vw] py-[0.2vh] font-serif text-[1.2vw] text-orange-500 shadow-sm shadow-orange-500">
                          Tensorflow
                        </div>
                      </div>
                    </div>
                    <div className="ptitle mt-[2vh] flex items-center gap-[30vw]">
                      <div className="overflow-hidden text-[2.5vw] text-emerald-500">
                        MedScan
                      </div>
                      <div className="overflow-hidden text-[1.5vw] text-gray-400">
                        02/2023 - 05/2024
                      </div>
                    </div>
                    <div className="pdesc mx-[4vw] text-[1vw] text-white">
                      {projects.medScan.a}..
                    </div>
                    <div className="flex gap-[4vw]">
                      <a href={projects.medScan.link} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-[2vh] text-yellow-400 shadow-sm shadow-yellow-400">
                          Code
                        </button>
                      </a>
                      <a href={projects.medScan.site} target="_blank">
                        <button className="pbtn rounded-full border-[0.2vh] border-yellow-400 px-[2.6vw] text-[2vh] text-yellow-400 shadow-sm shadow-yellow-400">
                          Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
