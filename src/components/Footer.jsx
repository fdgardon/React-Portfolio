import React from "react";
import "../stylesheets/about.css";
import Resume from "../assets/AnthonyQ-Resume.pdf";

function Footer() {
  return (
    <footer>
      <h3>Check me out! :</h3>

      <a
        href="https://github.com/fdgardon"
        target="_blank"
        className="icon-container"
      >
        <i className="bi bi-github"></i>
        <p>GitHub</p>
      </a>

      <a
        href="https://www.linkedin.com/in/farid-gardoon/"
        target="_blank"
        className="icon-container"
      >
        <i className="bi bi-linkedin"></i>
        <p>LinkedIn</p>
      </a>

      <a href={Resume} target="_blank" className="icon-container">
        <i className="bi bi-person-circle fa-3x"></i>
        <p>Resume</p>
      </a>
    </footer>
  );
}

export default Footer;