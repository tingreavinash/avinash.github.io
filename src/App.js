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
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl, {
        boundary: 'window'
      });
    });

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  })

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back',
      once: true
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);

  }, []);



  return (
    <div>
      {loading &&
        <div className='loader-mask'>
          <div className='loader'>
            <HashLoader color="#36d7b7" />

          </div>
        </div>
      }

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
