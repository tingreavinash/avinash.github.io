import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Summary from './components/Summary/Summary';
import Certificates from './components/Certificates/Certificates'
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Resources from './components/Resources/Resources';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back',
      once: true
    });
    const spinner = document.getElementById("preloader");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }
  }, []);

  

  return (
    <div>
      <Preloader />
      {!loading &&
        <div className="App">
          <Sidebar id="sideNav" />
          <div className="container-fluid p-0">
            <Summary id="summary" />
            <hr className="m-0" />
            <AboutMe id="about-me" />
            <hr className="m-0" />
            <Experience id="experience" />
            <hr className="m-0" />
            <Skills id="skills" />
            <hr className="m-0" />
            <Certificates id="certificates" />
            <hr className="m-0" />
            <Projects id="projects" />
            <hr className="m-0" />
            <Education id="education" />
            <hr className="m-0" />
            <Resources id="resources" />
          </div>
        </div>
      }


    </div>

  );
}

export default App;
