import React, { useRef } from "react";
import "../styles/Home.css";

import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

function Home() {
  const body = useRef(null);
  const skill = useRef(null);
  const experience = useRef(null);
  const footer = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <Intro body={body} skill={skill} scrollToSection={scrollToSection} />
      <div ref={body}>
        <AboutMe footer={footer} scrollToSection={scrollToSection} />
      </div>
      <div ref={skill}>
        <Skills />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
