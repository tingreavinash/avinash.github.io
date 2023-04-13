import { useEffect, useState } from 'react'
import "./Sidebar.css"
import { getCommit } from '../../services/Github';
import moment from 'moment';
import { Link, animateScroll as scroll } from "react-scroll";


function Sidebar(props) {
    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        getCommit().then((res) => setGithubData(res.data));
    }, []);

    function getCommitDuration() {
        if (githubData.length > 0) {
            return moment(githubData[0].commit.committer.date).fromNow();
        } else {
            return '';
        }
    }

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top custom-scrollbar-css" id="sideNav">
                
                <div type="button" className="navbar-brand js-scroll-trigger" onClick={scroll.scrollToTop()}>
                    <span className="d-block d-lg-none" data-aos="fade-right">Avinash Tingre</span>
                    <span className="d-none d-lg-block" data-aos="fade-down">
                        <img alt="Avinash Tingre" className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />
                    </span>
                </div>
                <button aria-controls="navbarSupportedContent" onClick={() => setExpanded(expanded ? false : true)} aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={expanded ? 'collapse navbar-collapse' : 'collapse navbar-collapse hide'}  id="navbarSupportedContent">
                    <ul className="navbar-nav" data-aos="fade-up">
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="summary"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Summary
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="about-me"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            About Me
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Experience
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Skills
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="certificates"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Certificates
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Projects
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Education
                        </Link>
                        <Link
                        onClick={() => setExpanded(false)}
                        className="nav-item nav-link"
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
                                Updated {getCommitDuration()}
                            </span>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar