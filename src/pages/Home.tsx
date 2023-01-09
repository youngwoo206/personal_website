import React, { useRef } from "react";
import "../styles/Home.css";

import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const body = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <Intro body={body} scrollToSection={scrollToSection} />
      <div className="intro-body" ref={body}>
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
