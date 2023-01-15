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
  children: JSX.Element;
}

function TopSkills(props: Skills) {
  const starCount = props.stars1.map((star) => {
    if (star == 1) {
      return <StarFill />;
    } else if (star == 0.5) {
      return <StarHalf />;
    }
  });

  const starCount2 = props.stars2.map((star) => {
    if (star == 1) {
      return <StarFill />;
    } else if (star == 0.5) {
      return <StarHalf />;
    }
  });

  const starCount3 = props.stars3.map((star) => {
    if (star == 1) {
      return <StarFill />;
    } else if (star == 0.5) {
      return <StarHalf />;
    }
  });

  return (
    <div className="top-skills">
      <table className="top-skills-table">
        <tr>
          <td className="td1">
            {props.skill1}
            <span className="accent"> {">>"}</span>
          </td>
          <td className="td2">{starCount}</td>
        </tr>
        <tr>
          <td className="td3">
            {props.skill2}
            <span className="accent2"> {">>"}</span>
          </td>
          <td className="td4">{starCount2}</td>
        </tr>
        <tr>
          <td className="td5">
            {props.skill3}
            <span className="accent3"> {">>"}</span>
          </td>
          <td className="td6">{starCount3}</td>
        </tr>
      </table>
      {props.children}
    </div>
  );
}

export default TopSkills;
