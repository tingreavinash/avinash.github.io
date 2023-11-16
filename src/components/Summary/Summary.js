import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub, BsStackOverflow } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import "./Summary.css";
import moment from "moment";
import Person from "../Person/Person";

function Summary(props) {
  function calculateTotalExperience() {
    const today = moment();
    const diff = today.diff(moment("2017-10-03"));

    // Calculate years and months separately
    const years = Math.floor(diff / 31536000000); // 31536000000 milliseconds in a year
    const months = Math.floor((diff % 31536000000) / 2628000000); // 2628000000 milliseconds in a month

    // Create the formatted date difference string
    let dateDifference = years + " " + (years === 1 ? "year" : "years");

    if (months > 0) {
      dateDifference +=
        " and " + months + " " + (months === 1 ? "month" : "months");
    }
    return dateDifference;
  }

  return (
    <div>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id={props.id}
      >
        <div className="w-100">
          <div className="mobile-center-parent">
            <div className="mobile-image" data-aos="fade-up">
              <img
                alt="Avinash Tingre"
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={process.env.PUBLIC_URL + "/assets/images/profile.jpeg"}
              />
            </div>

            <h1 className="mb-0" data-aos="fade-down">
              Avinash
              <span className="text-primary"> Tingre</span>
            </h1>
            <br />
            <br />
            <ul
              className="lead mb-5"
              style={{ textAlign: "left" }}
              data-aos="fade-right"
            >
              <li><span style={{fontWeight: 'bold'}}>Experienced Software Engineer:</span> Accomplished professional with {" "} <mark>{calculateTotalExperience()}</mark> of expertise in developing and optimizing large-scale backend systems.</li>
              <li><span style={{fontWeight: 'bold'}}>Innovative Problem Solver:</span> Passionate about driving innovation, improving efficiency, and automating processes to enhance overall system performance and functionality.</li>
              <li><span style={{fontWeight: 'bold'}}>Proven Track Record:</span> Recognized for outstanding contributions, earning <mark>3x Spot Awards</mark> for exemplary work at Opus Technologies.</li>
              <li><span style={{fontWeight: 'bold'}}>Expertise in Java and Spring Ecosystem:</span> Proficient in <mark>Java, Spring Boot, and Spring Cloud,</mark> with a focus on designing and implementing robust solutions for critical systems.</li>
              <li><span style={{fontWeight: 'bold'}}>Cross-Functional Collaboration:</span> Effective collaborator, demonstrated through successful integration of multiple microservices in the <mark><a href="https://developer.mastercard.com/product/click-to-pay" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: 'inherit'}}>MasterCard Checkout Solutions (MACS)</a></mark>.</li>
              <li><span style={{fontWeight: 'bold'}}>Efficiency Optimization:</span> Implemented <mark>tools and frameworks</mark> that significantly improved project efficiency, such as the Audit Logging framework and the Unused WireMock Cleanup Extension.</li>
              <li><span style={{fontWeight: 'bold'}}>Versatile Skill Set:</span> Skilled in a range of technologies including ReactJS, AWS, Docker, Kubernetes, and more, contributing to the development and maintenance of high-performance applications.</li>
              
            </ul>
            <div className="social-icons" data-aos="fade-right">
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://www.linkedin.com/in/tingreavinash/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://tingreavinash.medium.com/"
                target="_blank"
                rel="noreferrer"
                title="Medium"
              >
                <BsMedium />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://github.com/tingreavinash"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <BsGithub />
              </a>
              <a
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="https://stackoverflow.com/u/12715840"
                target="_blank"
                rel="noreferrer"
                title="StackOverflow"
              >
                <BsStackOverflow />
              </a>
            </div>
            <div className="contact-icons" data-aos="fade-right">
              <a
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-toggle="tooltip"
                href="mailto:tingre.avinash@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
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
  );
}

export default Summary;
