import React from "react";
import "../styles/Home.css";

import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="home">
      <Intro />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Home;
