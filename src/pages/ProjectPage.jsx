import React from "react";
import Project from "./Project";
import "../stylesheets/about.css";

// Importing project screenshots
// import techBlog from "../../assets/project-img/tech-blog.png";
// import popUmai from "../../assets/project-img/pop-umai.png";
// import platello from "../../assets/project-img/platello.png";
// import employeeTracker from "../../assets/project-img/employee-tracker.png";
// import socialNetwork from "../../assets/project-img/social-network-api.png";
// import codingQuiz from "../../assets/project-img/coding-quiz.png";

function ProjectPage() {
  return (
    <section id="projects">
        <h1 class="headings">PROJECTS</h1>
        <div class="row"/>
            <div class="box">
                <h2 class="headings">Password Generator</h2>
                <p>I created a website to generate password with given characters such as
                    (Upercases, Lowercases, numbers and special characters).
                </p>
            </div>
            <div class="box">
                <h2 class="headings"> Weather Dashboard</h2>
                <p>I created a weather dashboard website to check the city's current weather
                    within the next five days' forecast. The website shows Temperature, Wind Speed
                    , and humidity.
                </p>
            </div>
            <div class="box">
                <h2 class="headings">Fun Finder</h2>
                <p>I created a website to find fun when you get a plan to have a wonderful holiday.
                    The website shows a given city; the City's Weather, Restaurants, and Theater.
                </p>
            </div>
            <div class="box">
                <h2 class="headings">Movie Search</h2>
                <p>I created an application to make a user profile and then login with the given
                    information and search about movie and then save it in the user profile the movies that user like them.
                </p>
            </div>
    </section>
  );
}

export default ProjectPage;
