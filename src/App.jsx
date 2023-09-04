import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import CodingProfile from './components/CodingProfile';
import Projects from './components/projects';

function App() {

  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="codingProfile">
        <CodingProfile />
      </section>
      <section id="project">
        <Projects />
      </section>
    </>
  )
}

export default App;
