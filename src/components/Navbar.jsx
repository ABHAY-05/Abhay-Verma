import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import VanillaTilt from 'vanilla-tilt';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    VanillaTilt.init(document.querySelector('.logo'));
});

  return (
    <>
        <nav className='bg-black fixed h-[10vh] w-screen z-10 shadow-sm shadow-black'>
            {/* Desktop Section */}
            <div className='max-md:hidden max-lg:hidden'>
                <Link activeClass='active1' to='home' spy={true} smooth={true} offset={-100}>
                    <div className='logo absolute font-bold top-0 left-[10vw] text-purple-500 text-[5vh] pt-[1.2vh] cursor-pointer'>
                        Abhay
                    </div>
                </Link>
                <ul className='list absolute flex text-purple-500 left-[35vw] gap-[1vw] top-0 text-[3.2vh] pt-[2.5vh]'> 
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-78}>
                        <li className='about hover:text-[3.3vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[90px] cursor-pointer'>
                            About
                        </li>
                    </Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-78}>
                        <li className='skills hover:text-[3.3vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[85px] cursor-pointer'>
                            Skills
                        </li>
                    </Link>
                    <Link activeClass='active' to='codingProfile' spy={true} smooth={true} offset={-78}>
                        <li className='coding hover:text-[3.2vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[210px] cursor-pointer'>
                            Coding Profile
                        </li>
                    </Link>
                    <Link activeClass='active' to='project' spy={true} smooth={true} offset={-78}>
                        <li className='project hover:text-[3.3vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[110px] cursor-pointer'>
                            Projects
                        </li>
                    </Link>
                </ul>
                <Link activeClass='activeContact' to='contact' spy={true} smooth={true} offset={-78} className='contact hover:text-[2.6vh] text-purple-400 hover:shadow-lg hover:text-amber-400 hover:shadow-violet-800 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] text-[2.5vh] absolute right-0 top-0 mt-[1.5vh] mr-[8.5vw] p-[1.5vh] border-2 rounded-full border-violet-700 cursor-pointer'>
                    Contact Me
                </Link>
            </div>

            {/* Tablet Section */}
            <div className='lg:hidden max-md:hidden'>
                <Link activeClass='active1' to='home' spy={true} smooth={true} offset={-100}>
                    <div className='logo absolute font-bold top-0 left-[7vw] text-purple-500 text-[4.5vh] mt-[1.4vh] cursor-pointer'>
                        Abhay
                    </div>
                </Link>
                <ul className='list absolute flex text-purple-500 gap-[1vw] left-[30vw] top-0 text-[3vh] pt-[2.5vh]'> 
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-78}>
                        <li className='about hover:text-[3.1vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[75px] cursor-pointer'>
                            About
                        </li>
                    </Link>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75}>
                        <li className='skills hover:text-[3.1vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[70px] cursor-pointer'>
                            Skills
                        </li>
                    </Link>
                    <Link activeClass='active' to='codingProfile' spy={true} smooth={true} offset={-75}>
                        <li className='coding hover:text-[3.1vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[190px] cursor-pointer'>
                            Coding Profile
                        </li>
                    </Link>
                    <Link activeClass='active' to='project' spy={true} smooth={true} offset={-75}>
                        <li className='project hover:text-[3.1vh] hover:text-amber-400 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] flex items-center justify-center w-[90px] cursor-pointer'>
                            Projects
                        </li>
                    </Link>
                </ul>
                <Link activeClass='activeContact' to='contact' spy={true} smooth={true} offset={-75} className='contact hover:text-[2.6vh] text-purple-400 hover:shadow-lg hover:text-amber-400 hover:shadow-violet-800 hover:-translate-y-1 hover:-translate-x-1 duration-[0.4s] text-[2.5vh] absolute right-0 top-0 mt-[1.5vh] mr-[7vw] p-[1.2vh] border-2 rounded-full border-violet-700 cursor-pointer'>
                    Contact Me
                </Link>
            </div>

            {/* Mobile Section */}
            <div className='md:hidden lg:hidden overflow-hidden'>
                <Link activeClass='active1' to='home' spy={true} smooth={true} offset={-100}>
                    <div className='logo absolute font-bold top-0 left-[7vw] text-purple-500 text-[4vh] mt-[1.2vh] cursor-pointer pr-[1vw]'>
                        Abhay
                    </div>
                </Link>
                <div onClick={() => setMenu(true)} className='menu text-violet-600 absolute top-0 right-0 mt-[3vh] mr-[7vw] z-25'>
                    < CgMenuRight size={25} />
                </div>
            </div>
        </nav>
        {menu && 
        <>
            <div onClick={() => setMenu(false)} className='h-screen w-screen fixed bg-black opacity-60 z-20' />
            <div className='mNav fixed pl-[3vw] gap-[2vh] flex flex-col h-screen w-[50vw] right-0 md:hidden lg:hidden bg-black z-20'>
                <ul className='flex flex-col text-purple-500 gap-[2vh] text-[3vh] mt-[10vh]'> 
                    <div onClick={() => setMenu(false)} className='absolute z-20 top-0 right-0 mt-[3vh] mr-[7vw]'><AiOutlineClose size={25}/></div>
                    <Link onClick={() => setMenu(false)} activeClass='active' to='about' spy={true} smooth={true} offset={-80}>
                        <li className='aboutm hover:text-[3.1vh] hover:text-amber-400 hover:translate-y-1 hover:translate-x-1 duration-[0.4s] inline-block w-full p-1 px-1 cursor-pointer'>
                            About
                        </li>
                    </Link>
                    <Link onClick={() => setMenu(false)} activeClass='active' to='skills' spy={true} smooth={true} offset={-80}>
                        <li className='skillsm hover:text-[3.1vh] hover:text-amber-400 hover:translate-y-1 hover:translate-x-1 duration-[0.4s] inline-block w-full p-1 px-1 cursor-pointer'>
                            Skills
                        </li>
                    </Link>
                    <Link onClick={() => setMenu(false)} activeClass='active' to='codingProfile' spy={true} smooth={true} offset={-75}>
                        <li className='codingm hover:text-[3.1vh] hover:text-amber-400 hover:translate-y-1 hover:translate-x-1 duration-[0.4s] inline-block w-full p-1 px-1 cursor-pointer'>
                            Coding Profile
                        </li>
                    </Link>
                    <Link onClick={() => setMenu(false)} activeClass='active' to='project' spy={true} smooth={true} offset={-75}>
                        <li className='projectm hover:text-[3.1vh] hover:text-amber-400 hover:translate-y-1 hover:translate-x-1 duration-[0.4s] inline-block w-full p-1 px-1 cursor-pointer'>
                            Projects
                        </li>
                    </Link>
                </ul>
                <Link onClick={() => setMenu(false)} activeClass='activeContact' to='contact' spy={true} smooth={true} offset={-70} className='contactm hover:text-[2.2vh] text-purple-400 mb-3 ml-1 mt-1 w-[135px] flex justify-center hover:shadow-lg hover:text-amber-400 hover:shadow-violet-800 hover:translate-y-1 hover:translate-x-1 duration-[0.4s] text-[2.4vh] p-[1.2vh] border-2 rounded-full border-violet-700 cursor-pointer'>
                    Contact Me
                </Link>
            </div>
        </>}
    </>
  )
}

export default Navbar;