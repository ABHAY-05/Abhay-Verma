import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

import { Bio } from '../constants/data';
import '../styles/About.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    VanillaTilt.init(document.querySelector('.about-icon'), {
      glare: true,
      "max-glare": 0.2,
    });
  });

  return (
    <>
      <div ref={ref} className="w-screen h-[90vh] relative overflow-hidden bg-black">
        
        {/* Desktop Section */}
        {inView && 
        <>
            <div className='max-lg:hidden max-md:hidden absolute top-[10vh] flex gap-[8vw] pl-[10vw]'>
              <div className='about-icon text-[5vh] text-purple-300 mt-[10vh] h-[20vh] w-[300px] flex justify-center items-center border-[0.5vh] border-purple-300 shadow-lg shadow-purple-500'>
                  About me
              </div>
              <div className='flex flex-col w-[50vw] gap-[2vh]'>
                <div className="aboutme flex gap-[1vw] text-[7vh] pb-[1vh] border-b-[0.2vh] border-purple-500">
                  <div className="text-white">About</div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div className="description text-white flex flex-col gap-[2vh]">
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className='tag text-[4vh] w-[50vw] flex justify-center pt-[2vh] text-purple-500 overflow-hidden'>{`"${Bio.tag}"`}</div>
                <div className='p-[2vh] -ml-[2vh] h-[15vh]  overflow-hidden'>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78}>
                    <button className="read-btn text-[2.5vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.7vh] h-[7.8vh] w-[160px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
        </>}

        {/* Tablet Section */}
        {inView && 
        <>
            <div className='lg:hidden max-md:hidden absolute top-[7vh] flex gap-[8vw] pl-[8vw]'>
              <div className='about-icon text-[4.5vh] text-purple-300 mt-[10vh] h-[17vh] w-[260px] flex justify-center items-center border-[0.5vh] border-purple-300 shadow-lg shadow-purple-500'>
                  About me
              </div>
              <div className='flex flex-col w-[50vw] gap-[2vh]'>
                <div className="aboutme flex gap-[1vw] text-[6vh] pb-[1vh] border-b-[0.2vh] border-purple-500">
                  <div className="text-white">About</div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div className="description text-white text-[15px] flex flex-col gap-[2vh]">
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className='tag text-[3.7vh] w-[50vw] flex justify-center pt-[2vh] text-purple-500 overflow-hidden'>{`"${Bio.tag}"`}</div>
                <div className='p-[2vh] -ml-[2vh] h-[15vh]  overflow-hidden'>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78}>
                    <button className="read-btn text-[2.5vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.7vh] h-[7.8vh] w-[150px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
        </>}

        {/* Mobile Section */}
        {inView && 
        <>
            <div className='md:hidden relative flex flex-col justify-center items-center gap-[2vh] -mt-[10vh]'>
              <div className='about-icon text-[4.5vh] text-purple-300 mt-[10vh] h-[18vh] w-[250px] flex justify-center items-center border-[0.5vh] border-purple-300 shadow-lg shadow-purple-500'>
                  About me
              </div>
              <div className='flex flex-col gap-[1.5vh] w-[80vw]'>
                <div className="aboutme flex gap-[1vw] text-[5vh] pb-[1vh] border-b-[0.2vh] border-purple-500">
                  <div className="text-white">About</div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div className="description text-white text-[13px] flex flex-col gap-[1.2vh]">
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className='tag text-[3.1vh] flex justify-center text-purple-500 overflow-hidden'>{`"${Bio.tag}"`}</div>
                <div className='p-[2vh] -ml-[2vh] h-[15vh] -mt-[2vh] overflow-hidden'>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78}>
                    <button className="read-btn text-[2.3vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.5vh] h-[7vh] w-[130px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
        </>}
      </div>
    </>
  )
}

export default About;