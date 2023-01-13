import React, { useState } from "react";
import "../styles/TextSphere.css";
import "../styles/Skills.css";

import TextSphere from "./TextSphere";
import TopSkills from "./TopSkills";

function Skills() {
  const [tab, setTab] = useState(1);

  const toggleTab = (index: number) => {
    setTab(index);
  };

  return (
    <div className="skills">
      <h1>
        <span className="accent">~</span>My Skills
        <span className="accent">~</span>
      </h1>

      <div className="skills-grid">
        <TextSphere />

        <div className="skill-container">
          <div className="bloc-tabs">
            <div
              className={tab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <h5>Web Dev</h5>
            </div>
            <div
              className={tab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <h5>Software</h5>
            </div>
            <div
              className={tab === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <h5>Engineering</h5>
            </div>
          </div>

          <div className="content-tabs">
            <div className={tab === 1 ? "content  active-content" : "content"}>
              <h2>Web Development</h2>
              <TopSkills
                skill1="JavaScript"
                stars1={[1, 1, 1, 1, 0.5]}
                skill2="Responsive Web Design"
                stars2={[1, 1, 1, 1]}
                skill3="Backend Technologies"
                stars3={[1, 1, 1, 0.5]}
              >
                <div className="skills-list">hello</div>
              </TopSkills>
            </div>

            <div className={tab === 2 ? "content  active-content" : "content"}>
              <h2>Software Development</h2>
              <TopSkills
                skill1="Python"
                stars1={[1, 1, 1, 1]}
                skill2="DS & Algorithms"
                stars2={[1, 1, 1, 0.5]}
                skill3="SQL & DBMS"
                stars3={[1, 1, 1]}
              >
                <div className="skills-list">hello</div>
              </TopSkills>
            </div>

            <div className={tab === 3 ? "content  active-content" : "content"}>
              <h2>Engineering</h2>
              <TopSkills
                skill1="Microsoft Excel"
                stars1={[1, 1, 1, 1, 0.5]}
                skill2="VBA & Macros"
                stars2={[1, 1, 1, 1, 0.5]}
                skill3="CAD Technologies"
                stars3={[1, 1, 1, 1, 0]}
              >
                <div className="skills-list">hello</div>
              </TopSkills>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
