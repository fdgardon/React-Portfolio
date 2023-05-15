import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import ProjectPage from "../pages/ProjectPage";
import About from "../pages/About";
import {Contact} from "../pages/Contact";


export default function Homepage() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ProjectPage") {
      return <ProjectPage />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.StrictMode>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </React.StrictMode>
  );
}
