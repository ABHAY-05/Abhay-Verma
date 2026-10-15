"use client";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Home from "../components/Home";
import Skills from "../components/Skills";
import CodingProfile from "../components/CodingProfile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Page: React.FC = () => {
  const useAppSelector = useSelector.withTypes<RootState>();
  const { isDarkMode } = useAppSelector((state: RootState) => state.darkMode);

  return (
    <>
      <Navbar darkMode={isDarkMode} />
      <section id="home">
        <Home darkMode={isDarkMode} />
      </section>
      <section id="about">
        <About darkMode={isDarkMode} />
      </section>
      <section id="skills">
        <Skills darkMode={isDarkMode} />
      </section>
      <section id="codingProfile">
        <CodingProfile darkMode={isDarkMode} />
      </section>
      <section id="project">
        <Projects darkMode={isDarkMode} />
      </section>
      <section id="contact">
        <Contact darkMode={isDarkMode} />
      </section>
    </>
  );
};

export default Page;
