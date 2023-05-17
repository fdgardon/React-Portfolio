import React from "react";
import Project from "./Project";
import "../stylesheets/project.css";

// Importing project screenshots
import techBlog from "../assets/MVC-Blog.png";
import weatherDash from "../assets/weather-dashboard.png";
import searchMovie from "../assets/searchMovie.png";
import employeeTracker from "../assets/employee-tracker.png";
// import socialNetwork from "../../assets/project-img/social-network-api.png";
import codingQuiz from "../assets/coding-quiz.png"
import funFinder from "../assets/fun-finder.png"

function ProjectPage() {
  return (
    
    <section className="section-container">
      <h1 className="container-title">PROJECTS</h1>
      <div className="project-container">


        <Project
          title="Tech Blog"
          src={techBlog}
          deployedLink="https://tony-tech-blog.herokuapp.com"
          sourceLink="https://github.com/TonyQ032/Tonys-Tech-Blog"
          alt="Screenshot of Tony's Tech Blog homepage"
        />

        <Project
          title="Weather Dashboard"
          src={weatherDash}
          deployedLink="https://pop-umai.herokuapp.com"
          sourceLink="https://github.com/PreDevz/POP-Umai"
          alt="Screenshot of Pop Umai's homepage"
        />

        <Project
          title="Search Movie"
          src={searchMovie}
          deployedLink="https://predevz.github.io/Platello/"
          sourceLink="https://github.com/PreDevz/Platello"
          alt="Screenshot of Platello's homepage"
        />

        <Project
          title="Employee Tracker"
          src={employeeTracker}
          deployedLink=""
          sourceLink="https://github.com/TonyQ032/Employee-Tracker"
          alt="Screenshot of Employee Tracker app running in a MacOS terminal"
        />

        <Project
          title="Fun Finder"
          src={funFinder}
          deployedLink="https://fdgardon.github.io/fun-finder/"
          sourceLink="https://github.com/TonyQ032/Social-Network-API"
          alt="Screenshot of API data retrieved in Insomnia"
        />

        <Project
          title="Coding Quiz"
          src={codingQuiz}
          deployedLink="https://tonyq032.github.io/Coding-Quiz/"
          sourceLink="https://github.com/TonyQ032/Coding-Quiz"
          alt="Screenshot of coding quiz"
        />
      </div>
    </section>
  );
}

export default ProjectPage;

