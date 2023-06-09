import React, { useState } from "react";
import "../stylesheets/navbar.css";
import Resume from "../assets/Resume- Farid- Gardoon.pdf";

function Navbar({ currentPage, handlePageChange }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-menu ${isActive ? "" : "active"}`}>
        <li className="nav-item">
          <a
            onClick={() => {
              handleToggle();
              handlePageChange("About");
            }}
            href="#about"
            className={
              currentPage === "About" ? "nav-link selected" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => {
              handleToggle();
              handlePageChange("ProjectPage");
            }}
            href="#portfolio"
            className={
              currentPage === "ProjectPage" ? "nav-link selected" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => {
              handleToggle();
              handlePageChange("Contact");
            }}
            href="#contact"
            className={
              currentPage === "Contact" ? "nav-link selected" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={handleToggle}
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${isActive ? "" : "active"}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
