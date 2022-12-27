import React from "react";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import "../styles/TopSkills.css";

interface Skills {
  skill1: string;
  stars1: number[];
  skill2: string;
  stars2: number[];
  skill3: string;
  stars3: number[];
}

function TopSkills(props: Skills) {
  const starCount = props.stars1.map((star) => {
    if (star == 1) {
      return <StarFill />;
    } else if (star == 0.5) {
      return <StarHalf />;
    }
  });

  return (
    <div className="top-skills">
      <p>Top Skills</p>
      <table className="top-skills-table">
        <tr>
          <td>{props.skill1}</td>
          <td>{starCount}</td>
        </tr>
        <tr>
          <td>{props.skill2}</td>
          <td>{starCount}</td>
        </tr>
        <tr>
          <td>{props.skill3}</td>
          <td>{starCount}</td>
        </tr>
      </table>
    </div>
  );
}

export default TopSkills;
