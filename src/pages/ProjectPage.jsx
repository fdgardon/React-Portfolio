import React from "react";
import Project from "./Project";
import "../stylesheets/project.css";

import medicationTracker from "../assets/medicationTracker.png";
import techBlog from "../assets/MVC-Blog.png";
import weatherDash from "../assets/weather-dashboard.png";
import searchMovie from "../assets/searchMovie.png";
import employeeTracker from "../assets/employee-tracker.png";
import codingQuiz from "../assets/coding-quiz.png"
import funFinder from "../assets/fun-finder.png"

function ProjectPage() {
  return (
    
    <section className="section-container">
      <h1 className="container-title">PROJECTS</h1>
      <div className="project-container">


        <Project
          title="Medication Tracker"
          src={medicationTracker}
          deployedLink="https://stark-brook-88760.herokuapp.com/"
          sourceLink="https://github.com/fdgardon/MedicationTracker"
          alt="Screenshot of medication tracker homepage"
        />
        
        <Project
          title="Tech Blog"
          src={techBlog}
          deployedLink="https://lit-depths-57508.herokuapp.com/"
          sourceLink="https://github.com/fdgardon/MVC-Blog"
          alt="Screenshot of Tech Blog homepage"
        />

        <Project
          title="Weather Dashboard"
          src={weatherDash}
          deployedLink="https://fdgardon.github.io/Weather-Dashboard/"
          sourceLink="https://github.com/fdgardon/Weather-Dashboard"
          alt=""
        />

        <Project
          title="Search Movie"
          src={searchMovie}
          deployedLink="https://safe-basin-64806.herokuapp.com/login"
          sourceLink="https://github.com/fdgardon/movie-search"
          alt=""
        />

        <Project
          title="Employee Tracker"
          src={employeeTracker}
          deployedLink=""
          sourceLink="https://github.com/fdgardon/Employee-Tracker-by-MySql"
          alt="Screenshot of Employee Tracker app running in a MacOS terminal"
        />

        <Project
          title="Fun Finder"
          src={funFinder}
          deployedLink="https://fdgardon.github.io/fun-finder/"
          sourceLink="https://github.com/fdgardon/fun-finder"
        />

        <Project
          title="Coding Quiz"
          src={codingQuiz}
          deployedLink="https://fdgardon.github.io/Code-Quiz-Master/"
          sourceLink="https://github.com/fdgardon/Code-Quiz-Master"
          alt="Screenshot of coding quiz"
        />
      </div>
    </section>
  );
}

export default ProjectPage;

