import React from "react";
import InProgress from "../components/InProgress";

import Highlights from "../components/Highlights";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <Highlights />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default Projects;
