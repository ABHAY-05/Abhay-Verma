import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import CodingProfile from './components/CodingProfile';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {

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
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App;
