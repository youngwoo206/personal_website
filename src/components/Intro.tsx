import React from "react";
import Typical from "react-typical";

function Intro() {
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
    </div>
  );
}

export default Intro;
