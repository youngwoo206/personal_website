import React, { useEffect } from "react";
import TagCloud from "TagCloud";

function TextSphere() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const text = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "SASS",
        "Tailwind CSS",
        "Bootstrap",
        "Python",
        "Data Structures",
        "Algorithms",
        "React",
        "Node.js",
        "React Native",
        "Firebase",
        "SQL",
        "VBA",
        "Java",
        "Redux",
        "Git",
      ];
      const options = {
        radius: 280,
        maxSpeed: "slow",
        initSpeed: "none",
        keep: false,
      };

      TagCloud(container, text, options);
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
}

export default TextSphere;
