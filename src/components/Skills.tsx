import React, { useState } from "react";
import "../styles/TextSphere.css";
import "../styles/Skills.css";
import TextSphere from "./TextSphere";

function Skills() {
  const [tab, setTab] = useState(1);

  const toggleTab = (index: number) => {
    setTab(index);
  };

  return (
    <div className="skills">
      <h1>My Skills:</h1>

      <div className="skills-grid">
        <TextSphere />

        <div className="skill-container">
          <div className="bloc-tabs">
            <div
              className={tab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Web Dev
            </div>
            <div
              className={tab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Software
            </div>
            <div
              className={tab === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Engineering
            </div>
          </div>

          <div className="content-tabs">
            <div className={tab === 1 ? "content  active-content" : "content"}>
              <h2>Web Development</h2>
              <p>web dev</p>
            </div>

            <div className={tab === 2 ? "content  active-content" : "content"}>
              <h2>Software Development</h2>
              <p>software</p>
            </div>

            <div className={tab === 3 ? "content  active-content" : "content"}>
              <h2>Engineering</h2>
              <p>eng stuff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
