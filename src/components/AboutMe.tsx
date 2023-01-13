import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>
        <span className="accent">~</span>About Me
        <span className="accent">~</span>
      </h1>
      <div className="profile-pic"></div>
      <div className="about-me-text">
        <p>
          I'm a 3rd year chemical engineering student from the University of
          Waterloo with a passion for software development. I'm a creative
          thinker who loves to come up with innovative solutions to complex
          problems. I'm also a versatile worker who thrives in both independent
          and team environments.
        </p>
        <p>
          As for my interests, I'm fascinated with all things engineering.
          Anything from programming to soldering, planes, cars, robotics and
          more all catch my attention. Aside from that I like to play
          basketball, hockey, and strategy games. I also have 2 pet dogs and can
          be bribed to do pretty much anything in exchange for some McDonald's.
        </p>
        <p>
          Please feel free to contact me anytime! You can find my contact
          information <span className="accent">here</span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
