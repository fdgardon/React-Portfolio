import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/about.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header>
        {/* <a href="" className="nav-branding"> */}
          Portfolio
        {/* </a> */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </>
  );
}

export default Header;