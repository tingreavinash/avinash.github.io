import React from 'react'
import "./AboutMe.css"

function AboutMe(props) {
    return (
        <div>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id={props.id}>
                <div className="w-100">
                    <h2 className="mb-5 " data-aos="fade-down">
                        <span className="section-heading">About Me</span>
                    </h2>
                    <p className="lead text-justify" data-aos="fade-right">
                        Senior Tech Engineer @ Opus<br />
                        I am a seasoned software engineer with a passion for tackling complex problems and creating scalable solutions. I am a dedicated learner and collaborator who enjoys helping others and continuously improving my skills.<br /><br />
                        With a focus on maintaining high standards in writing production code, I am driven to constantly innovate and improve.<br />
                    </p>
                    <div className="summary-skills" data-aos="fade-right">
                        <div className="chip chip-border-primary">Data Structures</div>
                        <div className="chip chip-border-primary">Algorithms</div>
                        <div className="chip chip-border-primary">Design Patterns</div>
                        <div className="chip chip-border-primary">Microservices</div>
                        <div className="chip chip-border-primary">DevOps & Cloud</div>
                        <div className="chip chip-border-primary">Problem Solving</div>
                    </div>
                    <br />
                    <div className="bd-callout" data-aos="fade-right">
                        <p className="lead text-justify">
                            <h3>While we teach, we learn.</h3>
                            <em>-Seneca</em>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe