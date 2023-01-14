import React from "react";

interface Job {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  children: JSX.Element;
  img: any;
  tech: string;
}

function JobCard(props: Job) {
  return (
    <div className="jobcard">
      <div className="icons-div">
        <img src={props.img} alt="job thumbnail" className="job-pic" />
        <p className="date">
          {props.startDate} to {props.endDate}
        </p>
      </div>
      <div className="jobs-div">
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <p className="tech">
          Technologies Used: <span className="tech-list">{props.tech}</span>
        </p>
        {props.children}
      </div>
    </div>
  );
}

export default JobCard;
