import { useEffect, useState } from 'react'
import "./Sidebar.css"
import moment from 'moment';
import { Link, animateScroll as scroll } from "react-scroll";
import DarkthemeToggle from '../DarkthemeToggle/DarkthemeToggle';


function Sidebar(props) {

    const [lastUpdatedTime, setLastUpdatedTime] = useState("");

    

    useEffect(() => {

        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch('https://api.github.com/repos/tingreavinash/tingreavinash.github.io/commits?per_page=1')
            ).json();

            // Add delay for testing
            //await new Promise( res => setTimeout(res, 2000) );

            // set state when the data received
            if (data.length > 0) {
                var time = moment(data[0].commit.committer.date).fromNow();
                setLastUpdatedTime(time);
            }
        };

        dataFetch();
    }, []);

    return (
        <div>
            <nav className="navbar custom-navbar navbar-expand-lg navbar-dark bg-primary fixed-top custom-scrollbar-css" id="sideNav">

                <a type="button" className="navbar-brand js-scroll-trigger" href="#root" onClick={scroll.scrollToTop()}>
                    <span className="d-block d-lg-none" data-aos="fade-right">Avinash Tingre</span>
                    <span className="d-none d-lg-block" data-aos="fade-down">
                        <img alt="Avinash Tingre" className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />
                    </span>
                </a>
                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className="navbar-nav" data-aos="fade-up">
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="summary"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Summary
                        </Link>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="about-me"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About Me
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Experience
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Skills
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="certificates"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Certificates
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Projects
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Education
                        </Link>
                        <Link

                            className="nav-link"
                            activeClass="active"
                            to="resources"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Resources
                        </Link>
                        <br />
                        <div style={{ color: "white" }}>
                            <span id="last-update-time" className="badge rounded-pill bg-warning text-dark">
                                Updated {lastUpdatedTime}
                            </span>
                        </div>
                        <DarkthemeToggle />


                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar