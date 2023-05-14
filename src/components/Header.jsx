import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header>
        <a href="" className="nav-branding">
          Farid Gardoon
        </a>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </>
  );
}

export default Header;