import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub, BsStackOverflow } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import "./Summary.css";
import moment from 'moment';
import Person from '../Person/Person';

function Summary(props) {

    function calculateTotalExperience() {
        var today = moment();
        var startDate = moment([2017, 10, 3]);

        var years = today.diff(startDate, 'year');
        startDate.add(years, 'years');

        var months = today.diff(startDate, 'months') + 2;
        //startDate.add(months, 'months');

        //var days = today.diff(startDate, 'days');

        var totalExp;
        if (months === 12) {
            years++;
            totalExp = years + " years";
        } else if (months === 0) {
            totalExp = years + " years";
        } else {
            totalExp = years + " years and " + months + " months";
        }
        return totalExp;
    }

    // const [letterClass, setLetterClass] = useState('text-animate');
    // const nameArray = "Avinash".split("");
    // console.log(nameArray);

    // const textAnimate = () => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }

    // useState(() => {
    //     textAnimate();
    // }, [])

    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.id}>
                <div className="w-100">
                    <div className="mobile-center-parent">
                        <div className="mobile-image" data-aos="fade-up">
                            <img alt="Avinash Tingre" className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />

                        </div>

                        <h1 className="mb-0" data-aos="fade-down">Avinash
                            <span className="text-primary"> Tingre</span>
                        </h1>
                        <br /><br />
                        <ul className="lead mb-5" style={{ textAlign: "left" }} data-aos="fade-right">

                            <li>Experienced software engineer with <mark>{calculateTotalExperience()}</mark> of experience implementing large back-end systems.</li>
                            <li>Focused on innovation, efficiency, and automation with a proven track record of delivering high-quality software solutions.</li>
                            <li>Skilled in Java, Spring Boot, and Hibernate, with expertise in <mark>cloud and DevOps technologies</mark> such as AWS, Git, Docker, and Kubernetes.</li>
                            <li>Recognized for outstanding performance and team work, with a strong commitment to <mark>continuous learning</mark> and professional development.</li>
                        </ul>
                        <div className="social-icons" data-aos="fade-right">
                            <a data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://www.linkedin.com/in/tingreavinash/" target="_blank" rel="noreferrer" title="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://tingreavinash.medium.com/" target="_blank" rel="noreferrer" title="Medium">
                                <BsMedium />
                            </a>
                            <a data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://github.com/tingreavinash" target="_blank" rel="noreferrer" title="Github">
                                <BsGithub />
                            </a>
                            <a data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://stackoverflow.com/u/12715840" target="_blank" rel="noreferrer" title="StackOverflow">
                                <BsStackOverflow />
                            </a>
                        </div>
                        <div className="contact-icons" data-aos="fade-right">
                            <a data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="mailto:tingre.avinash@gmail.com" target="_blank" rel="noreferrer" title="Email">
                                <IoMail /> Drop a Mail
                            </a>
                            {/* <a data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" href="https://t.me/avinash4848" target="_blank" rel="noreferrer" title="Telegram">
                                <FaTelegramPlane /> Say Hello
                            </a> */}
                        </div>
                    </div>
                </div>
                <Person />
            </section>
        </div>
    )
}

export default Summary