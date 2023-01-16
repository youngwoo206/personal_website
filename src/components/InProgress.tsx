import React from "react";
import { Gear } from "react-bootstrap-icons";
import "../styles/InProgress.css";

function InProgress() {
  return (
    <div className="progress">
      <Gear size={100} className="gear" />
      <h3>Page In Progress</h3>
    </div>
  );
}

export default InProgress;
