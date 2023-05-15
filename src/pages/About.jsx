import React from "react";
import Pic from "../assets/myPic.png";
import "../stylesheets/about.css";
import { Typewriter } from 'react-simple-typewriter'

function About() {
    return (

        <section id="home" class="home">
            <div class="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Farid Gardoon</h1>
                <h3>And I'm a <span class="multiple-text">
                    <Typewriter
                        words={[
                            'Frontend Developer', 'Backend Developer', 'Full Stack Developer'
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        backDelay={1000}
                        loop
                    />
                </span></h3>
                <p>Welcome to my portfolio. I am currently student in Full Stack Development BootCamp at UC Davis.
                    I have ten years of experiences in humanitarian activities, I am looking for opportunities to start
                    a new career in coding and software Engineering. </p>
            </div>
            <div class="home-img">
                <img id="img-of-me" src={Pic} alt="Img of myself" />
            </div>
        </section>
    );
};
export default About;
