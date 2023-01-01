import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { CaretDown, CaretDownFill } from "react-bootstrap-icons";

import TSParticles from "./tsParticles";

function Intro(props: any) {
  const [hover, setHover] = useState(false);

  return (
    <div className="intro">
      <h1>Hi, I'm Youngwoo</h1>
      {/* <TSParticles /> */}
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
        style={{ fontSize: "16px" }}
        cursor={true}
      />
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
