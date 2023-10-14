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
              <li>
                Experienced software engineer with{" "}
                <mark>{calculateTotalExperience()}</mark> of experience
                implementing large back-end systems.
              </li>
              <li>
                Focused on innovation, efficiency, and automation with a proven
                track record of delivering high-quality software solutions.
              </li>
              <li>
                Skilled in Java, Spring Boot, and Hibernate, with expertise in{" "}
                <mark>cloud and DevOps technologies</mark> such as AWS, Git,
                Docker, and Kubernetes.
              </li>
              <li>
                Recognized for outstanding performance and team work, with a
                strong commitment to <mark>continuous learning</mark> and
                professional development.
              </li>
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
