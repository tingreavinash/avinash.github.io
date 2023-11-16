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
                        I'm a seasoned Software Engineer, and beyond the lines of code, here's a bit about the person behind the screen.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                        Innovation is the heartbeat of my professional journey. I see coding not just as a job but as an art of turning ideas into reality. Constantly exploring new technologies and methodologies, I thrive on challenges, viewing them as opportunities to innovate and enhance.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                        An avid participant in tech meetups and conferences, I believe in the power of community and learning from the experiences of fellow tech enthusiasts. Let's connect and share insights, because in this rapidly evolving tech landscape, collaboration is key.
                    </p>
                    <p className="lead text-justify" data-aos="fade-right">
                        In a world of algorithms and frameworks, I bring not just technical prowess but a holistic approach to problem-solving.
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
                            <h3>Learn to fail, because fulfilling your potential must involve some failure!</h3>
                            <em>- From <a href="https://medium.com/@Pathfinder.fyi/what-does-a-director-of-engineering-do-73054ce8eb4b" rel='noreferrer' target='_blank'>an article</a> by Priyanka Shahheydari (What does a Director of Engineering do?)</em>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe