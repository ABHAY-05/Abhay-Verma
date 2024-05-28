import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt';

import '../styles/projects.css'
import { projects } from '../constants/data';
import linguistic from '../assets/Linguistic.png';
import flipkart from '../assets/flipkart.png';
import medScan from '../assets/medScan.png';
import IRIS from '../assets/IRIS.png';

function Projects() {
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

    const [sRef , inSView] = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            VanillaTilt.init(card, {
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
            <div ref={ref} className='max-sm:hidden max-lg:hidden max-md:hidden w-screen h-[160vh] overflow-hidden flex flex-col items-center bg-black'>
                {inView &&
                    <>
                        <div className="skill text-[6vh] mt-[3vh] flex justify-center gap-[1vw]">
                            <div className='text-purple-500'>Recent</div>
                            <div className='text-white'>Projects</div>
                        </div>
                        <div className="flex flex-col gap-[3vh] w-screen mt-[4vh] justify-center">
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[23vw] h-[63vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[20vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={linguistic} alt="Linguistic" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[0.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">HTML</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Bootstrap</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">JavaScript</div>
                                            </div>
                                            <div className="flex gap-[0.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Tensorflow</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Flask</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[2.5vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>Linguistic OCR</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>09/2022 - 12/2022</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.linguistic.a}..</div>
                                        <a className='-mt-[0.5vh]' href={projects.linguistic.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 p-[0.5vh] px-[2vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="card overflow-hidden w-[23vw] h-[63vh] border-[0.2vh] rounded-lg border-yellow-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[20vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={flipkart} alt="Flipkart Recommendation System" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-yellow-500 shadow-sm shadow-yellow-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Express.js</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">MongoDB</div>
                                            </div>
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-lime-500 border-lime-500 shadow-sm shadow-lime-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">NodeJS</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex flex-col gap-[0.1vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-yellow-400'>Product Recommendation System</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>08/2023 - 9/2023</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw] -mt-[1vh]">{projects.flipkart.a}..</div>
                                        <div className='flex gap-[4vw] -mt-[1vh]'>
                                            <a href={projects.flipkart.link} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 p-[0.5vh] px-[2vw] shadow-sm shadow-yellow-400'>
                                                    Code
                                                </button>
                                            </a>
                                            <a href={projects.flipkart.site} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 p-[0.5vh] px-[2vw] shadow-sm shadow-yellow-400'>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card overflow-hidden w-[23vw] h-[63vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[20vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400 filter' src={IRIS} alt="IRIS" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">ChatBot</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Speech Recognition</div>
                                            </div>
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-500 border-blue-500 shadow-sm shadow-blue-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Text-to-Speech</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[9vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>IRIS</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>10/2021 - 12/2021</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.IRIS.a}..</div>
                                        <a className='mt-[5vh]' href={projects.IRIS.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 p-[0.5vh] px-[2vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[23vw] h-[63vh] border-[0.2vh] rounded-lg border-emerald-400 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-emerald-400 hover:shadow-md hover:shadow-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[20vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={medScan} alt="MedScan" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[0.7vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-teal-500 shadow-sm shadow-teal-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">FastAPI</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">ML</div>
                                            </div>
                                            <div className="flex gap-[0.7vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Tailwind</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">Tensorflow</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[7vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-emerald-500'>MedScan</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>02/2023 - 05/2024</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.medScan.a}..</div>
                                        <a className='mt-[5vh]' href={projects.medScan.link} target='_blank'>
                                            <button className='pbtn text-green-400 border-[0.2vh] rounded-full border-green-400 p-[0.5vh] px-[2vw] shadow-sm shadow-green-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>

            {/* Tablet Section */}
            <div ref={tabRef} className='max-sm:hidden max-md:hidden lg:hidden w-screen h-[140vh] overflow-hidden flex flex-col items-center bg-black'>
                {inTabView &&
                    <>
                        <div className="skill text-[5vh] mt-[3vh] flex justify-center gap-[1vw]">
                            <div className='text-purple-500'>Recent</div>
                            <div className='text-white'>Projects</div>
                        </div>
                        <div className="flex flex-col gap-[3vh] w-screen mt-[4vh] justify-center">
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[30vw] h-[53vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[27vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={linguistic} alt="Linguistic" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">HTML</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Bootstrap</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">JavaScript</div>
                                            </div>
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Tensorflow</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Flask</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[9vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>Linguistic OCR</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>09/2022 - 12/2022</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.linguistic.a}..</div>
                                        <a href={projects.linguistic.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 p-[0.5vh] px-[2.5vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="card overflow-hidden w-[30vw] h-[53vh] border-[0.2vh] rounded-lg border-yellow-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[27vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={flipkart} alt="Flipkart Recommendation System" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.9vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-yellow-500 shadow-sm shadow-yellow-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Express.js</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">MongoDB</div>
                                            </div>
                                            <div className="flex gap-[1.9vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-lime-500 border-lime-500 shadow-sm shadow-lime-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">NodeJS</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex flex-col gap-[0.1vh] mt-[1vh] -ml-[7vw]">
                                            <div className='overflow-hidden text-[1.5vw] text-yellow-400'>Product Recommendation System</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>08/2023 - 9/2023</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw] -mt-[1vh]">{projects.flipkart.a}..</div>
                                        <div className='flex gap-[5vw] -mt-[0.5vh]'>
                                            <a href={projects.flipkart.link} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 p-[0.5vh] px-[2.5vw] shadow-sm shadow-yellow-400'>
                                                    Code
                                                </button>
                                            </a>
                                            <a href={projects.flipkart.site} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 p-[0.5vh] px-[2.5vw] shadow-sm shadow-yellow-400'>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[30vw] h-[53vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[27vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400 filter' src={IRIS} alt="IRIS" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">ChatBot</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Speech Recognition</div>
                                            </div>
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-500 border-blue-500 shadow-sm shadow-blue-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Text-to-Speech</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[15vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>IRIS</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>10/2021 - 12/2021</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.IRIS.a}..</div>
                                        <a className='mt-[1.8vh]' href={projects.IRIS.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 p-[0.5vh] px-[2.4vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="card overflow-hidden w-[30vw] h-[53vh] border-[0.2vh] rounded-lg border-emerald-400 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-emerald-400 hover:shadow-md hover:shadow-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[27vw] h-[20vh] mt-[3vh] rounded-md bg-blue-400' src={medScan} alt="MedScan" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-teal-500 shadow-sm shadow-teal-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.7vw] font-serif">FastAPI</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">ML</div>
                                            </div>
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Tailwind</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[0.9vw] font-serif">Tensorflow</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[14vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-emerald-500'>MedScan</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>02/2023 - 05/2024</div>
                                        </div>
                                        <div className="pdesc text-white mx-[1.9vw] text-[1vw]">{projects.medScan.a}..</div>
                                        <a className='mt-[1.8vh]' href={projects.medScan.link} target='_blank'>
                                            <button className='pbtn text-green-400 border-[0.2vh] rounded-full border-green-400 p-[0.5vh] px-[2.4vw] shadow-sm shadow-green-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>

            {/* Mobile Section */}
            <div ref={mobRef} className='max-sm:hidden md:hidden w-screen h-[220vh] overflow-hidden flex flex-col items-center bg-black'>
                {inMobView &&
                    <>
                        <div className="skill text-[4vh] mt-[3vh] flex justify-center gap-[1vw]">
                            <div className='text-purple-500'>Recent</div>
                            <div className='text-white'>Projects</div>
                        </div>
                        <div className="flex flex-col gap-[3vh] w-screen mt-[4vh] justify-center">
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[50vw] h-[44vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[45vw] h-[17vh] mt-[3vh] rounded-md bg-blue-400' src={linguistic} alt="Linguistic" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">HTML</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Bootstrap</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Tensorflow</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Flask</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[25vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>Linguistic OCR</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>09/2022 - 12/2022</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1.2vw]">{projects.linguistic.a}..</div>
                                        <a href={projects.linguistic.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 px-[2.6vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[50vw] h-[44vh] border-[0.2vh] rounded-lg border-yellow-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[45vw] h-[17vh] mt-[3vh] rounded-md bg-blue-400' src={flipkart} alt="Flipkart Recommendation System" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[2.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-yellow-500 shadow-sm shadow-yellow-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Express.js</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">MongoDB</div>
                                                <div className="flex justify-center items-center text-lime-500 border-lime-500 shadow-sm shadow-lime-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">NodeJS</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[16vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-yellow-400'>Product Recommendation System</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>08/2023 - 9/2023</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1.2vw]">{projects.flipkart.a}..</div>
                                        <div className='flex gap-[10vw] -mt-[0.5vh]'>
                                            <a href={projects.flipkart.link} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 px-[2.6vw] shadow-sm shadow-yellow-400'>
                                                    Code
                                                </button>
                                            </a>
                                            <a href={projects.flipkart.site} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 px-[2.6vw] shadow-sm shadow-yellow-400'>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[50vw] h-[44vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[45vw] h-[17vh] mt-[3vh] rounded-md bg-blue-400 filter' src={IRIS} alt="IRIS" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[2.2vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">ChatBot</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Speech Recognition</div>
                                                <div className="flex justify-center items-center text-blue-500 border-blue-500 shadow-sm shadow-blue-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Text-to-Speech</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[32vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-blue-400'>IRIS</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>10/2021 - 12/2021</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1vw]">{projects.IRIS.a}..</div>
                                        <a className='mt-[2vh]' href={projects.IRIS.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 px-[2.6vw] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[50vw] h-[44vh] border-[0.2vh] rounded-lg border-emerald-400 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-emerald-400 hover:shadow-md hover:shadow-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[45vw] h-[17vh] mt-[3vh] rounded-md bg-blue-400' src={medScan} alt="MedScan" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-teal-500 shadow-sm shadow-teal-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">FastAPI</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Tailwind</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">Tensorflow</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[30vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[1.5vw] text-emerald-500'>MedScan</div>
                                            <div className='overflow-hidden text-[1vw] text-gray-400'>02/2023 - 05/2024</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1vw]">{projects.medScan.a}..</div>
                                        <a href={projects.medScan.link} target='_blank'>
                                            <button className='pbtn text-green-400 border-[0.2vh] rounded-full border-green-400 px-[2.6vw] shadow-sm shadow-green-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
            
            {/* Small Devices Section */}
            <div ref={sRef} className='sm:hidden md:hidden w-screen h-[200vh] overflow-hidden flex flex-col items-center bg-black'>
                {inSView &&
                    <>
                        <div className="skill text-[4vh] mt-[3vh] flex justify-center gap-[1vw]">
                            <div className='text-purple-500'>Recent</div>
                            <div className='text-white'>Projects</div>
                        </div>
                        <div className="flex flex-col gap-[3vh] w-screen mt-[4vh] justify-center">
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[60vw] h-[40vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[53vw] h-[17vh] mt-[2vh] rounded-md bg-blue-400' src={linguistic} alt="Linguistic" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">HTML</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Bootstrap</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Tensorflow</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Flask</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[25vw] mt-[1vh]">
                                            <div className='overflow-hidden text-[2.5vw] text-blue-400'>Linguistic OCR</div>
                                            <div className='overflow-hidden text-[1.5vw] text-gray-400'>09/2022 - 12/2022</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1.4vw]">{projects.linguistic.a}..</div>
                                        <a href={projects.linguistic.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 px-[2.3vw] text-[2vh] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[60vw] h-[40vh] border-[0.2vh] rounded-lg border-yellow-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[53vw] h-[17vh] mt-[2vh] rounded-md bg-blue-400' src={flipkart} alt="Flipkart Recommendation System" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[3vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.6vw] py-[0.2vh] text-[1.3vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-yellow-500 shadow-sm shadow-yellow-500 border-[0.2vh] rounded-full px-[0.6vw] py-[0.2vh] text-[1.3vw] font-serif">Express.js</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.6vw] py-[0.2vh] text-[1.3vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.6vw] py-[0.2vh] text-[1.3vw] font-serif">MongoDB</div>
                                                <div className="flex justify-center items-center text-lime-500 border-lime-500 shadow-sm shadow-lime-500 border-[0.2vh] rounded-full px-[0.6vw] py-[0.2vh] text-[1.3vw] font-serif">NodeJS</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[10vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[2.5vw] text-yellow-400'>Product Recommendation System</div>
                                            <div className='overflow-hidden text-[1.5vw] text-gray-400'>08/2023 - 9/2023</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1.2vw]">{projects.flipkart.a}..</div>
                                        <div className='flex gap-[10vw]'>
                                            <a href={projects.flipkart.link} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 px-[2.6vw] text-[2vh] shadow-sm shadow-yellow-400'>
                                                    Code
                                                </button>
                                            </a>
                                            <a href={projects.flipkart.site} target='_blank'>
                                                <button className='pbtn text-yellow-400 border-[0.2vh] rounded-full border-yellow-400 px-[2.6vw] text-[2vh] shadow-sm shadow-yellow-400'>
                                                    Demo
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col1 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[60vw] h-[40vh] border-[0.2vh] rounded-lg border-blue-500 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[53vw] h-[17vh] mt-[2vh] rounded-md bg-blue-400 filter' src={IRIS} alt="IRIS" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[2.5vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">ChatBot</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-green-500 border-green-500 shadow-sm shadow-green-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Speech Recognition</div>
                                                <div className="flex justify-center items-center text-blue-500 border-blue-500 shadow-sm shadow-blue-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.3vw] font-serif">Text-to-Speech</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[32vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[2.5vw] text-blue-400'>IRIS</div>
                                            <div className='overflow-hidden text-[1.5vw] text-gray-400'>10/2021 - 12/2021</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1vw]">{projects.IRIS.a}..</div>
                                        <a className='mt-[2vh]' href={projects.IRIS.link} target='_blank'>
                                            <button className='pbtn text-blue-400 border-[0.2vh] rounded-full border-blue-400 px-[2.6vw] text-[2vh] shadow-sm shadow-blue-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex gap-[3vw] justify-center py-[2vh] w-screen">
                                <div
                                    className="card overflow-hidden w-[60vw] h-[40vh] border-[0.2vh] rounded-lg border-emerald-400 duration-500 filter grayscale hover:grayscale-0 shadow-sm shadow-emerald-400 hover:shadow-md hover:shadow-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black">
                                    <div className="hover:scale-105 duration-500 flex flex-col items-center gap-[1vh]">
                                        <img className='w-[53vw] h-[17vh] mt-[2vh] rounded-md bg-blue-400' src={medScan} alt="MedScan" />
                                        <div className="flex flex-col gap-[0.8vh]">
                                            <div className="flex gap-[1.2vw] pb-[0.2vh]">
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">React</div>
                                                <div className="flex justify-center items-center text-yellow-500 border-teal-500 shadow-sm shadow-teal-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.4vh] text-[1vw] font-serif">FastAPI</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">JavaScript</div>
                                                <div className="flex justify-center items-center text-white border-white shadow-sm shadow-white border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">ML</div>
                                                <div className="flex justify-center items-center text-yellow-400 border-yellow-400 shadow-sm shadow-yellow-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">Python</div>
                                                <div className="flex justify-center items-center text-blue-400 border-blue-400 shadow-sm shadow-blue-400 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">CSS</div>
                                                <div className="flex justify-center items-center text-blue-700 border-blue-700 shadow-sm shadow-blue-700 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">Tailwind</div>
                                                <div className="flex justify-center items-center text-orange-500 border-orange-500 shadow-sm shadow-orange-500 border-[0.2vh] rounded-full px-[0.5vw] py-[0.2vh] text-[1.2vw] font-serif">Tensorflow</div>
                                            </div>
                                        </div>
                                        <div className="ptitle flex items-center gap-[30vw] mt-[2vh]">
                                            <div className='overflow-hidden text-[2.5vw] text-emerald-500'>MedScan</div>
                                            <div className='overflow-hidden text-[1.5vw] text-gray-400'>02/2023 - 05/2024</div>
                                        </div>
                                        <div className="pdesc text-white mx-[4vw] text-[1vw]">{projects.medScan.a}..</div>
                                        <a href={projects.medScan.link} target='_blank'>
                                            <button className='pbtn text-green-400 border-[0.2vh] rounded-full border-green-400 px-[2.6vw] text-[2vh] shadow-sm shadow-green-400'>
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Projects;