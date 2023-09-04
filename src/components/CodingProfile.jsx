import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt';
import { FaHackerrank, FaGithub } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';

import leetcode from '../assets/leetcode.svg';
import { codingLinks } from '../constants/data';

function CodingProfile() {
    const [ref, inView] = useInView({
        threshold: 0.15
    });

    const [tabRef, inTabView] = useInView({
        threshold: 0.15
    });

    const [mobRef, inMobView] = useInView({
        threshold: 0.15
    });

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            VanillaTilt.init(card, {
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
        <div ref={ref} className='max-lg:hidden max-md:hidden w-screen h-[100vh] overflow-hidden flex flex-col items-center bg-black'>
            {inView &&
            <>
            <div className="skill text-[6vh] mt-[3vh] flex justify-center gap-[1vw]">
                <div className='text-white'>Coding</div>
                <div className='text-purple-500'>Profile</div>
            </div>
            <div className="flex flex-col items-center gap-[5vh] w-screen mt-[4vh]">
                <div className="col1 flex gap-[5vw] pt-[2vh] h-[35vh] w-screen justify-center">
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[30vh] border-[0.2vh] rounded-[50px] border-[#E7A41F] shadow-md shadow-[#E7A41F] p-[1vh] filter grayscale hover:grayscale-0">
                        <img className='h-[20vh] hover:scale-110 duration-500' src={leetcode} alt="" />
                        <a className='w-[8vw] h-[10vh] pt-[1vh]' href={codingLinks.leetcode} target='_blank'>
                            <button className='text-[#E7A41F] w-[7.3vw] flex justify-center text-[3.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.6vh] border-[#E7A41F] shadow-md shadow-[#E7A41F] rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[30vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[20vh] hover:scale-110 duration-500 text-green-700'><FaHackerrank /></div>
                        <a className='w-[8vw] h-[10vh] pt-[1vh]' href={codingLinks.hackerRank} target='_blank'>
                            <button className='text-green-700 w-[7.3vw] flex justify-center text-[3.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.6vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                </div>
                <div className="col2 flex gap-[5vw] pt-[2vh] h-[35vh] w-screen justify-center">
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[30vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[20vh] hover:scale-110 duration-500 text-green-700'><SiGeeksforgeeks /></div>
                        <a className='w-[8vw] h-[10vh] pt-[1vh]' href={codingLinks.gfg} target='_blank'>
                            <button className='text-green-700 w-[7.3vw] flex justify-center text-[3.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.6vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[30vh] border-[0.2vh] border-gray-600 shadow-md shadow-gray-500 rounded-[50px] p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[20vh] hover:scale-110 duration-500 text-white'><FaGithub /></div>
                        <a className='w-[8vw] h-[10vh] pt-[1vh]' href={codingLinks.github} target='_blank'>
                            <button className='text-white w-[7.3vw] flex justify-center text-[3.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.6vh] border-gray-600 shadow-md shadow-gray-500 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                </div>
            </div>
            </>}
        </div>

        {/* Tablet Section */}
        <div ref={tabRef} className='lg:hidden max-md:hidden w-screen h-[90vh] overflow-hidden flex flex-col items-center bg-black'>
            {inTabView &&
            <>
            <div className="skill text-[5vh] mt-[3vh] flex justify-center gap-[1vw]">
                <div className='text-white'>Coding</div>
                <div className='text-purple-500'>Profile</div>
            </div>
            <div className="flex flex-col items-center gap-[1vh] w-screen mt-[4vh]">
                <div className="col1 flex gap-[5vw] pt-[2vh] h-[35vh] w-screen justify-center">
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[25vh] border-[0.2vh] rounded-[50px] border-[#E7A41F] shadow-md shadow-[#E7A41F] p-[1vh] filter grayscale hover:grayscale-0">
                        <img className='h-[15vh] hover:scale-110 duration-500' src={leetcode} alt="" />
                        <a className='w-[8vw] h-[9vh] pt-[1vh]' href={codingLinks.leetcode} target='_blank'>
                            <button className='text-[#E7A41F] w-[7.3vw] flex justify-center text-[3vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.1vh] border-[#E7A41F] shadow-md shadow-[#E7A41F] rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[25vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[15vh] hover:scale-110 duration-500 text-green-700'><FaHackerrank /></div>
                        <a className='w-[8vw] h-[9vh] pt-[1vh]' href={codingLinks.hackerRank} target='_blank'>
                            <button className='text-green-700 w-[7.3vw] flex justify-center text-[3vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.1vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                </div>
                <div className="col2 flex gap-[5vw] pt-[1vh] h-[35vh] w-screen justify-center">
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[25vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[15vh] hover:scale-110 duration-500 text-green-700'><SiGeeksforgeeks /></div>
                        <a className='w-[8vw] h-[9vh] pt-[1vh]' href={codingLinks.gfg} target='_blank'>
                            <button className='text-green-700 w-[7.3vw] flex justify-center text-[3vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.1vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                    <div className="card flex gap-[3vw] justify-center items-center w-[30vw] h-[25vh] border-[0.2vh] border-gray-600 shadow-md shadow-gray-500 rounded-[50px] p-[1vh] filter grayscale hover:grayscale-0">
                        <div className='text-[15vh] hover:scale-110 duration-500 text-white'><FaGithub /></div>
                        <a className='w-[8vw] h-[9vh] pt-[1vh]' href={codingLinks.github} target='_blank'>
                            <button className='text-white w-[7.3vw] flex justify-center text-[3vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[3.1vh] border-gray-600 shadow-md shadow-gray-500 rounded-full font-serif'>Open</button>
                        </a>
                    </div>
                </div>
            </div>
            </>}
        </div>

        {/* Mobile Section */}
        <div ref={mobRef} className='md:hidden w-screen h-[130vh] overflow-hidden flex flex-col items-center bg-black'>
            {inMobView &&
            <>
            <div className="skill text-[4vh] pt-[3vh] flex justify-center gap-[1vw]">
                <div className='text-white'>Coding</div>
                <div className='text-purple-500'>Profile</div>
            </div>
            <div className="flex flex-col items-center gap-[3vh] w-screen mt-[4vh] pb-[4vh]">
                <div className="card col1 flex gap-[3vw] justify-center items-center w-[60vw] h-[25vh] border-[0.2vh] rounded-[50px] border-[#E7A41F] shadow-md shadow-[#E7A41F] p-[1vh] filter grayscale hover:grayscale-0">
                    <img className='h-[15vh] hover:scale-110 duration-500' src={leetcode} alt="" />
                    <a className='w-[14vw] h-[9vh] pt-[1vh]' href={codingLinks.leetcode} target='_blank'>
                        <button className='text-[#E7A41F] w-[13vw] flex justify-center text-[2.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[2.6vh] border-[#E7A41F] shadow-md shadow-[#E7A41F] rounded-full font-serif'>Open</button>
                    </a>
                </div>
                <div className="card col2 flex gap-[3vw] justify-center items-center w-[60vw] h-[25vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                    <div className='text-[15vh] hover:scale-110 duration-500 text-green-700'><FaHackerrank /></div>
                    <a className='w-[14vw] h-[9vh] pt-[1vh]' href={codingLinks.hackerRank} target='_blank'>
                        <button className='text-green-700 w-[13vw] flex justify-center text-[2.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[2.6vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                    </a>
                </div>
                <div className="card col1 flex gap-[3vw] justify-center items-center w-[60vw] h-[25vh] border-[0.2vh] rounded-[50px] border-green-700 shadow-md shadow-green-700 p-[1vh] filter grayscale hover:grayscale-0">
                    <div className='text-[15vh] hover:scale-110 duration-500 text-green-700'><SiGeeksforgeeks /></div>
                    <a className='w-[14vw] h-[9vh] pt-[1vh]' href={codingLinks.gfg} target='_blank'>
                        <button className='text-green-700 w-[13vw] flex justify-center text-[2.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[2.6vh] border-green-700 shadow-md shadow-green-700 rounded-full font-serif'>Open</button>
                    </a>
                </div>
                <div className="card col2 flex gap-[3vw] justify-center items-center w-[60vw] h-[25vh] border-[0.2vh] border-gray-600 shadow-md shadow-gray-500 rounded-[50px] p-[1vh] filter grayscale hover:grayscale-0">
                    <div className='text-[15vh] hover:scale-110 duration-500 text-white'><FaGithub /></div>
                    <a className='w-[14vw] h-[9vh] pt-[1vh]' href={codingLinks.github} target='_blank'>
                        <button className='text-white w-[13vw] flex justify-center text-[2.5vh] border-[0.2vh] px-[1.5vw] py-[1vh] hover:translate-x-[0.2vw] hover:-translate-y-[0.3vh] duration-500 hover:text-[2.6vh] border-gray-600 shadow-md shadow-gray-500 rounded-full font-serif'>Open</button>
                    </a>
                </div>
            </div>
            </>}
        </div>
    </>
  )
}

export default CodingProfile;