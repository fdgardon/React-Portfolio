import React from "react";
import "../stylesheets/footer.css";
import Resume from "../assets/AnthonyQ-Resume.pdf";

function Footer() {
  return (
    <footer>
       <h3>Please Reach Out Me!</h3>
      <div class="social-media">
       
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
      </div>
    </footer>
  );
}

export default Footer;