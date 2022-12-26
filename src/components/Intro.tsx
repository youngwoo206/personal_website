import React, { useState } from "react";
import Typical from "react-typical";
import { CaretDown, CaretDownFill } from "react-bootstrap-icons";

function Intro(props: any) {
  const [hover, setHover] = useState(false);

  return (
    <div className="intro">
      <h1>Hi, I'm Youngwoo</h1>
      <p>
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={[
            "software developer",
            2500,
            "engineering student",
            3000,
            "lifelong learner",
            2500,
            "lego enthusiast",
            2500,
            "raptors fan",
            2500,
          ]}
        />
      </p>
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
