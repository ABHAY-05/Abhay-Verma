import React, { useRef } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

import { email, github, linkedin, phone } from '../constants/data';
import { useInView } from 'react-intersection-observer';


function Contact() {
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

  const user = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, user.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        toast.success('Message Sent Successfully');
        console.log(result.text);
      }, (error) => {
        toast.error("Something went wrong");
        console.log(error.text);
      });
  };

  return (
    <>
      {/* Desktop Section */}
      <div ref={ref} className="max-lg:hidden max-md:hidden flex gap-[10vw] w-screen h-[90vh] bg-black">
        {inView &&
        <>
          <div className="flex flex-col pl-[10vw] pt-[10vh]">
            <div className="pro flex gap-[1vw] text-[3vw]">
              <div className="text-white">Connect With</div>
              <div className="text-purple-500">Me</div>
            </div>
            <div className="Name flex gap-[1vw] items-center overflow-hidden">
              <div className='text-purple-500 text-6xl mt-[5vh] p-[1vh] duration-500 hover:scale-110'><SiMinutemailer /></div>
              <div className="text-purple-500 text-xl mt-[5vh] py-[1vh] lowercase">{email}</div>
            </div>
            <div className="Name flex gap-[1vw] items-center overflow-hidden">
              <div className='text-purple-500 text-5xl mt-[2vh] p-[1vh] duration-500 hover:scale-110'><FaPhoneAlt /></div>
              <div className="text-purple-500 text-xl mt-[2vh] py-[1vh] ml-[1vw] lowercase">{phone}</div>
            </div>
            <div className='profile-all overflow-hidden mt-[2vh] ml-[0.5vw] text-gray-500 h-[10vh] flex items-center gap-[2vw]'>
              <a href={github} target="_blank" className='git hover:text-white hover:text-[9vh] duration-500 text-[8vh]'><FaGithub /></a>
              <a href={linkedin} target="_blank" className='linked hover:text-blue-700 hover:text-[9vh] duration-500 text-[8vh]'><FaLinkedin /></a>
              <a href={`mailto:${email}`} target="_blank" className='email hover:text-teal-500 hover:text-[11vh] duration-500 text-[10vh]'><MdEmail /></a>
            </div>
          </div>
          <form ref={user} onSubmit={handleSubmit} className="col2 ptitle flex gap-[1vh] flex-col mt-[12vh] w-[42vw] overflow-hidden">
            <div className="flex gap-[2vw] h-[8vh] p-[1vh] w-[42vw]">
              <input className='w-[15vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" required name="name" id="name" placeholder='Enter Your Name' autoComplete='name' />
              <input className='w-[26vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="email" required name="email" id="email" placeholder='Enter Your Email' autoComplete='email' />
            </div>
            <div className=' p-[1vh] w-[42vw]'>
              <input className='rounded-lg shadow-sm shadow-purple-500 w-[41vw] h-[6vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" name="subject" id="subject" required placeholder='Enter the Subject' autoComplete='subject' />
            </div>
            <div className='p-[1vh] w-[42vw]'>
              <textarea className='rounded-lg shadow-sm shadow-purple-500 w-[41vw] h-[35vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' name="message" id="message" cols="20" rows="10" required placeholder='Write your Message' autoComplete='message' />
            </div>
            <button className='btn w-[9vw] rounded-full border-[0.4vh] shadow-sm shadow-purple-500 hover:shadow-md hover:border-blue-500 hover:shadow-blue-500 hover:translate-x-1 hover:-translate-y-1 duration-500 border-purple-500' type="submit" >
              <div className="flex hover:text-blue-500 duration-500 hover:text-[1.9vw] text-[1.8vw] gap-[1vw] text-purple-600 justify-center items-center">
                <div>Send</div>
                <MdSend />
              </div>
            </button>
          </form>
        </>}
      </div>

      {/* Tablet Section */}
      <div ref={tabRef} className="lg:hidden max-md:hidden flex gap-[7vw] w-screen h-[90vh] bg-black">
        {inTabView &&
        <>
          <div className="flex flex-col pl-[8vw] pt-[10vh]">
            <div className="pro flex gap-[1vw] text-[2.6vw]">
              <div className="text-white">Connect With</div>
              <div className="text-purple-500">Me</div>
            </div>
            <div className="Name flex gap-[1vw] items-center overflow-hidden">
              <div className='text-purple-500 text-5xl mt-[5vh] p-[1vh] duration-500 hover:scale-110'><SiMinutemailer /></div>
              <div className="text-purple-500 text-xl mt-[5vh] py-[1vh] lowercase">{email}</div>
            </div>
            <div className="Name flex gap-[1vw] items-center overflow-hidden">
              <div className='text-purple-500 text-4xl mt-[2vh] p-[1vh] duration-500 hover:scale-110'><FaPhoneAlt /></div>
              <div className="text-purple-500 text-xl mt-[2vh] py-[1vh] ml-[1vw] lowercase">{phone}</div>
            </div>
            <div className='profile-all overflow-hidden mt-[2vh] ml-[0.5vw] text-gray-500 h-[10vh] flex items-center gap-[2vw]'>
              <a href={github} target="_blank" className='git hover:text-white hover:text-[8vh] duration-500 text-[8vh]'><FaGithub /></a>
              <a href={linkedin} target="_blank" className='linked hover:text-blue-700 hover:text-[8vh] duration-500 text-[7vh]'><FaLinkedin /></a>
              <a href={`mailto:${email}`} target="_blank" className='email hover:text-teal-500 hover:text-[11vh] duration-500 text-[10vh]'><MdEmail /></a>
            </div>
          </div>
          <form ref={user} onSubmit={handleSubmit} className="col2 ptitle flex gap-[1vh] flex-col mt-[12vh] w-[50vw] overflow-hidden">
            <div className="flex gap-[2vw] h-[8vh] p-[1vh] w-[50vw]">
              <input className='w-[16vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" required name="name" id="name" placeholder='Enter Your Name' autoComplete='name' />
              <input className='w-[25vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="email" required name="email" id="email" placeholder='Enter Your Email' autoComplete='email' />
            </div>
            <div className=' p-[1vh] w-[50vw]'>
              <input className='rounded-lg shadow-sm shadow-purple-500 w-[43vw] h-[6vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" name="subject" id="subject" required placeholder='Enter the Subject' autoComplete='subject' />
            </div>
            <div className='p-[1vh] w-[50vw]'>
              <textarea className='rounded-lg shadow-sm shadow-purple-500 w-[43vw] h-[35vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' name="message" id="message" cols="20" rows="10" required placeholder='Write your Message' autoComplete='message' />
            </div>
            <button className='btn w-[10vw] rounded-full border-[0.4vh] shadow-sm shadow-purple-500 hover:shadow-md hover:border-blue-500 hover:shadow-blue-500 hover:translate-x-1 hover:-translate-y-1 duration-500 border-purple-500' type="submit" >
              <div className="flex hover:text-blue-500 duration-500 p-1 hover:text-[1.9vw] text-[1.8vw] gap-[1vw] text-purple-600 justify-center items-center">
                <div>Send</div>
                <MdSend />
              </div>
            </button>
          </form>
        </>}
      </div>

      {/* Mobile Section */}
      <div ref={mobRef} className="md:hidden flex flex-col items-center w-screen h-[130vh] bg-black">
        {inMobView &&
        <>
          <div className="flex flex-col pb-[2vh] mt-[5vh] w-screen items-center">
            <div className="pro flex gap-[1vw] text-[4vw] w-[40vw]">
              <div className="text-white">Connect With</div>
              <div className="text-purple-500">Me</div>
            </div>
          </div>
          <form ref={user} onSubmit={handleSubmit} className="col2 ptitle flex gap-[1vh] flex-col mt-[4vh] w-screen items-center overflow-hidden">
            <div className="p-[1vh] w-[70vw]">
              <input className='w-[68vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" required name="name" id="name" placeholder='Enter Your Name' autoComplete='name' />
            </div>
            <div className="p-[1vh] w-[70vw]">
              <input className='w-[68vw] rounded-lg shadow-sm shadow-purple-500 text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="email" required name="email" id="email" placeholder='Enter Your Email' autoComplete='email' />
            </div>
            <div className=' p-[1vh] w-[70vw]'>
              <input className='rounded-lg shadow-sm shadow-purple-500 w-[68vw] h-[6vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' type="text" name="subject" id="subject" required placeholder='Enter the Subject' autoComplete='subject' />
            </div>
            <div className='p-[1vh] w-[70vw]'>
              <textarea className='rounded-lg shadow-sm shadow-purple-500 w-[68vw] h-[35vh] text-white placeholder-purple-300 p-[1vh] bg-black border-[0.1vh] border-purple-500' name="message" id="message" cols="20" rows="10" required placeholder='Write your Message' autoComplete='message' />
            </div>
            <div className='flex justify-center p-2'>
              <button className='mbtn w-[16vw] rounded-full border-[0.4vh] shadow-sm shadow-purple-500 hover:shadow-md hover:border-blue-500 hover:shadow-blue-500 hover:translate-x-1 hover:-translate-y-1 duration-500 border-purple-500' type="submit" >
                <div className="flex hover:text-blue-500 duration-500 p-2 hover:text-[2.7vw] text-[2.6vw] gap-[1vw] text-purple-600 justify-center items-center">
                  <div>Send</div>
                  <MdSend />
                </div>
              </button>
            </div>
          </form>
          <div className="Name flex gap-[1vw] items-center overflow-hidden">
            <div className='text-purple-500 text-4xl mt-[5vh] p-[1vh] duration-500 hover:scale-110'><SiMinutemailer /></div>
            <div className="text-purple-500 text-lg mt-[5vh] py-[1vh] lowercase">{email}</div>
          </div>
          <div className="Name flex gap-[1vw] items-center overflow-hidden">
            <div className='text-purple-500 text-3xl mt-[2vh] p-[1vh] duration-500 hover:scale-110'><FaPhoneAlt /></div>
            <div className="text-purple-500 text-lg mt-[2vh] py-[1vh] ml-[1vw] lowercase">{phone}</div>
          </div>
          <div className='profile-all overflow-hidden mt-[2vh] ml-[0.5vw] text-gray-500 h-[10vh] flex items-center gap-[2vw]'>
            <a href={github} target="_blank" className='git hover:text-white hover:text-[8vh] duration-500 text-[8vh]'><FaGithub /></a>
            <a href={linkedin} target="_blank" className='linked hover:text-blue-700 hover:text-[8vh] duration-500 text-[7vh]'><FaLinkedin /></a>
            <a href={`mailto:${email}`} target="_blank" className='email hover:text-teal-500 hover:text-[11vh] duration-500 text-[10vh]'><MdEmail /></a>
          </div>
        </>}
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
      
      <div className="ptitle flex lg:text-2xl md:text-xl sm:text-lg gap-[1vw] justify-center items-center h-[10vh] bg-black bg-gradient-to-r from-purple-950 via-gray-900 to-black border-t-[0.1px] border-t-purple-400 shadow-md shadow-purple-500">
        <div className='text-gray-400 overflow-hidden py-1'>Made by</div>
        <a className='flex gap-[0.5vw] overflow-hidden py-1' href={github}>
          <div className='text-white overflow-hidden py-1'>Abhay</div>
          <div className='text-purple-500 overflow-hidden py-1'>Verma</div>
        </a>
      </div>
      
    </>
  )
}

export default Contact;