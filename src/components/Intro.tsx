import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { CaretDown, CaretDownFill } from "react-bootstrap-icons";
import "../styles/Intro.css";

import Js from "../assets/js.svg";
import Python from "../assets/python.svg";
import Excel from "../assets/excel.svg";
import Reactjs from "../assets/react.svg";
import Firebase from "../assets/firebase.svg";

function Intro(props: any) {
  const [hover, setHover] = useState(false);

  return (
    <div className="intro">
      <h1>Hi, I'm Youngwoo</h1>

      <TypeAnimation
        sequence={[
          "software developer",
          2500,
          "engineering student",
          2500,
          "lifelong learner",
          2500,
          "lego enthusiast",
          2500,
          "raptors fan",
          2500,
        ]}
        wrapper="div"
        repeat={Infinity}
        style={{ fontSize: "2rem" }}
        cursor={true}
      />

      <div className="icon-grid">
        <img className="svg" src={Js} alt="js" />
        <img className="svg" src={Python} alt="js" />
        <img className="svg" src={Excel} alt="js" />
        <img className="svg" src={Reactjs} alt="js" />
        <img className="svg" src={Firebase} alt="js" />
      </div>

      <div
        className="down-arrow"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.scrollToSection(props.body)}
      >
        {hover ? <CaretDownFill size={30} /> : <CaretDown size={30} />}
      </div>
    </div>
  );
}

export default Intro;
