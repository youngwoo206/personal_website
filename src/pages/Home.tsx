import React from "react";
import '../styles/Home.css'

import Intro from "../components/Intro";
import Skills from "../components/Skills";

function Home() {
  return(
  <div className="home">
      <Intro />
      <Skills />
  </div>
)}

export default Home;
