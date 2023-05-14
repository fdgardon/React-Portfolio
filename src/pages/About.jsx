import React from "react";
import Pic from "../pages/img4.png";
import "../stylesheets/about.css";
import { Typewriter } from 'react-simple-typewriter'
// import Typed from "react-typed";

function About() {
    return (

        <section id="home" class="home">
            <div class="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Farid Gardoon</h1>
                <h3>And I'm a <span class="multiple-text">
                    <Typewriter
                    words={[
                        'Software Developer', 'Full Stack Developer'
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    backDelay={1000}
                    loop
                    />
                    
                    </span></h3>
                <p>Welcome to my professional software engineering portfolio. I have done a couple of projects successfully
                    and I hope you enjoy from my work. </p>
                <div class="social-media">
                <a
        href="https://github.com/fdgardon"
        target="_blank"
        className="icon-container"
      >
        <i className="bi bi-github"></i>
        <p>GitHub</p>
      </a>
                
                </div>
                {/* <a href="#" class="btn">Download CV</a> */}
            </div>

            <div class="home-img">
                <img id="img-of-me" src={Pic} alt="Img of myself" />
            </div>
        </section>

    );
};
export default About;
