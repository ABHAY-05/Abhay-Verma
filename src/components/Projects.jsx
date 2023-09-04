import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt';

function Projects() {
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
            VanillaTilt.init(card);
        });
    });

  return (
    <>
        {/* Desktop Section */}
        <div ref={ref} className='max-lg:hidden max-md:hidden w-screen h-[90vh] overflow-hidden flex flex-col items-center bg-black'>
            {inView &&
            <>
                <div className="skill text-[6vh] mt-[3vh] flex justify-center gap-[1vw]">
                    <div className='text-purple-500'>Latest</div>
                    <div className='text-white'>Projects</div>
                </div>
            </>}
        </div>

        {/* Tablet Section */}
        <div ref={tabRef} className='max-md:hidden lg:hidden w-screen h-[90vh] overflow-hidden flex flex-col items-center bg-black'>
            {inTabView &&
            <>
                <div className="skill text-[5vh] mt-[3vh] flex justify-center gap-[1vw]">
                    <div className='text-purple-500'>Latest</div>
                    <div className='text-white'>Projects</div>
                </div>
            </>}
        </div>

        {/* Mobile Section */}
        <div ref={mobRef} className='md:hidden w-screen h-[90vh] overflow-hidden flex flex-col items-center bg-black'>
            {inMobView &&
            <>
                <div className="skill text-[4vh] mt-[3vh] flex justify-center gap-[1vw]">
                    <div className='text-purple-500'>Latest</div>
                    <div className='text-white'>Projects</div>
                </div>
            </>}
        </div>
    </>
  )
}

export default Projects;