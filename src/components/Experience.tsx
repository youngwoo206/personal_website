import React from "react";
import "../styles/Experience.css";
import JobCard from "./JobCard";

import dreamsuites from "../assets/dreamsuites.png";
import nissan from "../assets/nissanLogo.jpg";
import waterloo from "../assets/uwaterlooLogo.jpg";
import rogers from "../assets/rogersLogo.png";

function Experience() {
  return (
    <div className="experience">
      <h1>
        <span className="accent">~</span>My Journey so Far
        <span className="accent">~</span>
      </h1>
      <div className="experience-content">
        <JobCard
          company="Dream Suites YYZ"
          title="Front End Web Developer Intern"
          startDate="Sep 2022"
          endDate="Dec 2022"
          img={dreamsuites}
          tech="JavaScript, CSS, REST API, WordPress, Figma"
        >
          <div className="job-des-div">
            <p className="job-des">
              Interning at Dream Suites was my debut in the world of
              professional web development, and it was an experience I’ll truly
              never forget. During my time, I gained real-world experience
              designing and re-developing the Dream Suites homepage using HTML,
              CSS, and JavaScript using the WordPress framework.
            </p>
            <p className="job-des">
              I also spearheaded a major project at the company, integrating the
              Hostaway booking management system to improve overall booking
              rates by ~15% and using the Hostaway REST API to allow users to
              book their hotel stay directly from the homepage.
            </p>
          </div>
        </JobCard>

        <JobCard
          company="Nissan Canada"
          title="Engineering Intern"
          startDate="Sep 2021"
          endDate="Dec 2021"
          img={nissan}
          tech="Microsoft Excel, VBA"
        >
          <div className="job-des-div">
            <p className="job-des">
              As a car enthusiast, landing a co-op at Nissan was a dream come
              true. Under the vehicle planning team, I spent my time optimizing
              tasks that were done manually on Excel. I would work one-on-one
              with various team members, shadowing them and making sure I knew
              exactly what kind of steps they would take to finish a task. I
              would then develop a macro in VBA that would automate these steps,
              saving minutes or even hours of time.
            </p>
          </div>
        </JobCard>

        <JobCard
          company="University of Waterloo"
          title="Lithium-Ion Battery Research Assistant"
          startDate="Jan 2021"
          endDate="Apr 2021"
          img={waterloo}
          tech="Python, Pandas, Excel, Simulink, SOLIDWORKS"
        >
          <div className="job-des-div">
            <p className="job-des">
              For my second co-op, I worked as a research assistant under Prof
              Fowler where I was able to delve deep into the world of battery
              and hydrogen fuel cell research. I worked to help various PHD
              students with their research, conducting data analysis and 3D
              modelling among other tasks.
            </p>
            <p className="job-des">
              For one of the papers, I was tasked with the cleansing and
              graphing of air pollution data over a 10-year span. I was able to
              move the data from Excel to a Python list using Pandas, where I
              wrote scripts to detect and filter unwanted outliers.
            </p>
            <p className="job-des">
              By the end of the term, I was able to get published as a co-author
              in 2 separate academic papers. These papers can be found{" "}
              <span>
                <a href="https://www.mdpi.com/2571-8797/3/2/28" target="_blank">
                  here
                </a>
              </span>{" "}
              and{" "}
              <span>
                <a
                  href="https://www.mdpi.com/1996-1073/14/16/4956"
                  target="_blank"
                >
                  here
                </a>
                .
              </span>
            </p>
          </div>
        </JobCard>

        <JobCard
          company="Rogers Communications"
          title="Network Engineering Intern"
          startDate="Jun 2020"
          endDate="Aug 2020"
          img={rogers}
          tech="Microsoft Access, SQL, Excel"
        >
          <div className="job-des-div">
            <p className="job-des">
              Rogers will always hold a special place in my heart for being my
              first ever co-op. As part of the network engineering team, I was
              supposed to work alongside the civil engineers to work design and
              work with civil engineering documents. However, since the pandemic
              struck and I was no longer able to work at the office, the planned
              structure around this co-op changed.
            </p>
            <p className="job-des">
              Since there was no planned work for me, I took the initiative to
              undertake a project where I moved cell tower data from various
              Excel files into a consolidated Access database. After pitching
              this idea to my manager, he loved it and I took charge of the
              project. By the end of the term, I was able to build the framework
              for an Access database, fully completed the data transfer with
              data normalization to 1NF standard, and developed several SQL
              queries to make common use cases easier.{" "}
            </p>
          </div>
        </JobCard>
      </div>
    </div>
  );
}

export default Experience;
