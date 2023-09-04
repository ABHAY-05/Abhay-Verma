import React, { useEffect } from 'react';
import image from '../assets/Abhay.png';
import VanillaTilt from 'vanilla-tilt';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Bio, email, github, linkedin, resume } from '../constants/data'
import '../styles/Home.css'
import Typewriter from './Typewriter';
import { useInView } from 'react-intersection-observer';

function Home() {
    useEffect(() => {
        VanillaTilt.init(document.querySelector('.image'), {
            speed: 400,
        });
        VanillaTilt.init(document.querySelector('.imagem'), {
            speed: 400,
        });
    });

    const [ref, inView] = useInView({
        threshold: 0.15
    });
    
    return (
        <div ref={ref}>
            {/* Desktop Section */}
            <div className='max-md:hidden max-lg:hidden bg-black m-0 relative w-screen h-[90vh] mt-[10vh] overflow-hidden'>
            {inView && 
                <>
                    <img className='image w-[27vw] h-auto absolute top-[12vh] right-[10vw]' src={image} alt="Abhay" />
                    <div className='bio absolute flex flex-col top-[15vh] pl-[10vw] w-[60vw] h-[72vh] gap-[2vh] overflow-hidden'>
                        <div className='intro overflow-hidden text-white text-[2.5vh]'>Hello, My Name is</div>
                        <div className='Name overflow-hidden text-white font-semibold text-[8vh] pr-[1vw] pb-[1vh] -mt-[3vh]'>{Bio.Name}</div>
                        <div className='pro overflow-hidden flex gap-[1vw] text-[5vh] border-b-[0.005vh] border-purple-500 pb-[1vh] -mt-[1.5vh]'>
                            <div className='text-white overflow-hidden'>I'm a</div>
                            <div className='type text-purple-500 overflow-hidden'><Typewriter /></div>
                        </div>
                        <div className="desc overflow-hidden text-white mt-[1vh] pb-[1.5vh]">{Bio.desc}</div>
                        <div className='profile-all overflow-hidden text-gray-500 h-[10vh] flex items-center gap-[2vw]'>
                            <a href={github} target="_blank" className='git hover:text-white hover:text-[9vh] duration-500 text-[8vh]'><FaGithub /></a>
                            <a href={linkedin} target="_blank" className='linked hover:text-blue-700 hover:text-[9vh] duration-500 text-[8vh]'><FaLinkedin /></a>
                            <a href={`mailto:${email}`} target="_blank" className='email hover:text-teal-500 hover:text-[11vh] duration-500 text-[10vh]'><MdEmail /></a>
                        </div>
                        <div className='btn h-[11.5vh] w-[192px] -ml-[1vw] mt-[1.5vh]'>
                            <a href={resume} target='_blank'>
                                <button className='text-[2.5vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.7vh] h-[7.8vh] w-[160px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]'>
                                    Résumé
                                </button>
                            </a>
                        </div>
                    </div>
                </>}
            </div>

            {/* Tablet Section */}
            <div className='lg:hidden max-md:hidden bg-black m-0 relative w-screen h-[90vh] mt-[10vh] overflow-hidden'>
                {inView && 
                <>
                    <img className='image w-[30vw] h-auto absolute top-0 right-0 mt-[12vh] mr-[7vw]' src={image} alt="Abhay" />
                    <div className='bio absolute flex flex-col top-[12vh] pl-[7vw] w-[60vw] h-[72vh] gap-[2vh] overflow-hidden'>
                        <div className='intro text-white text-[2.2vh]'>Hello, My Name is</div>
                        <div className='Name text-white font-semibold text-[7vh] pr-[1vw] pb-[1vh] -mt-[3vh]'>{Bio.Name}</div>
                        <div className='pro flex gap-[1vw] text-[4vh] border-b-[0.004vh] border-purple-500 pb-[1vh] -mt-[1.5vh]'>
                            <div className='text-white'>I'm a</div>
                            <div className='type text-purple-500'><Typewriter /></div>
                        </div>
                        <div className="desc text-white mt-[1vh] text-[2vh]">{Bio.desc}</div>
                        <div className='profile-all overflow-hidden text-gray-500 h-[9vh] flex items-center gap-[2vw]'>
                            <a href={github} target="_blank" className='git hover:text-white hover:text-[8vh] duration-500 text-[7vh]'><FaGithub /></a>
                            <a href={linkedin} target="_blank" className='linked hover:text-blue-700 hover:text-[8vh] duration-500 text-[7vh]'><FaLinkedin /></a>
                            <a href={`mailto:${email}`} target="_blank" className='email hover:text-teal-500 hover:text-[10vh] duration-500 text-[9vh]'><MdEmail /></a>
                        </div>
                        <div className='btn h-[11.5vh] w-[155px] -ml-[0.3vw] mt-[2vh]'>
                            <a href={resume} target='_blank'>
                                <button className='text-[2.5vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.7vh] h-[7.8vh] w-[145px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]'>
                                    Résumé
                                </button>
                            </a>
                        </div>
                    </div>
                </>}
            </div>

            {/* Mobile Section */}
            <div className='md:hidden lg:hidden bg-black m-0 relative w-screen h-[90vh] mt-[10vh] flex flex-col items-center gap-[3vh] overflow-hidden'>
                {inView && 
                <>
                    <img className='imagem w-[40vw] h-auto mt-[1vh]' src={image} alt="Abhay" />
                    <div className='biom flex flex-col gap-[0.5vh] w-[90vw] h-[53vh] overflow-hidden'>
                        <div className='intro text-white overflow-hidden'>Hello, My Name is</div>
                        <div className='Name text-white font-semibold text-[6vh] pt-[1vh] pr-[1vw] pb-[1vh] -mt-[2.4vh] overflow-hidden'>{Bio.Name}</div>
                        <div className='pro flex gap-[1.6vw] text-[2.8vh] border-b-[0.004vh] border-purple-500 pb-[1vh] -mt-[0.5vh] overflow-hidden'>
                            <div className='text-white overflow-hidden'>I'm a</div>
                            <div className='type text-purple-700 overflow-hidden'><Typewriter /></div>
                        </div>
                        <div className="desc text-[1.8vh] mt-[1vh] text-white overflow-hidden pb-[2vh]">{Bio.desc}</div>
                        <div className='flex gap-[2vw] overflow-hidden mt-[1.5vh] pl-[0.5vw]'>
                            <div className='btn h-[10vh] w-[130px] -ml-[0.3vw] mt-[1vh]'>
                                <a href={resume} target='_blank'>
                                    <button className='text-[2.5vh] text-purple-600 hover:text-purple-400 shadow-md shadow-purple-400 hover:text-[2.7vh] h-[6vh] w-[120px] rounded-full border-[0.3vh] border-purple-700 duration-300 hover:shadow-lg hover:shadow-purple-500 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw]'>
                                        Résumé
                                    </button>
                                </a>
                            </div>
                            <div className='profile-allm text-gray-500 h-[8vh] flex items-center gap-[2vw] overflow-hidden'>
                                <a href={github} target="_blank" className='gitm hover:text-white hover:text-[7vh] duration-500 text-[6vh]'><FaGithub /></a>
                                <a href={linkedin} target="_blank" className='linkedm hover:text-blue-700 hover:text-[7vh] duration-500 text-[6vh]'><FaLinkedin /></a>
                                <a href={`mailto:${email}`} target="_blank" className='emailm hover:text-teal-500 hover:text-[9vh] duration-500 text-[8vh]'><MdEmail /></a>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Home;